import Path from "/src/engine/utils/path.js";
import discription4 from "./discription4.js";
import { GameObject, RenderManager, SceneManager, Sprite, Vector } from "../engine/module.js";
export default class discription3 extends GameObject  {
  constructor() {
    super();
    this.discription = new Sprite(({
    imagePath: "/src/ingame-block/discription3.png",
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
      SceneManager.loadScene(discription4);
    }
  }
}
