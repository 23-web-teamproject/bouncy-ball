import Path from "/src/engine/utils/path.js";

import StageScene from "./stage-scene.js";
import Block from "../ingame-block/block(gray).js";
import Ball from "../ingame-block/ball.js";
import star from "../ingame-block/star.js";
import MoveleftBlock from "../ingame-block/moveleftblock.js";
import MoverightBlock from "../ingame-block/moverightblock.js";
import mainscene from "./mainscene.js";
import JumpBlock from "../ingame-block/jumpblock.js";
import notBlock from "../ingame-block/notblock.js";
export default class endingscene extends StageScene  {
  constructor() {
    super(mainscene);
    //setAssetFolderPath는 한 번만 실행해도 됩니다.
    Path.setAssetFolderPath(import.meta.url); // 이 코드가 없으면 상대경로로 불러올 수 없습니다.

    for(let i = 120; i<= 600; i+=30)
    {
      this.notBlock = new notBlock(280, i)
      this.addChild(this.notBlock);
      this.notBlock = new notBlock(1000, i)
      this.addChild(this.notBlock);
    }

    for(let i = 180; i<=540; i+=60)
    {
      this.MoverightBlock = new MoverightBlock(310, i)
      this.addChild(this.MoverightBlock);
      this.MoveleftBlock = new MoveleftBlock(970, i+30)
      this.addChild(this.MoveleftBlock);
    }

    for(let i = 310; i<= 970; i+=30)
    {
      this.notBlock = new notBlock(i, 120)
      this.addChild(this.notBlock);
      this.JumpBlock = new JumpBlock(i, 600)
      this.addChild(this.JumpBlock);
    }

    this.star = new star(370, 330)
    this.addChild(this.star);

    this.star = new star(370, 360)
    this.addChild(this.star);

    this.star = new star(370, 390)
    this.addChild(this.star);

    this.star = new star(400, 300)
    this.addChild(this.star);

    this.star = new star(400, 420)
    this.addChild(this.star);

    this.star = new star(430, 300)
    this.addChild(this.star);

    this.star = new star(430, 420)
    this.addChild(this.star);

    for(let i = 300; i<= 420; i+=30)
    {
      this.star = new star(490, i)
      this.addChild(this.star);
    }

    this.star = new star(520, 420)
    this.addChild(this.star);
    this.star = new star(550, 420)
    this.addChild(this.star);

    for(let i = 300; i<= 420; i+=30)
    {
      this.star = new star(610, i)
      this.addChild(this.star);
    }
    for(let i = 300; i<= 420; i+=60)
    {
      this.star = new star(640, i)
      this.addChild(this.star);
      this.star = new star(670, i)
      this.addChild(this.star);
    }
    for(let i = 330; i<= 420; i+=30)
    {
      this.star = new star(730, i)
      this.addChild(this.star);
      this.star = new star(790, i)
      this.addChild(this.star);
    }

    this.star = new star(760, 300)
    this.addChild(this.star);
    this.star = new star(760, 360)
    this.addChild(this.star);

    for(let i = 300; i<= 420; i+=30)
    {
      this.star = new star(850, i)
      this.addChild(this.star);
    }

    this.star = new star(880, 300)
    this.addChild(this.star);
    this.star = new star(880, 360)
    this.addChild(this.star);
    this.star = new star(880, 390)
    this.addChild(this.star);
    this.star = new star(910, 330)
    this.addChild(this.star);
    this.star = new star(910, 420)
    this.addChild(this.star);

    this.Ball = new Ball(310, 150)
    this.addChild(this.Ball);

  }
  update(deltaTime) {
    super.update(deltaTime);
  }
}
