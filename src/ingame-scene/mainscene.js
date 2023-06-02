import {
  GameObject,
  RenderManager,
  SceneManager,
  Sprite,
  Vector,
} from "../engine/module.js";
import Stage1 from "./stage1.js";
import DescriptionScene from "../description-scene/scene.js";

export default class mainscene extends GameObject {
  constructor() {
    super();
    this.mainscene = new Sprite({
      imagePath: "/src/ingame-block/init_display.png",
      transform: {
        position: new Vector(
          RenderManager.renderCanvasWidth / 2,
          RenderManager.renderCanvasHeight / 2
        ),
      },
    });
    this.addChild(this.mainscene);

    this.playbutton = new Sprite({
      imagePath: "/src/ingame-block/playbutton.png",
      transform: {
        position: new Vector(233, 400),
      },
    });
    this.addChild(this.playbutton);

    this.discription = new Sprite({
      imagePath: "/src/ingame-block/discription.png",
      transform: {
        position: new Vector(233, 600),
      },
    });
    this.addChild(this.discription);
  }
  update(deltaTime) {
    super.update(deltaTime);
    if (this.playbutton.isLeftMouseClickThis()) {
      SceneManager.loadScene(Stage1);
    }
    if (this.discription.isLeftMouseClickThis()) {
      SceneManager.loadScene(DescriptionScene);
    }
  }
}
