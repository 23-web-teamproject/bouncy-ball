import Path from "/src/engine/utils/path.js";

import StageScene from "./stage-scene.js";
import Block from "../ingame-block/block(gray).js";
import JumpBlock from "../ingame-block/jumpblock.js";
import Thorn from "../ingame-block/thorn.js";
import Ball from "../ingame-block/ball.js";
import Star from "./assets/blocks/star.js";
import BreakableBlock from "./assets/blocks/breakable-block.js";
import MoveleftBlock from "../ingame-block/moveleftblock.js";
import dashitem from "../ingame-block/dashitem.js";
import jumpitem from "../ingame-block/jumpitem.js";
import wall from "../ingame-block/wall.js";
import movingblcok from "../ingame-block/movingblock.js";
import Stage6 from "./stage6.js";

import notBlock from "../ingame-block/notblock.js";
export default class Stage5 extends StageScene  {
  constructor() {
    super(Stage6);
    //setAssetFolderPath는 한 번만 실행해도 됩니다.
    Path.setAssetFolderPath(import.meta.url); // 이 코드가 없으면 상대경로로 불러올 수 없습니다.

    this.star = new Star(385, 65)
    this.addChild(this.star);

    this.jumpblock = new JumpBlock(385, 165)
    this.addChild(this.jumpblock);

    for(let i = 285; i>= 195; i-=30){
      this.block = new notBlock(445, i)
      this.addChild(this.block);
    }

    this.block= new Block(445,165)
    this.addChild(this.block);

    for(let i = 475; i <= 535; i+=30)
    {
      this.block = new Block(i, 315)
      this.addChild(this.block);

      this.block = new Block(i, 465)
      this.addChild(this.block);
    }

    this.ball = new Ball(535, 365);
    this.addChild(this.ball);

    for(let i = 565; i <= 775; i+=30)
    {
      this.thorn = new Thorn(i, 465)
      this.addChild(this.thorn);
    }

    for(let i = 600; i <= 670; i+=70)
    { 
      this.breakableBlock = new BreakableBlock(i, 435)
      this.addChild(this.breakableBlock);
    }
    this.breakableBlock = new BreakableBlock(804, 435)
    this.addChild(this.breakableBlock);

    this.jumpblock = new JumpBlock(745, 405)
    this.addChild(this.jumpblock);

    for(let i = 805; i <= 895; i+=30)
    {
      this.block = new Block(i, 465)
      this.addChild(this.block);
    }
    
    this.dashitem = new dashitem(835, 405)
    this.addChild(this.dashitem);
    
    this.jumpitem = new jumpitem(505, 255)
    this.addChild(this.jumpitem);

    this.breakableBlock = new BreakableBlock(595, 315)
    this.addChild(this.breakableBlock);

    for(let i = 595; i <= 715; i+=60)
    {
      this.breakableBlock = new BreakableBlock(i, 195)
      this.addChild(this.breakableBlock);
    }

    this.jumpblock = new JumpBlock(775, 225)
    this.addChild(this.jumpblock);

    this.moveleftblock = new MoveleftBlock(835, 135)
    this.addChild(this.moveleftblock);

    this.wall = new wall(50, 225)
    this.addChild(this.wall);

    this.wall = new wall(300, 225)
    this.addChild(this.wall);

    this.movingblcok = new movingblcok(150, 225)
    this.addChild(this.movingblcok);
    
    for(let i=300; i<=600;i+=30){
    this.star = new Star(60, i)
    this.addChild(this.star);
    }
  }
  update(deltaTime) {
    super.update(deltaTime);
  }
}
