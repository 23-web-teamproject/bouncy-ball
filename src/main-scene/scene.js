import {
  GameObject,
  RenderManager,
  SceneManager,
  Sprite,
  Vector,
} from "../engine/module.js";
import Stage1 from "../ingame-scene/stage1.js";
import DescriptionScene from "../description-scene/scene.js";

export default class MainScene extends GameObject {
  constructor() {
    super();
    this.mainscene = new Sprite({
      imagePath: "/src/main-scene/assets/init_display.png",
      transform: {
        position: new Vector(
          RenderManager.renderCanvasWidth / 2,
          RenderManager.renderCanvasHeight / 2
        ),
      },
    });
    this.addChild(this.mainscene);

    this.playbutton = new Sprite({
      imagePath: "/src/main-scene/assets/playbutton.png",
      transform: {
        position: new Vector(233, 400),
      },
    });
    this.addChild(this.playbutton);

    this.discription = new Sprite({
      imagePath: "/src/main-scene/assets/description.png",
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
