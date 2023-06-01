import Path from "/src/engine/utils/path.js";
import Stage1 from "./stage1.js";
import { GameObject, RenderManager, SceneManager, Sprite, Vector } from "../engine/module.js";
export default class discription4 extends GameObject  {
  constructor() {
    super();
    this.discription = new Sprite(({
    imagePath: "/src/ingame-block/discription4.png",
    transform: {
      position: new Vector(RenderManager.renderCanvasWidth/2,RenderManager.renderCanvasHeight/2),
    },
  }))
  this.addChild(this.discription);

  this.playbutton_last = new Sprite(({
    imagePath: "/src/ingame-block/play_last.png",
    transform: {
      position: new Vector(1100,670)
    },
  }))
  this.addChild(this.playbutton_last);
}

  update(deltaTime) {
    super.update(deltaTime);
    if(this.playbutton_last.isLeftMouseClickThis()){
      SceneManager.loadScene(Stage1);
    }
  }
}
