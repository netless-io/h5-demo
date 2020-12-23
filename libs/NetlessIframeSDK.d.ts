declare enum Events {
    AttributesUpdate = "AttributesUpdate",
    RoomStateChanged = "RoomStateChanged"
}
declare type Attributes = {
    [key: string]: any;
};
declare class NetlessIframeSDK {
    targetOrigin: string;
    private emitter;
    private magixEmitter;
    private _attributes;
    private _roomState;
    private magixListenerMap;
    private didDestory;
    constructor(targetOrigin: string, attributes: Attributes, roomState: any);
    private messageListener;
    attributes: Attributes;
    setAttributes(payload: any): void;
    private postMessage;
    on(event: string, listener: any): void;
    off(event: string, listener: any): void;
    addMagixEventListener(event: string, listener: any): void;
    dispatchMagixEvent(event: string, payload: any): void;
    removeMagixEventListener(event: string, listener: any): void;
    nextPage(): void;
    prevPage(): void;
    destroy(): void;
}
