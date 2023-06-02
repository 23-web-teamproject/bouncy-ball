import Path from "/src/engine/utils/path.js";
import discription2 from "./discription2.js";
import { GameObject, RenderManager, SceneManager, Sprite, Vector } from "../engine/module.js";
export default class discription1 extends GameObject  {
  constructor() {
    super();
    this.discription = new Sprite(({
    imagePath: "/src/ingame-block/discription1.png",
    transform: {
      position: new Vector(RenderManager.renderCanvasWidth/2,RenderManager.renderCanvasHeight/2),
    },
  }))
  this.addChild(this.discription);

  this.nextbutton = new Sprite(({
    imagePath: "/src/ingame-block/next.png",
    transform: {
      position: new Vector(1100,670)
    },
  }))
  this.addChild(this.nextbutton);
}

  update(deltaTime) {
    super.update(deltaTime);
    if(this.nextbutton.isLeftMouseClickThis()){
      SceneManager.loadScene(discription2);
    }
  }
}
