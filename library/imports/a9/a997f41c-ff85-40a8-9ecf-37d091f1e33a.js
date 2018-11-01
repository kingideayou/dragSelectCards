"use strict";
cc._RF.push(module, 'a997fQc/4VAqJ7PN9CR8eM6', 'CardCtrl');
// Script/CardCtrl.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        spSelected: cc.Node,
        touched: {
            default: false,
            notify: function notify() {
                this.spSelected.active = this.touched;
            }
        },
        selected: {
            default: false,
            notify: function notify() {
                if (this.selected) {
                    this.node.y += 20;
                } else {
                    this.node.y -= 20;
                }
            }
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {},
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();