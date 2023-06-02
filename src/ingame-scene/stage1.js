import Path from "/src/engine/utils/path.js";

import StageScene from "./stage-scene.js";
import Block from "../ingame-block/block(gray).js";
import Ball from "../ingame-block/ball.js";
import Star from "./assets/blocks/star.js";
import Stage2 from "./stage2.js";

export default class Stage1 extends StageScene  {
  constructor() {
    super(Stage2);
    //setAssetFolderPath는 한 번만 실행해도 됩니다.
    Path.setAssetFolderPath(import.meta.url); // 이 코드가 없으면 상대경로로 불러올 수 없습니다.

    this.ball = new Ball(650, 230);
    this.addChild(this.ball);

    this.block = new Block(385, 330)
    this.addChild(this.block);

    this.block = new Block(415, 330)
    this.addChild(this.block);

    this.block = new Block(445, 330)
    this.addChild(this.block);

    this.block = new Block(475, 330)
    this.addChild(this.block);

    this.block = new Block(475, 360)
    this.addChild(this.block);

    this.block = new Block(505, 360)
    this.addChild(this.block);

    this.block = new Block(535, 360)
    this.addChild(this.block);

    this.block = new Block(535, 390)
    this.addChild(this.block);

    this.block = new Block(565, 390)
    this.addChild(this.block);

    this.block = new Block(595, 390)
    this.addChild(this.block);

    this.block = new Block(625, 390)
    this.addChild(this.block);

    this.block = new Block(655, 390)
    this.addChild(this.block);

    this.block = new Block(685, 390)
    this.addChild(this.block);

    this.block = new Block(715, 390)
    this.addChild(this.block);

    this.block = new Block(745, 390)
    this.addChild(this.block);

    this.block = new Block(745, 360)
    this.addChild(this.block);

    this.block = new Block(775, 360)
    this.addChild(this.block);

    this.block = new Block(805, 360)
    this.addChild(this.block);

    this.block = new Block(805, 330)
    this.addChild(this.block);

    this.block = new Block(835, 330)
    this.addChild(this.block);

    this.block = new Block(865, 330)
    this.addChild(this.block);

    this.block = new Block(895, 330)
    this.addChild(this.block);

    this.star = new Star(865, 300)
    this.addChild(this.star);
    
    this.star = new Star(420, 300)
    this.addChild(this.star);
  }
  update(deltaTime) {
    super.update(deltaTime);
  }
}
