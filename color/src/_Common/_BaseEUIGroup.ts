/**
 * uigroup基类
 * 
 */

class BaseEUIGroup extends eui.Group{
    

    constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);

        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
    }


    protected init(){
        console.log('11')
    }

    private remove(){
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.init, this);
        this.removeEventListener(egret.Event.REMOVED_FROM_STAGE, this.remove, this);
    }
}