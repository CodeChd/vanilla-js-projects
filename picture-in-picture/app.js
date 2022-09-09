const videoElement = document.getElementById('video');
const button = document.getElementById('button');


// PROMPT user to select media steamm. pass to element and play  

const setmediaStream = async() => {

try{

    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
        videoElement.play();
    }

}
catch (err){

}

};
setmediaStream()

// events
button.addEventListener('click', async()=>{

    button.disabled = true;

    await videoElement.requestPictureInPicture();

    button.disabled = false;

});


