import Path from "/src/engine/utils/path.js";

import StageScene from "./stage-scene.js";
import Block from "./assets/blocks/block.js";
import Thorn from "../ingame-block/thorn.js";
import JumpBlock from "../ingame-block/jumpblock.js";
import Ball from "../ingame-block/ball.js";
import Star from "./assets/blocks/star.js";
import Stage4 from "./stage4.js";

export default class Stage3 extends StageScene  {
  constructor() {
    super(Stage4);
    //setAssetFolderPath는 한 번만 실행해도 됩니다.
    Path.setAssetFolderPath(import.meta.url); // 이 코드가 없으면 상대경로로 불러올 수 없습니다.

    this.ball = new Ball(315, 335);
    this.addChild(this.ball);

    this.block = new Block(285, 435)
    this.addChild(this.block);

    this.block = new Block(315, 435)
    this.addChild(this.block);

    this.block = new Block(345, 435)
    this.addChild(this.block);

    this.block = new Block(375, 435)
    this.addChild(this.block);

    this.jumpblock = new JumpBlock(405, 435)
    this.addChild(this.jumpblock);

    this.block = new Block(435, 345, {x:1, y:4})
    this.addChild(this.block);

    this.block = new Block(465, 435)
    this.addChild(this.block);

    this.jumpblock = new JumpBlock(495, 435)
    this.addChild(this.jumpblock);

    this.thorn = new Thorn(525, 435)
    this.addChild(this.thorn);

    this.thorn = new Thorn(555, 435)
    this.addChild(this.thorn);

    this.jumpblock = new JumpBlock(555, 375)
    this.addChild(this.jumpblock);

    this.thorn = new Thorn(585, 405)
    this.addChild(this.thorn);

    this.thorn = new Thorn(615, 405)
    this.addChild(this.thorn);

    this.jumpblock = new JumpBlock(645, 345)
    this.addChild(this.jumpblock);

    this.thorn = new Thorn(675, 375)
    this.addChild(this.thorn);

    this.thorn = new Thorn(705, 375)
    this.addChild(this.thorn);

    this.thorn = new Thorn(735, 375)
    this.addChild(this.thorn);

    this.block = new Block(735, 285)
    this.addChild(this.block);

    this.block = new Block(765, 285)
    this.addChild(this.block);
    
    this.block = new Block(795, 285)
    this.addChild(this.block);

    this.star = new Star(765, 255)
    this.addChild(this.star);
    
    this.starcount = 2;
  }
  update(deltaTime) {
    super.update(deltaTime);
  }
}
