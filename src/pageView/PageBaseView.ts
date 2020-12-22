/**
 * @author ziwn
 * @version 界面管理基础类
 */
class PageBaseView extends eui.Component{
    /**界面索引 */
    private pageIdx:number = 0;

    public constructor(pageIdx){
        super();
        this.pageIdx = pageIdx;
        this.skinName = 'resource/eui_skins/kejian/pageView/pageView'+this.pageIdx+'.exml';
    }

    public createChildren():void{
        super.createChildren();
        this.switchView();
    }

    /**
     * 界面类型处理
     */
    private switchView():void{
        switch(this.pageIdx){
            case 1:
                this.pageView1();
                break;
            case 2:
                 this.pageView3();
                break;
            case 4:
                this.pageView6();
                break;
        }
    }
    private pageView6():void{
        const PageView6_ButtonTap = "PageView6_ButtonTap";
        this["zhenbang"]['visible'] = false;
        for(let i = 0;i<3;i++)
        {
            this['btn' + i]['idx'] = i;
            this['btn' + i].addEventListener(egret.TouchEvent.TOUCH_TAP, (event: egret.Event) => {
                Tools.playSound("resource/assets/kejian/sound/touch.mp3");
                let evt: eui.Group = event.target as eui.Group;
                onPageView6ButtonTap({ eventIdx: evt['idx'] });
                this.sentEvent(PageView6_ButtonTap, evt['idx'])
            }, this);
        }

        const onPageView6ButtonTap = ({ eventIdx }) => {
            if (eventIdx == 2) {
                this['btn' + eventIdx].touchEnabled = false;
                this["zhenbang"]['visible'] = true;
                egret.Tween.get(this['zhenbang'])
                       .wait(300)
                       .to({alpha:100},500)
                       .wait(2000)
                       .to({alpha:0},500);
               Tools.playSound("resource/assets/kejian/sound/chenggong.mp3", () => {});
            } else {
                Tools.playSound("resource/assets/kejian/sound/cuowu.mp3");
            }
        }

        (window as any).netlessIframeSDK.addMagixEventListener(PageView6_ButtonTap, ({ id }) => {
            Tools.playSound("resource/assets/kejian/sound/touch.mp3");
            if (id == 0 || id == 1 || id == 2) { 
                onPageView6ButtonTap({ eventIdx: id })
            } else {
                Tools.playSound("resource/assets/kejian/sound/cuowu.mp3");
            }
        })
    }

    private pageView3():void{
        let idx:number = 0;
        this['zhenbang'].visible = false;
        const PageView3_ButtonTap = "PageView3_ButtonTap";
        for (let i = 0; i <10; i++) {
            this['btn' + i]['idx'] = i;
            this['btn' + i].addEventListener(egret.TouchEvent.TOUCH_TAP, (event: egret.Event) => {
                Tools.playSound("resource/assets/kejian/sound/touch.mp3");
                let evt: eui.Group = event.target as eui.Group;
                this.sentEvent(PageView3_ButtonTap, evt['idx'])
                if (evt['idx'] == 0 || evt['idx'] == 1 || evt['idx'] == 2) {
                    onPageView3ButtonTap({ eventIdx: evt['idx'] })
                } else {
                    Tools.playSound("resource/assets/kejian/sound/cuowu.mp3");
                }
            }, this);
        }

        const onPageView3ButtonTap = ({ eventIdx }) => {
            idx++;
            this['btn' + eventIdx].touchEnabled = false;
            this['btn' + eventIdx + 'Select']['visible'] = true;
            Tools.playSound("resource/assets/kejian/sound/zhengque.mp3", () => {});
            if(idx >= 3) {
                Tools.playSound("resource/assets/kejian/sound/chenggong.mp3");
                this['zhenbang'].visible = true;
                egret.Tween.get(this['zhenbang'])
                .wait(300)
                .to({alpha:100},500)
                .wait(2000)
                .to({alpha:0},500);
            }
        }

        (window as any).netlessIframeSDK.addMagixEventListener(PageView3_ButtonTap, ({ id }) => {
            Tools.playSound("resource/assets/kejian/sound/touch.mp3");
            if (id == 0 || id == 1 || id == 2) { 
                onPageView3ButtonTap({ eventIdx: id })
            } else {
                Tools.playSound("resource/assets/kejian/sound/cuowu.mp3");
            }
        })
    }
    /**
     * 页面1
     */
    private pageView1():void{
        let video:egret.Video = Tools.playVideo('resource/assets/kejian/video/page_0.mp4');
        this['videoGroup'].addChild(video);
    }

    /**
     * 页面2
     */
    private pageView2():void{
        let idx:number = 0;
        let idx1:number = 0;
        Tools.playSound("resource/assets/kejian/sound/kehouxiti1.mp3");
        for(let i = 0;i < 10;i++){
            this['btn'+i]['idx'] = i;
            this['btn'+i].addEventListener(egret.TouchEvent.TOUCH_TAP,(event:egret.Event)=>{
                Tools.playSound("resource/assets/kejian/sound/touch.mp3");
                let evt:eui.Group = event.target as eui.Group;
                if(idx == 0){
                    if(evt['idx'] == 0){
                        idx ++;
                        evt.touchEnabled = false;
                        this['btn'+evt['idx']+'Select']['visible'] = true;
                        Tools.playSound("resource/assets/kejian/sound/zhengque.mp3",()=>{
                            Tools.playSound("resource/assets/kejian/sound/kehouxiti2.mp3");
                        });
                    }else{
                        Tools.playSound("resource/assets/kejian/sound/cuowu.mp3");
                    }
                }else{
                    if(evt['idx'] == 2 || evt['idx'] == 3){
                        idx1 ++;
                        evt.touchEnabled = false;
                        this['btn'+evt['idx']+'Select']['visible'] = true;
                        Tools.playSound("resource/assets/kejian/sound/zhengque.mp3");
                        if(idx1 == 2){
                            egret.Tween.get(this['gongxi'])
                            .wait(300)
                            .to({alpha:1},500)
                            .wait(2000)
                            .to({alpha:0},500);
                            Tools.playSound("resource/assets/kejian/sound/chenggong.mp3");
                        }
                    }else{
                        Tools.playSound("resource/assets/kejian/sound/cuowu.mp3");
                    }
                }
            },this);
        }
    }

    private sentEvent(event: string, id: number) {
        (window as any).netlessIframeSDK.dispatchMagixEvent(event, { id })
    }
}