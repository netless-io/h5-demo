let videoElement = document.getElementById("videoElement");
let audioElement0 = document.getElementById("audioElement0");
let audioElement1 = document.getElementById("audioElement1");
/**播放视频 */
function playVideo(src,callFun,thisObj){
    stopVideoAudio();
    videoElement.src = src;
    videoElement.hidden = false;
    playVideoEnd(callFun,thisObj);
    videoElement.onplay = ()=>{
        EventCenter.getInstance().sendMessage("VIDEO_CAN_PLAY",null); 
        videoElement.volume = 1;
    };

    videoElement.oncanplay = ()=>{
        videoElement.play();
    }
}

/***视频播放完成 */
function playVideoEnd(callFun,thisObj){
    videoElement.onended = function(){
        if(callFun){
            callFun.bind(thisObj);
            callFun(thisObj);
        }
    }
}

/**播放声音 */
function playAudio(src,callFun,thisObj){
    if(audioElement0.paused){
        audioElement0.pause();
        audioElement0.src = src;
        audioElement0.play();
    }else{
        audioElement1.pause();
        audioElement1.src = src;
        audioElement1.play();
    }
    // audioElement.pause();
    // audioElement.play();
    playAudioEnd(callFun,thisObj)
}
 
/**音频播放完成 */
function playAudioEnd(callFun,thisObj){
    audioElement0.onended = function(){
        if(callFun){
            callFun.bind(thisObj);
            callFun(thisObj);
        }
    }
    audioElement1.onended = function(){
        if(callFun){
            callFun.bind(thisObj);
            callFun(thisObj);
        }
    }
}

/**停止播放视频、音频 */
function stopVideoAudio(){
    videoElement.hidden = true;
    videoElement.pause();
    audioElement0.pause();
    audioElement0.pause();
}
