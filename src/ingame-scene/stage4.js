import Path from "/src/engine/utils/path.js";

import StageScene from "./stage-scene.js";
import Block from "../ingame-block/block(gray).js";
import Thorn from "../ingame-block/thorn.js";
import Ball from "../ingame-block/ball.js";
import Star from "./assets/blocks/star.js";
import BreakableBlock from "./assets/blocks/breakable-block.js";
import MoveleftBlock from "../ingame-block/moveleftblock.js";
import MoverightBlock from "../ingame-block/moverightblock.js";
import Stage5 from "./stage5.js";

export default class Stage4 extends StageScene {
  constructor() {
    super(Stage5);
    //setAssetFolderPath는 한 번만 실행해도 됩니다.
    Path.setAssetFolderPath(import.meta.url); // 이 코드가 없으면 상대경로로 불러올 수 없습니다.

    this.ball = new Ball(385, 125);
    this.addChild(this.ball);

    this.block = new Block(385, 225);
    this.addChild(this.block);

    this.block = new Block(415, 225);
    this.addChild(this.block);

    this.moverightblock = new MoverightBlock(415, 315);
    this.addChild(this.moverightblock);

    this.thorn = new Thorn(415, 345);
    this.addChild(this.thorn);

    this.moverightblock = new MoverightBlock(415, 435);
    this.addChild(this.moverightblock);

    this.thorn = new Thorn(415, 465);
    this.addChild(this.thorn);

    this.moverightblock = new MoverightBlock(445, 195);
    this.addChild(this.moverightblock);

    this.block = new Block(445, 225);
    this.addChild(this.block);

    for (let i = 285; i <= 465; i += 60) {
      this.thorn = new Thorn(445, i);
      this.addChild(this.thorn);
    }

    for (let i = 225; i <= 465; i += 60) {
      this.thorn = new Thorn(475, i);
      this.addChild(this.thorn);
    }

    for (let i = 225; i <= 465; i += 60) {
      this.thorn = new Thorn(505, i);
      this.addChild(this.thorn);
    }

    for (let i = 225; i <= 465; i += 60) {
      this.thorn = new Thorn(535, i);
      this.addChild(this.thorn);
    }

    for (let i = 225; i <= 465; i += 60) {
      this.thorn = new Thorn(565, i);
      this.addChild(this.thorn);
    }

    for (let i = 225; i <= 465; i += 60) {
      this.thorn = new Thorn(595, i);
      this.addChild(this.thorn);
    }

    for (let i = 225; i <= 465; i += 60) {
      this.thorn = new Thorn(625, i);
      this.addChild(this.thorn);
    }

    for (let i = 225; i <= 465; i += 60) {
      this.star = new Star(655, i - 30);
      this.addChild(this.star);
      this.thorn = new Thorn(655, i);
      this.addChild(this.thorn);
    }

    for (let i = 225; i <= 405; i += 60) {
      this.thorn = new Thorn(685, i);
      this.addChild(this.thorn);
    }

    this.breakableBlock = new BreakableBlock(685, 525);
    this.addChild(this.breakableBlock);

    for (let i = 225; i <= 405; i += 60) {
      this.thorn = new Thorn(715, i);
      this.addChild(this.thorn);
    }

    this.breakableBlock = new BreakableBlock(715, 555);
    this.addChild(this.breakableBlock);

    for (let i = 225; i <= 465; i += 60) {
      this.thorn = new Thorn(745, i);
      this.addChild(this.thorn);
    }

    for (let i = 225; i <= 465; i += 60) {
      this.thorn = new Thorn(775, i);
      this.addChild(this.thorn);
    }

    this.breakableBlock = new BreakableBlock(775, 555);
    this.addChild(this.breakableBlock);

    for (let i = 225; i <= 465; i += 60) {
      this.thorn = new Thorn(805, i);
      this.addChild(this.thorn);
    }

    for (let i = 225; i <= 465; i += 60) {
      this.thorn = new Thorn(835, i);
      this.addChild(this.thorn);
    }

    this.star = new Star(835, 525);
    this.addChild(this.star);

    this.breakableBlock = new BreakableBlock(835, 555);
    this.addChild(this.breakableBlock);

    this.moveleftblock = new MoveleftBlock(865, 255);
    this.addChild(this.moveleftblock);

    this.thorn = new Thorn(865, 285);
    this.addChild(this.thorn);

    this.moveleftblock = new MoveleftBlock(865, 375);
    this.addChild(this.moveleftblock);

    this.thorn = new Thorn(865, 405);
    this.addChild(this.thorn);

    this.thorn = new Thorn(865, 465);
    this.addChild(this.thorn);
  }
}
