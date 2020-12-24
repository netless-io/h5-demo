type createNetlessIframeSDK = (targetOrigin: string) => Promise<NetlessIframeSDK>;
type SDK = {
    createNetlessIframeSDK: createNetlessIframeSDK 
}

class SdkManager {

    public static sdk: NetlessIframeSDK = null;

    public static NextPage = "NextPage";
    public static PrevPage = "PrevPage";

    async initSdk(): Promise<NetlessIframeSDK> {
        const SDK = (window as any).NetlessIframeSDK as SDK;
        try {
            const sdk = await SDK.createNetlessIframeSDK("https://demo.netless.link/");
            SdkManager.sdk = sdk;
            console.log("NetlessIframeSDK create success")
            return sdk;
        } catch (error) {
            console.log("NetlessIframeSDK create faild", error);
        }
    }

    public static getSdk(): NetlessIframeSDK {
        return SdkManager.sdk;
    }
}