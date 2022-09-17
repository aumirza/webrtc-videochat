import { firestore } from './firebase'
import { collection, updateDoc, getDoc, doc, setDoc, addDoc, onSnapshot } from '@firebase/firestore'

const servers = {
  iceServers: [
    {
      urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302']
    }
  ],
  iceCandidatePoolSize: 10
}

const pc = new RTCPeerConnection(servers)

let localStream = null
let remoteStream = null


const callButton = document.getElementById('callButton')
const callInput = document.getElementById('callInput')

const JoinInput = document.getElementById('JoinInput')
const joinButton = document.getElementById('joinButton')

const hangupButton = document.getElementById('hangupButton')

const showVideoButton = document.getElementById('showVideoButton')

const localVideo = document.getElementById('localVideo')
const remoteVideo = document.getElementById('remoteVideo')

const videos = document.getElementById('videos')


const addStreams = async () => {
  localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })

  // Push tracks from local stream to peer connection
  localStream.getTracks().forEach(track => {
    pc.addTrack(track, localStream)
  })

  localVideo.srcObject = localStream
  remoteVideo.srcObject = remoteStream
}

const showVideo = async () => {
  videos.style.display = 'block'
}


// Create a call in firestore
const initialiseCall = async () => {
  remoteStream = new MediaStream()
  await addStreams();
  pc.ontrack = event => {
    event.streams[0].getTracks().forEach(track => {
      remoteStream.addTrack(track)
    })
  }
  const callDocRef = doc(collection(firestore, 'calls'))
  const offerCandidates = collection(firestore, callDocRef.path, 'offerCandidates')
  const answerCandidates = collection(firestore, callDocRef.path, 'answerCandidates')

  callInput.value = callDocRef.id

  // listen to offer candidate and add to firestore
  pc.onicecandidate = event => {
    event.candidate && addDoc(offerCandidates, event.candidate.toJSON())
  }

  // create offer
  const offerDescription = await pc.createOffer()
  await pc.setLocalDescription(offerDescription)

  // Add offer to firestore
  const { type, sdp } = offerDescription.toJSON()
  setDoc(callDocRef, { offer: { type, sdp } })

  // Listen to answer
  onSnapshot(callDocRef, async snapshot => {
    const data = snapshot.data()
    if (!pc.currentRemoteDescription && data?.answer) {
      const answerDescription = new RTCSessionDescription(data.answer)
      await pc.setRemoteDescription(answerDescription)
    }
  })

  // Listen to new answer candidates
  onSnapshot(answerCandidates, snapshot => {
    snapshot.docChanges().forEach(async change => {
      if (change.type === 'added') {
        let data = change.doc.data()
        await pc.addIceCandidate(new RTCIceCandidate(data))
      }
    })
  })
}

const joinCall = async () => {
  initialiseCall()
  const callId = JoinInput.value
  const collDocRef = doc(firestore, 'calls', callId)
  const answerCandidates = collection(firestore, collDocRef.path, 'answerCandidates')
  const offerCandidates = collection(firestore, collDocRef.path, 'offerCandidates')

  // listen to answer candidate and add to firestore
  pc.onicecandidate = event => {
    event.candidate && addDoc(answerCandidates, event.candidate.toJSON())
  }

  const callData = (await getDoc(collDocRef)).data()

  // create answer
  const offerDescription = callData.offer
  await pc.setRemoteDescription(new RTCSessionDescription(offerDescription))
  const answerDescription = await pc.createAnswer()
  await pc.setLocalDescription(answerDescription)

  // Add answer to firestore
  const { type, sdp } = answerDescription.toJSON()
  await updateDoc(collDocRef, { answer: { type, sdp } })

  // Listen to new offer candidates
  onSnapshot(offerCandidates, snapshot => {
    snapshot.docChanges().forEach(async change => {
      if (change.type === 'added') {
        let data = change.doc.data()
        await pc.addIceCandidate(new RTCIceCandidate(data))
      }
    })
  })
  showVideo()
}

const hangupCall = () => {
  pc.close()
  localStream.getTracks().forEach(track => {
    track.stop()
  })
  remoteStream.getTracks().forEach(track => {
    track.stop()
  })
  localVideo.srcObject = null
  remoteVideo.srcObject = null
  callInput.value = ''
  JoinInput.value = ''
  videos.style.display = 'none'
}


showVideoButton.onclick = showVideo
callButton.onclick = initialiseCall
joinButton.onclick = joinCall
hangupButton.onclick = hangupCall



