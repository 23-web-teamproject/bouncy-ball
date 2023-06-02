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
    const imageWidth = 1280;
    const ratio = RenderManager.renderCanvasWidth / imageWidth;
    this.mainscene = new Sprite({
      imagePath: "/src/main-scene/assets/init_display.png",
      transform: {
        position: new Vector(
          RenderManager.renderCanvasWidth / 2,
          RenderManager.renderCanvasHeight / 2
        ),
        scale: new Vector(ratio, ratio)
      },
    });
    this.addChild(this.mainscene);

    this.playbutton = new Sprite({
      imagePath: "/src/main-scene/assets/playbutton.png",
      transform: {
        position: new Vector(233, RenderManager.renderCanvasHeight - 400),
      },
    });
    this.addChild(this.playbutton);

    this.discription = new Sprite({
      imagePath: "/src/main-scene/assets/description.png",
      transform: {
        position: new Vector(233, RenderManager.renderCanvasHeight - 200),
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
