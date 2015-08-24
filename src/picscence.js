/**
 * Created by novia on 8/20/15.
 */

var transitionsIdx = 0;

var arrayOfTransitionsTest = [

    {title:"JumpZoomTransition", transitionFunc:function (t, s) {
        return new JumpZoomTransition(t, s);
    }},

    {title:"TransitionProgressRadialCCW", transitionFunc:function (t, s) {
        return new cc.TransitionProgressRadialCCW(t, s);
    }},

    {title:"TransitionProgressRadialCW", transitionFunc:function (t, s) {
        return new cc.TransitionProgressRadialCW(t, s);
    }},

    {title:"TransitionProgressHorizontal", transitionFunc:function (t, s) {
        return new cc.TransitionProgressHorizontal(t, s);
    }},

    {title:"TransitionProgressVertical", transitionFunc:function (t, s) {
        return new cc.TransitionProgressVertical(t, s);
    }},

    {title:"TransitionProgressInOut", transitionFunc:function (t, s) {
        return new cc.TransitionProgressInOut(t, s);
    }},

    {title:"TransitionProgressOutIn", transitionFunc:function (t, s) {
        return new cc.TransitionProgressOutIn(t, s);
    }},

    //ok
    {title:"FadeTransition", transitionFunc:function (t, s) {
        return FadeTransition(t, s);
    }},
    {title:"FadeWhiteTransition", transitionFunc:function (t, s) {
        return FadeWhiteTransition(t, s);
    }},

    {title:"ShrinkGrowTransition", transitionFunc:function (t, s) {
        return ShrinkGrowTransition(t, s);
    }},
    {title:"RotoZoomTransition", transitionFunc:function (t, s) {
        return RotoZoomTransition(t, s);
    }},
    {title:"MoveInLTransition", transitionFunc:function (t, s) {
        return MoveInLTransition(t, s);
    }},
    {title:"MoveInRTransition", transitionFunc:function (t, s) {
        return MoveInRTransition(t, s);
    }},
    {title:"MoveInTTransition", transitionFunc:function (t, s) {
        return MoveInTTransition(t, s);
    }},
    {title:"MoveInBTransition", transitionFunc:function (t, s) {
        return MoveInBTransition(t, s);
    }},
    {title:"SlideInLTransition", transitionFunc:function (t, s) {
        return SlideInLTransition(t, s);
    }},
    {title:"SlideInRTransition", transitionFunc:function (t, s) {
        return SlideInRTransition(t, s);
    }},
    {title:"SlideInTTransition", transitionFunc:function (t, s) {
        return SlideInTTransition(t, s);
    }},
    {title:"SlideInBTransition", transitionFunc:function (t, s) {
        return SlideInBTransition(t, s);
    }},
    {title:"CCTransitionRadialCCW", transitionFunc:function (t, s) {
        return CCTransitionRadialCCW(t, s);
    }},
    {title:"CCTransitionRadialCW", transitionFunc:function (t, s) {
        return CCTransitionRadialCW(t, s);
    }}
];

if ('opengl' in cc.sys.capabilities) {
    arrayOfTransitionsTest = arrayOfTransitionsTest.concat(
        [
            {title: "FlipXLeftOver", transitionFunc: function (t, s) {
                return FlipXLeftOver(t, s);
            }},
            {title: "FlipXRightOver", transitionFunc: function (t, s) {
                return FlipXRightOver(t, s);
            }},
            {title: "FlipYUpOver", transitionFunc: function (t, s) {
                return FlipYUpOver(t, s);
            }},
            {title: "FlipYDownOver", transitionFunc: function (t, s) {
                return FlipYDownOver(t, s);
            }},
            {title: "FlipAngularLeftOver", transitionFunc: function (t, s) {
                return FlipAngularLeftOver(t, s);
            }},
            {title: "FlipAngularRightOver", transitionFunc: function (t, s) {
                return FlipAngularRightOver(t, s);
            }},
            {title: "ZoomFlipXLeftOver", transitionFunc: function (t, s) {
                return ZoomFlipXLeftOver(t, s);
            }},
            {title: "ZoomFlipXRightOver", transitionFunc: function (t, s) {
                return ZoomFlipXRightOver(t, s);
            }},
            {title: "ZoomFlipYUpOver", transitionFunc: function (t, s) {
                return ZoomFlipYUpOver(t, s);
            }},
            {title: "ZoomFlipYDownOver", transitionFunc: function (t, s) {
                return ZoomFlipYDownOver(t, s);
            }},
            {title: "ZoomFlipAngularLeftOver", transitionFunc: function (t, s) {
                return ZoomFlipAngularLeftOver(t, s);
            }},
            {title: "ZoomFlipAngularRightOver", transitionFunc: function (t, s) {
                return ZoomFlipAngularRightOver(t, s);
            }},
            {title: "PageTransitionForward", transitionFunc: function (t, s) {
                return PageTransitionForward(t, s);
            }},
            {title: "PageTransitionBackward", transitionFunc: function (t, s) {
                return PageTransitionBackward(t, s);
            }},
            {title: "FadeTRTransition", transitionFunc: function (t, s) {
                return FadeTRTransition(t, s);
            }},
            {title: "FadeBLTransition", transitionFunc: function (t, s) {
                return FadeBLTransition(t, s);
            }},
            {title: "FadeUpTransition", transitionFunc: function (t, s) {
                return FadeUpTransition(t, s);
            }},
            {title: "FadeDownTransition", transitionFunc: function (t, s) {
                return FadeDownTransition(t, s);
            }},
            {title: "TurnOffTilesTransition", transitionFunc: function (t, s) {
                return TurnOffTilesTransition(t, s);
            }},
            {title: "SplitRowsTransition", transitionFunc: function (t, s) {
                return SplitRowsTransition(t, s);
            }},
            {title: "CCTransitionCrossFade", transitionFunc: function (t, s) {
                return CCTransitionCrossFade(t, s);
            }},
            {title: "SplitColsTransition", transitionFunc: function (t, s) {
                return SplitColsTransition(t, s);
            }}
        ]);
}

var JumpZoomTransition = function (t, s) {
    return new cc.TransitionJumpZoom(t, s);
};
var FadeTransition = function (t, s) {
    return new cc.TransitionFade(t, s);
};

var FadeWhiteTransition = function (t, s) {
    return new cc.TransitionFade(t, s, cc.color(255, 255, 255));
};

var FlipXLeftOver = function (t, s) {
    return new cc.TransitionFlipX(t, s, cc.TRANSITION_ORIENTATION_LEFT_OVER);
};

var FlipXRightOver = function (t, s) {
    return new cc.TransitionFlipX(t, s, cc.TRANSITION_ORIENTATION_RIGHT_OVER);
};

var FlipYUpOver = function (t, s) {
    return new cc.TransitionFlipY(t, s, cc.TRANSITION_ORIENTATION_UP_OVER);
};

var FlipYDownOver = function (t, s) {
    return new cc.TransitionFlipY(t, s, cc.TRANSITION_ORIENTATION_DOWN_OVER);
};

var FlipAngularLeftOver = function (t, s) {
    return new cc.TransitionFlipAngular(t, s, cc.TRANSITION_ORIENTATION_LEFT_OVER);
};

var FlipAngularRightOver = function (t, s) {
    return new cc.TransitionFlipAngular(t, s, cc.TRANSITION_ORIENTATION_RIGHT_OVER);
};

var ZoomFlipXLeftOver = function (t, s) {
    return new cc.TransitionZoomFlipX(t, s, cc.TRANSITION_ORIENTATION_LEFT_OVER);
};

var ZoomFlipXRightOver = function (t, s) {
    return new cc.TransitionZoomFlipX(t, s, cc.TRANSITION_ORIENTATION_RIGHT_OVER);
};

var ZoomFlipYUpOver = function (t, s) {
    return new cc.TransitionZoomFlipY(t, s, cc.TRANSITION_ORIENTATION_UP_OVER);
};

var ZoomFlipYDownOver = function (t, s) {
    return new cc.TransitionZoomFlipY(t, s, cc.TRANSITION_ORIENTATION_DOWN_OVER);
};

var ZoomFlipAngularLeftOver = function (t, s) {
    return new cc.TransitionZoomFlipAngular(t, s, cc.TRANSITION_ORIENTATION_LEFT_OVER);
};

var ZoomFlipAngularRightOver = function (t, s) {
    return new cc.TransitionZoomFlipAngular(t, s, cc.TRANSITION_ORIENTATION_RIGHT_OVER);
};

var ShrinkGrowTransition = function (t, s) {
    return new cc.TransitionShrinkGrow(t, s);
};

var RotoZoomTransition = function (t, s) {
    return new cc.TransitionRotoZoom(t, s);
};

var MoveInLTransition = function (t, s) {
    return new cc.TransitionMoveInL(t, s);
};

var MoveInRTransition = function (t, s) {
    return new cc.TransitionMoveInR(t, s);
};

var MoveInTTransition = function (t, s) {
    return new cc.TransitionMoveInT(t, s);
};

var MoveInBTransition = function (t, s) {
    return new cc.TransitionMoveInB(t, s);
};

var SlideInLTransition = function (t, s) {
    return new cc.TransitionSlideInL(t, s);
};

var SlideInRTransition = function (t, s) {
    return new cc.TransitionSlideInR(t, s);
};

var SlideInTTransition = function (t, s) {
    return new cc.TransitionSlideInT(t, s);
};

var SlideInBTransition = function (t, s) {
    return new cc.TransitionSlideInB(t, s);
};

var CCTransitionCrossFade = function (t, s) {
    return new cc.TransitionCrossFade(t, s);
};

var CCTransitionRadialCCW = function (t, s) {
    return new cc.TransitionProgressRadialCCW(t, s);
};

var CCTransitionRadialCW = function (t, s) {
    return new cc.TransitionProgressRadialCW(t, s);
};

var PageTransitionForward = function (t, s) {
    director.setDepthTest(true);
    return new cc.TransitionPageTurn(t, s, false);
};

var PageTransitionBackward = function (t, s) {
    director.setDepthTest(true);
    return new cc.TransitionPageTurn(t, s, true);
};

var FadeTRTransition = function (t, s) {
    return new cc.TransitionFadeTR(t, s);
};

var FadeBLTransition = function (t, s) {
    return new cc.TransitionFadeBL(t, s);
};

var FadeUpTransition = function (t, s) {
    return new cc.TransitionFadeUp(t, s);
};

var FadeDownTransition = function (t, s) {
    return new cc.TransitionFadeDown(t, s);
};

var TurnOffTilesTransition = function (t, s) {
    return new cc.TransitionTurnOffTiles(t, s);
};

var SplitRowsTransition = function (t, s) {
    return new cc.TransitionSplitRows(t, s);
};

var SplitColsTransition = function (t, s) {
    return new cc.TransitionSplitCols(t, s);
};

var descrips = ["见面","date","牵手","愚公移山","kiss","美瞳","音乐剧","抱起史","捉迷藏","分手"];

var PictureScene = cc.Scene.extend({
    pic : null,
    ctor : function(pic){
        this._super();
        this.pic = pic;
    },
    onEnter : function(pic){
        console.log("onEnter");
        this._super();
        var picSprite = new cc.Sprite(this.pic);
        picSprite.setPosition(cc.winSize.width/2,cc.winSize.height/2);
        var scaleX = cc.winSize.width/picSprite.getContentSize().width;
        var scaleY = cc.winSize.height/picSprite.getContentSize().height;
        picSprite.setScaleX(scaleX);
        picSprite.setScaleY(scaleY);
        this.addChild(picSprite);

        this.scheduleOnce(this.changeScene,5,"changeScene");
    },
    changeScene : function(){
        console.log("changeScene");
        var picScene = new PictureScene(res.mainbg_jpg);
        cc.director.runScene(FadeTransition(1,picScene));
    }
});
