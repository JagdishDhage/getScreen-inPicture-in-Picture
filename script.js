const video=document.getElementById('video');
const button=document.getElementById('button');

function reload(){
    location.reload();
}
async function selectVideo(){
    try{
        const mediaStream= await navigator.mediaDevices.getDisplayMedia();
        video.srcObject=mediaStream;
        video.onloadedmetadata=()=>{
            video.play();
        }
    }
    catch(error){
        console.error('Error:', error);
    }
}
button.addEventListener('click',async ()=>{
    button.disabled=true;
    await video.requestPictureInPicture();
    button.disabled=false;
})
selectVideo()