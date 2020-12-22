/**
 * @author ziwn
 * @version 2020-08-28
 * @class 事件管理中心
 */
class EventCenter extends egret.EventDispatcher{

    /**私有对象，为单例模式提供支持 */
    public static instance:EventCenter = null ;

    public constructor(){
        super();
        if(EventCenter.instance)throw new Error("EventCenter为单例模式，请使用 EventCenter.getInstance()获取实例！");
    }

    /**
     * 获取单例
     * @return EventCenter;
     */
    public static getInstance():EventCenter{
        if(EventCenter.instance == null)EventCenter.instance = new EventCenter();
        return EventCenter.instance;
    }

    /**
     * 发送消息
     * @param cmd{string} 消息命令
     * @param data{any} 消息内容
     */
    public sendMessage(cmd:string,data:any):void{
        var event:egret.Event = new egret.Event(cmd);
        event.data = data;
        this.dispatchEvent(event);
    } 
} 