const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt the user to select media stream, pass the video element and then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // Cath error here
        console.log('Sorry, there is an error. Please, came back after sometime.', error);
    }
}

button.addEventListener('Click,please', async () => {
    // Disable button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requetPictureInPicture();
    // Reset button
    button.disabled = false;
})

// On load
selectMediaStream();