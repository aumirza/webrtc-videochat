import { initialiseCall, connectCall, localStream, remoteStream } from './webRtc'

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search)
    const join = urlParams.get('join')

    if (join) {
        initialiseCall()
        connectCall(join)
        showVideo()
    }
})


let mute = false
let hideVideo = false;


const callButton = document.getElementById('callButton')
const callInput = document.getElementById('callInput')
const callUrl = document.getElementById('callUrl')

const JoinInput = document.getElementById('JoinInput')
const joinButton = document.getElementById('joinButton')

const hangupButton = document.getElementById('hangupButton')

const callBox = document.getElementById('callBox')
const callLoaderBox = document.getElementById('callLoaderBox')
const callInputBox = document.getElementById('callInputBox')

const showJoinButton = document.getElementById('showJoinButton')
const joinBox = document.getElementById('joinBox')

const videosScreen = document.getElementById('videos')
const muteButton = document.getElementById('muteButton')
const hideVideoButtoon = document.getElementById('hideVideoButtoon')



const showVideo = async () => {
    videosScreen.style.display = 'block'
}

const createCall = async () => {
    actionButtons.style.display = 'none'
    callBox.style.display = 'flex'
    const callId = await initialiseCall(showVideo)
    callLoaderBox.style.display = 'none'
    callInput.value = callId
    const url = `${window.location.href}?join=${callId}`
    callUrl.innerText = url
    callUrl.href = url
    callInputBox.style.display = 'flex'
}



const joinCall = async () => {

    const callId = JoinInput.value

    if (!callId) {
        return
    }

    await initialiseCall()
    await connectCall(callId)
    showVideo()
}

const hangupCall = () => {

    if (localStream) {
        localStream.getTracks().forEach(track => {
            track.stop()
        })
    }

    if (remoteStream) {
        remoteStream.getTracks().forEach(track => {
            track.stop()
        })
    }
    videosScreen.style.display = 'none'

    // localStream = null
    // remoteStream = null

    localVideo.srcObject = null
    remoteVideo.srcObject = null

    callInput.value = ''
    JoinInput.value = ''
}


callButton.onclick = createCall
joinButton.onclick = joinCall
hangupButton.onclick = hangupCall

muteButton.onclick = () => {
    mute = localStream.getAudioTracks()[0].enabled
    localStream.getAudioTracks()[0].enabled = !(mute)
    muteButton.innerText = mute ? 'Unmute' : 'Mute'
}

hideVideoButtoon.onclick = () => {
    hideVideo = localStream.getVideoTracks()[0].enabled
    localStream.getVideoTracks()[0].enabled = !(hideVideo)
    hideVideoButtoon.innerText = hideVideo ? 'Hide' : 'Show'

}


showJoinButton.onclick = () => {
    actionButtons.style.display = 'none'
    joinBox.style.display = 'flex'
}


copyButtonCall.onclick = () => {
    navigator.clipboard.writeText(callInput.value)
    copyButtonCall.innerText = 'Copied'
    setTimeout(() => {
        copyButtonCall.innerText = 'Copy'
    }, 2000)
}
