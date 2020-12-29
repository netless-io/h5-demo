class MainView extends eui.Component{
    /**界面索引 */
    private pageIndex:number = 1;
    /**页面总数 */
    private pageTotal:number = 6;
    public constructor(pageIndex:number = 1){
        super();
        this.pageIndex = pageIndex;
        this.skinName = 'resource/eui_skins/kejian/pageView/mainView.exml';
    }

    public setPageIndex(index: number) {
        this.pageIndex = index;
        this.switchTypeView();
    }

    public resetPageHandler() {
        this.switchTypeView();
        Tools.playSound("resource/assets/kejian/sound/touch.mp3");
    }

    public createChildren():void{
        super.createChildren();
        this.eventMonitor();
        this['pageNumber']['text'] = this.pageIndex;
        if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
            let tips:eui.Component = new eui.Component();
            tips.skinName = `
            <e:Skin class="tips" width="1024" height="576" xmlns:e="http://ns.egret.com/eui">
                <e:Group left="0" top="0" right="0" bottom="0">
                    <e:Rect left="0" top="0" right="0" bottom="0"/>
                    <e:Image source="index_png" horizontalCenter="0" verticalCenter="0"/>
                    <e:Group width="300" height="150" horizontalCenter="0" verticalCenter="0" visible="false">
                        <e:Rect left="0" top="0" right="0" bottom="0" fillColor="0xffffff" strokeColor="0x1ab24d" strokeWeight="2" ellipseWidth="20"/>
                        <e:Label text="温馨提示" textColor="0x000000" fontFamily="pfzt" horizontalCenter="0" top="15" size="24"/>
                        <e:Label text="横屏体验更佳哦~" x="28" y="60" textColor="0x000000" size="20" fontFamily="pfzt"/>
                        <e:Group width="80" height="30" horizontalCenter="0" bottom="20">
                            <e:Rect left="0" top="0" right="0" bottom="0" fillColor="0x0097ff" ellipseWidth="10"/>
                            <e:Label text="确定" x="21" size="20" verticalCenter="0" fontFamily="pfzt"/>
                        </e:Group>
                    </e:Group>
                </e:Group>
            </e:Skin>`;
            tips.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
                tips.parent.removeChild(tips);
                this.switchTypeView();
            },this); 
            this.addChild(tips);
        }else{
            this.switchTypeView();
        }   
    }

    /**
     * 界面类型处理
     */
    private switchTypeView():void{
        this['pageNumber']['text'] = this.pageIndex;
        window['stopVideoAudio']();
        switch(this.pageIndex){
            case 1:
                this.playVideo('resource/assets/kejian/video/page_0.mp4',this.videoPlayEndCallFun)
                break;
            case 2:
                this.playVideo('resource/assets/kejian/video/page_1.mp4',this.videoPlayEndCallFun)
                break;
            case 3:
                this.playVideo('resource/assets/kejian/video/page_2.mp4',this.videoPlayEndCallFun);
                break;
            case 4:
                this.playVideo('resource/assets/kejian/video/page_3.mp4',this.videoPlayEndCallFun);
                break;
            case 5:
                this.playVideo('resource/assets/kejian/video/page_4.mp4', this.videoPlayEndCallFun);
                break;
            case 6:
                this.playVideo('resource/assets/kejian/video/page_5.mp4', this.videoPlayEndCallFun);
                break;
            // case 5:
            //     this.playVideo('resource/assets/kejian/video/page_3.mp4', this.videoPlayEndCallFun);
            //     break;
            default:
                break;
        }   
    }

    /**
     * 事件监听
     */
    private eventMonitor():void{
        EventCenter.getInstance().addEventListener("VIDEO_CAN_PLAY",this.viewReset,this);
        /**上一页 */
        this['fastPage'].addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            const nextPage = this.pageIndex - 1;
            if (nextPage < 1) return;
            this.pageIndex = nextPage;
            this.switchTypeView();
            Tools.playSound("resource/assets/kejian/sound/touch.mp3");
            SdkManager.sdk.prevPage();
            SdkManager.sdk.setAttributes({ pageIndex: this.pageIndex });
        },this);

        /**下一页 */
        this['lastPage'].addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            const nextPage = this.pageIndex + 1;
            if (nextPage > this.pageTotal) return;
            this.pageIndex = nextPage;
            this.switchTypeView();
            Tools.playSound("resource/assets/kejian/sound/touch.mp3");
            SdkManager.sdk.nextPage();
            SdkManager.sdk.setAttributes({ pageIndex: this.pageIndex });
        },this);

        /**重置 */
        this['resetPage'].addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            this.resetPageHandler();
            SdkManager.sdk.dispatchMagixEvent("resetPage", true);
        },this);
    }

    /**
     * 播放视频
     */
    private playVideo(src:string = null,callFun:Function = null):void{
        window['playVideo'](src,callFun,this);
    }

    /**
     * 界面重置
     */
    private viewReset():void{
        this['viewGroup'].removeChildren();
    }

    /**
     * 视频播放完成执行回调
     */
    private videoPlayEndCallFun(self:MainView = null):void{
        // self.pageIndex ++;
        // self.switchTypeView();
        if(self.pageIndex == 2)
        {
             self.enterView();//找出三个字
        }else if(self.pageIndex == 4)
        {
            self.enterView();//找出开心表情
        }
    }

    /**
     * 进入界面
     */
    private enterView():void{
        let pageView:PageBaseView = new PageBaseView(this.pageIndex);
        this['viewGroup'].addChild(pageView);
    }
}