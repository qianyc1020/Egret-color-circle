var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Home = (function (_super) {
    __extends(Home, _super);
    function Home(GC) {
        var _this = _super.call(this) || this;
        _this.ballV = 0;
        _this.ballA = 200;
        _this._GameContainer = GC;
        return _this;
    }
    Home.prototype.init = function () {
        var _this = this;
        console.log('Home已加载');
        var Width = this.stage.stageWidth;
        var Height = this.stage.stageHeight;
        var circleImg = Util.createBitmapByName('circle6-sheet0_png');
        circleImg.width = 500;
        circleImg.height = 500;
        circleImg.scaleX = 0.01;
        circleImg.scaleY = 0.01;
        circleImg.x = Width / 2;
        circleImg.y = Height / 2 - 100;
        circleImg.anchorOffsetX = circleImg.width / 2;
        circleImg.anchorOffsetY = circleImg.height / 2;
        circleImg.alpha = 0.1;
        this.addChild(circleImg);
        this.ball = new egret.Bitmap();
        this.ball.scaleX = 0.01;
        this.ball.scaleY = 0.01;
        this.ball.texture = RES.getRes('circle-violte_png');
        this.ball.x = Width / 2;
        this.ball.y = Height / 2 - 200;
        this.ball.width = 60;
        this.ball.height = 60;
        this.ball.anchorOffsetX = this.ball.width / 2;
        this.ball.anchorOffsetY = this.ball.height / 2;
        this.addChild(this.ball);
        egret.Tween.get(circleImg).wait(200).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 400, egret.Ease.backOut).call(function () {
            egret.Tween.removeTweens(circleImg);
            egret.Tween.get(circleImg, { loop: true })
                .wait(800)
                .wait(50)
                .to({ rotation: 60 }, 300, egret.Ease.sineInOut).wait(1250)
                .wait(50)
                .to({ rotation: 180 }, 300, egret.Ease.sineInOut).wait(1250)
                .wait(50)
                .to({ rotation: 120 }, 300, egret.Ease.sineInOut).wait(1250)
                .wait(50)
                .to({ rotation: 180 }, 300, egret.Ease.sineInOut).wait(1250)
                .wait(50)
                .to({ rotation: 0 }, 300, egret.Ease.sineInOut).wait(1250);
        });
        egret.Tween.get(this.ball).wait(200).to({ scaleX: 1, scaleY: 1, alpha: 1 }, 400, egret.Ease.backOut).call(function () {
            egret.Tween.removeTweens(_this.ball);
            egret.Tween.get(_this.ball, { loop: true }).to({ y: 450 }, 800, egret.Ease.sineIn).call(function () {
                _this.ball.texture = RES.getRes('circle-green_png');
            }).to({ y: Height / 2 - 200 }, 800, egret.Ease.sineOut).call(function () {
            }).to({ y: 450 }, 800, egret.Ease.sineIn).call(function () {
                _this.ball.texture = RES.getRes('circle-red_png');
            }).to({ y: Height / 2 - 200 }, 800, egret.Ease.sineOut).call(function () {
            }).to({ y: 450 }, 800, egret.Ease.sineIn).call(function () {
                _this.ball.texture = RES.getRes('circle-yellow_png');
            }).to({ y: Height / 2 - 200 }, 800, egret.Ease.sineOut).call(function () {
            }).to({ y: 450 }, 800, egret.Ease.sineIn).call(function () {
                _this.ball.texture = RES.getRes('circle-red_png');
            }).to({ y: Height / 2 - 200 }, 800, egret.Ease.sineOut).call(function () {
            }).to({ y: 450 }, 800, egret.Ease.sineIn).call(function () {
                _this.ball.texture = RES.getRes('circle-violte_png');
            }).to({ y: Height / 2 - 200 }, 800, egret.Ease.sineOut).call(function () {
            });
        });
        this.startBtn = Util.createBitmapByName('start-btn_png');
        this.startBtn.touchEnabled = true;
        this.startBtn.width = 380;
        this.startBtn.height = 124;
        this.startBtn.anchorOffsetX = this.startBtn.width / 2;
        this.startBtn.anchorOffsetY = this.startBtn.height / 2;
        this.startBtn.x = Width / 2;
        this.startBtn.y = Height + this.startBtn.height / 2;
        this.addChild(this.startBtn);
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.startBegin, this);
        egret.Tween.get(this.startBtn).to({ y: Height - this.startBtn.height / 2 }, 400, egret.Ease.backOut).call(function () {
            egret.Tween.removeTweens(_this.startBtn);
        });
        /**
         * 关于 按钮
         */
        this.aboutBtn = new egret.Sprite();
        this.aboutBtn.touchChildren = false;
        this.aboutBtn.touchEnabled = true;
        this.aboutBtn.width = 190;
        this.aboutBtn.height = 124;
        this.aboutBtn.graphics.beginFill(0x000000, 0);
        this.aboutBtn.graphics.drawRect(0, 0, this.aboutBtn.width, this.aboutBtn.height);
        this.aboutBtn.graphics.endFill();
        this.aboutBtn.anchorOffsetX = this.aboutBtn.width / 2;
        this.aboutBtn.anchorOffsetY = this.aboutBtn.height / 2;
        this.aboutBtn.x = -this.aboutBtn.width / 2;
        this.aboutBtn.y = Height - this.aboutBtn.height / 2;
        this.addChild(this.aboutBtn);
        var aboutImg = Util.createBitmapByName('about_png');
        aboutImg.touchEnabled = true;
        aboutImg.width = this.aboutBtn.height / 2;
        aboutImg.height = this.aboutBtn.height / 2;
        aboutImg.x = 20 + 3;
        aboutImg.y = 31;
        this.aboutBtn.addChild(aboutImg);
        var aboutText = new eui.Label('关于');
        aboutText.textColor = 0xffffff;
        aboutText.size = 36;
        aboutText.x = this.aboutBtn.width - 20 - aboutText.size * 2;
        aboutText.y = (this.aboutBtn.height - aboutText.size) / 2 + 3;
        this.aboutBtn.addChild(aboutText);
        this.aboutBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.aboutBegin, this);
        egret.Tween.get(this.aboutBtn).wait(100).to({ x: this.aboutBtn.width / 2 }, 400, egret.Ease.backOut).call(function () {
            egret.Tween.removeTweens(_this.aboutBtn);
        });
        /**
         * 分享按钮
         */
        this.shareBtn = new egret.Sprite();
        this.shareBtn.touchChildren = false;
        this.shareBtn.touchEnabled = true;
        this.shareBtn.width = 190;
        this.shareBtn.height = 124;
        this.shareBtn.graphics.beginFill(0x000000, 0);
        this.shareBtn.graphics.drawRect(0, 0, this.shareBtn.width, this.shareBtn.height);
        this.shareBtn.graphics.endFill();
        this.shareBtn.anchorOffsetX = this.shareBtn.width / 2;
        this.shareBtn.anchorOffsetY = this.shareBtn.height / 2;
        this.shareBtn.x = -this.shareBtn.width / 2;
        this.shareBtn.y = Height - this.shareBtn.height * 1.5;
        this.addChild(this.shareBtn);
        var shareImg = Util.createBitmapByName('share_png');
        shareImg.width = this.shareBtn.height / 2;
        shareImg.height = this.shareBtn.height / 2;
        shareImg.x = 20;
        shareImg.y = 31;
        this.shareBtn.addChild(shareImg);
        var shareText = new eui.Label('分享');
        shareText.textColor = 0xffffff;
        shareText.size = 36;
        shareText.x = this.shareBtn.width - 20 - shareText.size * 2;
        shareText.y = (this.shareBtn.height - shareText.size) / 2;
        this.shareBtn.addChild(shareText);
        this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.shareBegin, this);
        egret.Tween.get(this.shareBtn).wait(50).to({ x: this.shareBtn.width / 2 }, 400, egret.Ease.backOut).call(function () {
            egret.Tween.removeTweens(_this.shareBtn);
        });
        /**
         * 排行榜按钮
         */
        this.rankBtn = new egret.Sprite();
        this.rankBtn.touchChildren = false;
        this.rankBtn.touchEnabled = true;
        this.rankBtn.width = 190;
        this.rankBtn.height = 124;
        this.rankBtn.graphics.beginFill(0x000000, 0);
        this.rankBtn.graphics.drawRect(0, 0, this.rankBtn.width, this.rankBtn.height);
        this.rankBtn.graphics.endFill();
        this.rankBtn.anchorOffsetX = this.rankBtn.width / 2;
        this.rankBtn.anchorOffsetY = this.rankBtn.height / 2;
        this.rankBtn.x = -this.rankBtn.width / 2;
        this.rankBtn.y = Height - this.rankBtn.height * 2.5;
        this.addChild(this.rankBtn);
        var rankImg = Util.createBitmapByName('friend_png');
        rankImg.width = this.rankBtn.height / 2;
        rankImg.height = this.rankBtn.height / 2;
        rankImg.x = 20;
        rankImg.y = 31;
        this.rankBtn.addChild(rankImg);
        var rankText = new eui.Label('排行');
        rankText.textColor = 0xffffff;
        rankText.size = 36;
        rankText.x = this.rankBtn.width - 20 - rankText.size * 2;
        rankText.y = (this.rankBtn.height - rankText.size) / 2 + 3;
        this.rankBtn.addChild(rankText);
        this.rankBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.rankBegin, this);
        egret.Tween.get(this.rankBtn).to({ x: this.rankBtn.width / 2 }, 400, egret.Ease.backOut).call(function () {
            egret.Tween.removeTweens(_this.rankBtn);
        });
        /**
         * 设置按钮
         */
        this.settingBtn = new egret.Sprite();
        this.settingBtn.touchChildren = false;
        this.settingBtn.touchEnabled = true;
        this.settingBtn.width = 190;
        this.settingBtn.height = 124;
        this.settingBtn.graphics.beginFill(0x000000, 0);
        this.settingBtn.graphics.drawRect(0, 0, this.settingBtn.width, this.settingBtn.height);
        this.settingBtn.graphics.endFill();
        this.settingBtn.anchorOffsetX = this.settingBtn.width / 2;
        this.settingBtn.anchorOffsetY = this.settingBtn.height / 2;
        this.settingBtn.x = Width + this.settingBtn.width / 2;
        this.settingBtn.y = Height - this.settingBtn.height * 2.5;
        this.addChild(this.settingBtn);
        var settingImg = Util.createBitmapByName('setting_png');
        settingImg.width = this.settingBtn.height / 2;
        settingImg.height = this.settingBtn.height / 2;
        settingImg.x = this.settingBtn.width - 20 - settingImg.width;
        settingImg.y = 31;
        this.settingBtn.addChild(settingImg);
        var settingText = new eui.Label('设置');
        settingText.textColor = 0xffffff;
        settingText.size = 36;
        settingText.x = 20;
        settingText.y = (this.settingBtn.height - settingText.size) / 2 + 2;
        this.settingBtn.addChild(settingText);
        this.settingBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.settingBegin, this);
        egret.Tween.get(this.settingBtn).to({ x: Width - this.settingBtn.width / 2 }, 400, egret.Ease.backOut).call(function () {
            egret.Tween.removeTweens(_this.settingBtn);
        });
        /**
         * 难度按钮
         */
        this.gradeBtn = new egret.Sprite();
        this.gradeBtn.touchChildren = false;
        this.gradeBtn.touchEnabled = true;
        this.gradeBtn.width = 190;
        this.gradeBtn.height = 124;
        this.gradeBtn.graphics.beginFill(0x000000, 0);
        this.gradeBtn.graphics.drawRect(0, 0, this.gradeBtn.width, this.gradeBtn.height);
        this.gradeBtn.graphics.endFill();
        this.gradeBtn.anchorOffsetX = this.gradeBtn.width / 2;
        this.gradeBtn.anchorOffsetY = this.gradeBtn.height / 2;
        this.gradeBtn.x = Width + this.gradeBtn.width / 2;
        this.gradeBtn.y = Height - this.gradeBtn.height * 1.5;
        this.addChild(this.gradeBtn);
        var gradeImg = Util.createBitmapByName('table_png');
        gradeImg.width = this.gradeBtn.height / 2;
        gradeImg.height = this.gradeBtn.height / 2;
        gradeImg.x = this.gradeBtn.width - 20 - gradeImg.width;
        gradeImg.y = 31;
        this.gradeBtn.addChild(gradeImg);
        var gradeText = new eui.Label('难度');
        gradeText.textColor = 0xffffff;
        gradeText.size = 36;
        gradeText.x = 20;
        gradeText.y = (this.gradeBtn.height - gradeText.size) / 2 + 3;
        this.gradeBtn.addChild(gradeText);
        this.gradeBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.gradeBegin, this);
        egret.Tween.get(this.gradeBtn).wait(50).to({ x: Width - this.gradeBtn.width / 2 }, 400, egret.Ease.backOut).call(function () {
            egret.Tween.removeTweens(_this.gradeBtn);
        });
        /**
         * 建议按钮
         */
        this.suggestBtn = new egret.Sprite();
        this.suggestBtn.touchChildren = false;
        this.suggestBtn.touchEnabled = true;
        this.suggestBtn.width = 190;
        this.suggestBtn.height = 124;
        this.suggestBtn.graphics.beginFill(0x000000, 0);
        this.suggestBtn.graphics.drawRect(0, 0, this.suggestBtn.width, this.suggestBtn.height);
        this.suggestBtn.graphics.endFill();
        this.suggestBtn.anchorOffsetX = this.suggestBtn.width / 2;
        this.suggestBtn.anchorOffsetY = this.suggestBtn.height / 2;
        this.suggestBtn.x = Width + this.suggestBtn.width / 2;
        this.suggestBtn.y = Height - this.suggestBtn.height / 2;
        this.addChild(this.suggestBtn);
        var suggestImg = Util.createBitmapByName('menu_png');
        suggestImg.width = this.suggestBtn.height / 2;
        suggestImg.height = this.suggestBtn.height / 2;
        suggestImg.x = this.suggestBtn.width - 20 - suggestImg.width;
        suggestImg.y = 31;
        this.suggestBtn.addChild(suggestImg);
        var suggestText = new eui.Label('建议');
        suggestText.textColor = 0xffffff;
        suggestText.size = 36;
        suggestText.x = 20;
        suggestText.y = (this.suggestBtn.height - suggestText.size) / 2;
        this.suggestBtn.addChild(suggestText);
        this.suggestBtn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.suggestBegin, this);
        egret.Tween.get(this.suggestBtn).wait(100).to({ x: Width - this.suggestBtn.width / 2 }, 400, egret.Ease.backOut).call(function () {
            egret.Tween.removeTweens(_this.suggestBtn);
        });
    };
    Home.prototype.aboutBegin = function () {
        this.aboutBtn.scaleX = 0.9;
        this.aboutBtn.scaleY = 0.9;
        this.aboutBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.aboutEnd, this);
        this.aboutBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.aboutEnd, this);
    };
    Home.prototype.aboutEnd = function (ev) {
        this.aboutBtn.scaleX = 1;
        this.aboutBtn.scaleY = 1;
        this.aboutBtn.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.aboutEnd, this);
        this.aboutBtn.removeEventListener(egret.TouchEvent.TOUCH_END, this.aboutEnd, this);
        if (ev.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
        }
        else if (ev.type == egret.TouchEvent.TOUCH_END) {
            console.log('进入关于');
            this.removeChildren();
            this.parent.removeChild(this);
            this._GameContainer.createAbout();
        }
    };
    Home.prototype.shareBegin = function () {
        this.shareBtn.scaleX = 0.9;
        this.shareBtn.scaleY = 0.9;
        this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.shareEnd, this);
        this.shareBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.shareEnd, this);
    };
    Home.prototype.shareEnd = function (ev) {
        this.shareBtn.scaleX = 1;
        this.shareBtn.scaleY = 1;
        this.shareBtn.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.shareEnd, this);
        this.shareBtn.removeEventListener(egret.TouchEvent.TOUCH_END, this.shareEnd, this);
        if (ev.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
        }
        else if (ev.type == egret.TouchEvent.TOUCH_END) {
            console.log('进入分享');
        }
    };
    Home.prototype.rankBegin = function () {
        this.rankBtn.scaleX = 0.9;
        this.rankBtn.scaleY = 0.9;
        this.rankBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.rankEnd, this);
        this.rankBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.rankEnd, this);
    };
    Home.prototype.rankEnd = function (ev) {
        this.rankBtn.scaleX = 1;
        this.rankBtn.scaleY = 1;
        this.rankBtn.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.rankEnd, this);
        this.rankBtn.removeEventListener(egret.TouchEvent.TOUCH_END, this.rankEnd, this);
        if (ev.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
        }
        else if (ev.type == egret.TouchEvent.TOUCH_END) {
            console.log('进入排行');
        }
    };
    Home.prototype.settingBegin = function () {
        this.settingBtn.scaleX = 0.9;
        this.settingBtn.scaleY = 0.9;
        this.settingBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.settingEnd, this);
        this.settingBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.settingEnd, this);
    };
    Home.prototype.settingEnd = function (ev) {
        this.settingBtn.scaleX = 1;
        this.settingBtn.scaleY = 1;
        this.settingBtn.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.settingEnd, this);
        this.settingBtn.removeEventListener(egret.TouchEvent.TOUCH_END, this.settingEnd, this);
        if (ev.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
        }
        else if (ev.type == egret.TouchEvent.TOUCH_END) {
            console.log('进入设置');
        }
    };
    Home.prototype.gradeBegin = function () {
        this.gradeBtn.scaleX = 0.9;
        this.gradeBtn.scaleY = 0.9;
        this.gradeBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.gradeEnd, this);
        this.gradeBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.gradeEnd, this);
    };
    Home.prototype.gradeEnd = function (ev) {
        this.gradeBtn.scaleX = 1;
        this.gradeBtn.scaleY = 1;
        this.gradeBtn.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.gradeEnd, this);
        this.gradeBtn.removeEventListener(egret.TouchEvent.TOUCH_END, this.gradeEnd, this);
        if (ev.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
        }
        else if (ev.type == egret.TouchEvent.TOUCH_END) {
            console.log('进入难度等级');
        }
    };
    Home.prototype.suggestBegin = function () {
        this.suggestBtn.scaleX = 0.9;
        this.suggestBtn.scaleY = 0.9;
        this.suggestBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.suggestEnd, this);
        this.suggestBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.suggestEnd, this);
    };
    Home.prototype.suggestEnd = function (ev) {
        this.suggestBtn.scaleX = 1;
        this.suggestBtn.scaleY = 1;
        this.suggestBtn.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.suggestEnd, this);
        this.suggestBtn.removeEventListener(egret.TouchEvent.TOUCH_END, this.suggestEnd, this);
        if (ev.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
        }
        else if (ev.type == egret.TouchEvent.TOUCH_END) {
            console.log('进入建议');
        }
    };
    Home.prototype.startBegin = function () {
        this.startBtn.scaleX = 0.9;
        this.startBtn.scaleY = 0.9;
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.startEnd, this);
        this.startBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.startEnd, this);
    };
    Home.prototype.startEnd = function (ev) {
        this.startBtn.scaleX = 1;
        this.startBtn.scaleY = 1;
        this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.startEnd, this);
        this.startBtn.removeEventListener(egret.TouchEvent.TOUCH_END, this.startEnd, this);
        if (ev.type == egret.TouchEvent.TOUCH_RELEASE_OUTSIDE) {
        }
        else if (ev.type == egret.TouchEvent.TOUCH_END) {
            console.log('进入游戏');
            this.removeChildren();
            this.parent.removeChild(this);
            this._GameContainer.createGame();
        }
    };
    return Home;
}(BaseUILayer));
__reflect(Home.prototype, "Home");
//# sourceMappingURL=Home.js.map