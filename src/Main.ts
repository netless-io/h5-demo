class Main extends eui.UILayer {

    private mainView:MainView;
    protected createChildren(): void {
        super.createChildren();
        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        // this.checkorientation();
        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async checkorientation(){
        await RES.loadConfig("resource/default.res.json", "resource/");
        await RES.loadGroup("fast");
        let isFast:boolean = false;
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
        isFast = true;
        tips.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            tips.parent.removeChild(tips);
            this.runGame().catch(e => {
                console.log(e);
            })
        },this); 
        this.addChild(tips);   
    }

    private async runGame() {
        console.log("runGame")
        await this.loadResource()
        this.createGameScene();
        const NetlessIframeSDK = (window as any).NetlessIframeSDK;
        NetlessIframeSDK.createNetlessIframeSDK("http://localhost:8000").then(sdk => {
            console.log("netlessIframeSDK create Success", sdk);
            (window as any).netlessIframeSDK = sdk;
            const pageIndex = sdk.attributes.pageIndex;
            this.mainView.setPageIndex(pageIndex);
            sdk.addMagixEventListener("nextPage", ({ pageIndex }) => {
                this.mainView.setPageIndex(pageIndex);
            })
            sdk.addMagixEventListener("prevPage", ({ pageIndex }) => {
                this.mainView.setPageIndex(pageIndex);
            })
        }).catch(err => {
            console.log("createNetlessIframeSDK faild", err);
        })
    }

    private async loadResource() {
        try {
            await RES.loadConfig("resource/default.res.json", "resource/");
            await RES.loadGroup("preload");
            await this.loadTheme();
            const loadingView = new LoadingView();
            this.stage.addChild(loadingView);
            await RES.loadGroup("load", 0, loadingView);
            this.stage.removeChild(loadingView);
            this.mainView = new MainView();
            this.addChild(this.mainView);
        }catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve(true);
            }, this);
        })
    }

    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        document.body.style.backgroundImage = '';
        var message = { type: "courseWare", body: { load: true } }
        window.parent.postMessage(JSON.stringify(message), '*');
    }
}
