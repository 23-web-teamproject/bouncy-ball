import Path from "/src/engine/utils/path.js";

import StageScene from "./stage-scene.js";
import Block from "./assets/blocks/block.js";
import Ball from "../ingame-block/ball.js";
import Star from "./assets/blocks/star.js";
import MoveleftBlock from "../ingame-block/moveleftblock.js";
import MoverightBlock from "../ingame-block/moverightblock.js";
import MainScene from "../main-scene/scene.js";
import JumpBlock from "../ingame-block/jumpblock.js";
export default class endingscene extends StageScene  {
  constructor() {
    super(MainScene);
    //setAssetFolderPath는 한 번만 실행해도 됩니다.
    Path.setAssetFolderPath(import.meta.url); // 이 코드가 없으면 상대경로로 불러올 수 없습니다.

    
      this.Block = new Block(280, 120, {x:1, y:17})
      this.addChild(this.Block);
      this.Block = new Block(1000, 120,  {x:1, y:17})
      this.addChild(this.Block);
    

    for(let i = 180; i<=540; i+=60)
    {
      this.MoverightBlock = new MoverightBlock(310, i)
      this.addChild(this.MoverightBlock);
      this.MoveleftBlock = new MoveleftBlock(970, i+30)
      this.addChild(this.MoveleftBlock);
    }

    this.Block = new Block(310, 120, {x:23, y:1})
      this.addChild(this.Block);

    for(let i = 310; i<= 970; i+=30)
    {
      this.JumpBlock = new JumpBlock(i, 600)
      this.addChild(this.JumpBlock);
    }

    this.star = new Star(370, 330)
    this.addChild(this.star);

    this.star = new Star(370, 360)
    this.addChild(this.star);

    this.star = new Star(370, 390)
    this.addChild(this.star);

    this.star = new Star(400, 300)
    this.addChild(this.star);

    this.star = new Star(400, 420)
    this.addChild(this.star);

    this.star = new Star(430, 300)
    this.addChild(this.star);

    this.star = new Star(430, 420)
    this.addChild(this.star);

    for(let i = 300; i<= 420; i+=30)
    {
      this.star = new Star(490, i)
      this.addChild(this.star);
    }

    this.star = new Star(520, 420)
    this.addChild(this.star);
    this.star = new Star(550, 420)
    this.addChild(this.star);

    for(let i = 300; i<= 420; i+=30)
    {
      this.star = new Star(610, i)
      this.addChild(this.star);
    }
    for(let i = 300; i<= 420; i+=60)
    {
      this.star = new Star(640, i)
      this.addChild(this.star);
      this.star = new Star(670, i)
      this.addChild(this.star);
    }
    for(let i = 330; i<= 420; i+=30)
    {
      this.star = new Star(730, i)
      this.addChild(this.star);
      this.star = new Star(790, i)
      this.addChild(this.star);
    }

    this.star = new Star(760, 300)
    this.addChild(this.star);
    this.star = new Star(760, 360)
    this.addChild(this.star);

    for(let i = 300; i<= 420; i+=30)
    {
      this.star = new Star(850, i)
      this.addChild(this.star);
    }

    this.star = new Star(880, 300)
    this.addChild(this.star);
    this.star = new Star(880, 360)
    this.addChild(this.star);
    this.star = new Star(880, 390)
    this.addChild(this.star);
    this.star = new Star(910, 330)
    this.addChild(this.star);
    this.star = new Star(910, 420)
    this.addChild(this.star);

    this.Ball = new Ball(310, 150)
    this.addChild(this.Ball);

  }
  update(deltaTime) {
    super.update(deltaTime);
  }
}
