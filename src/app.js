
var MainLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var mainBg = new cc.Sprite(res.mainbg_jpg);
        var scaleX = size.width/mainBg.getContentSize().width;
        var scaleY = size.height/mainBg.getContentSize().height;
        mainBg.setScaleX(scaleX);
        mainBg.setScaleY(scaleY);
        mainBg.setPosition(size.width/2,size.height/2);
        this.addChild(mainBg);

        cc.audioEngine.playMusic(res.sya_mp3, false);

        var menuItemPlay = new cc.MenuItemSprite(
            new cc.Sprite(res.start_n_png), // normal state image
            new cc.Sprite(res.start_s_png), //select state image
            this.onPlay, this);
        var menu = new cc.Menu(menuItemPlay);  //7. create the menu
        menu.setPosition(size.width/2,size.height/3);
        this.addChild(menu);

        return true;
    },
    onPlay : function(){

    }
});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});

