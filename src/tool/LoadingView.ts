/**
 * @author ziwn
 * @version 2020-05-20
 * @class 游戏加载界面
 */
class LoadingView extends eui.Component implements RES.PromiseTaskReporter {

    public constructor(){
        super();
        this.skinName = `
            <e:Skin class="LoadingViewSkin" width="1024" height="576" xmlns:e="http://ns.egret.com/eui" xmlns:w="http://ns.egret.com/wing">
    <e:Group left="0" top="0" right="0" bottom="0">
			<e:Image left="0" top="0" right="0" bottom="0" source="launcher_png"/>
			<e:Group id="aniGroup" horizontalCenter="0" top="150"/>
			<e:Image source="title_png" horizontalCenter="13.8" bottom="74" visible="false"/>
			<e:Group y="379" horizontalCenter="0.5">
				<e:Label id="progress" text="0%" textColor="0x000000" bold="true" fontFamily="pfzt" verticalCenter="0" horizontalCenter="0" size="40"/>
			</e:Group>
			<e:Label text="Loading…" y="434.02" textColor="0x000000" fontFamily="pfzt" horizontalCenter="6" alpha="0.6"/>
    </e:Group>
</e:Skin>
        `;
    }

    public createChildren():void{
        super.createChildren();
        this.addAni();
    }

    private addAni():void{
        var data = RES.getRes("icon_json");
        var txtr = RES.getRes("icon_png");
        var mcFactory:egret.MovieClipDataFactory = new egret.MovieClipDataFactory( data, txtr );
        var mc:egret.MovieClip = new egret.MovieClip( mcFactory.generateMovieClipData( "icon" ) );
        this['aniGroup'].addChild(mc);
        mc.gotoAndPlay(1);
        mc.addEventListener(egret.Event.COMPLETE, (e:egret.Event)=>{
            mc.gotoAndPlay(1);
        }, this);
		mc.anchorOffsetX = mc.width / 2;
        mc.anchorOffsetY = mc.height /2;
        mc.x = -100;
    }
 
    public onProgress(current: number, total: number): void {
        this['progress']['text'] = Math.ceil(current/total*100)+"%";
        if(current == total){
            this['progress']['text'] = "100%";
        }
    }
}