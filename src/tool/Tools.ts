/**
 * @author ziwn
 * @version 2020-08-28
 * @class 工具类
 */
class Tools{
    /**音效对象 */
    private static sound:egret.Sound;
    /**音效对象数组 */
    private static soundList:any = [];
    /**视频对象 */
    private static video:egret.Video;

    /**
     * 播放声音
     * @param res 音频文件key
     */
    public static playSound(res:string = '',callFun:Function = null,thisObj:any = null):void{
        window['playAudio'](res,callFun,thisObj);
    }

    /**
     * 播放视频
     */
    public static playVideo(res:string = '',callFun:Function = null,thisObj:any = null):egret.Video{
        if(callFun)callFun.bind(thisObj);
        this.video = new egret.Video();
        this.video.addEventListener(egret.Event.COMPLETE,()=>{
            this.video.play(0,false);
        },this);
        
        this.video.addEventListener(egret.Event.ENDED,()=>{
            if(callFun)callFun();
        },this);
        this.video.load(res);
        this.video.fullscreen = false;
        this.video.touchEnabled = false;
        return this.video;
    }
}