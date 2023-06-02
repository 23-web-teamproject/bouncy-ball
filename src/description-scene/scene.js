import {
  GameObject,
  RenderManager,
  SceneManager,
  Sprite,
  Vector,
} from "../engine/module.js";

import Stage1 from "../ingame-scene/stage1.js";

export default class DescriptionScene extends GameObject {
  constructor() {
    super();
    const imageWidth = 1280;
    const ratio = RenderManager.renderCanvasWidth / imageWidth;

    this.descriptionSprites = new Array();
    for (let i = 1; i <= 4; i++) {
      const description = new Sprite({
        imagePath: `/src/description-scene/assets/description${i}.png`,
        isVisible: false,
        transform: {
          position: new Vector(
            RenderManager.renderCanvasWidth / 2,
            RenderManager.renderCanvasHeight / 2
          ),
          scale: new Vector(ratio, ratio),
        },
      });
      this.descriptionSprites.push(description);
      this.addChild(description);
    }
    this.descriptionSprites[0].show();

    const nextButtonSize = new Vector(286, 75);
    this.nextButton = new Sprite({
      imagePath: "/src/description-scene/assets/next.png",
      transform: {
        position: new Vector(
          RenderManager.renderCanvasWidth,
          RenderManager.renderCanvasHeight
        ).minus(nextButtonSize.multiply(0.5)),
      },
    });

    const playButtonSize = new Vector(286, 75);
    this.playButton = new Sprite({
      imagePath: "/src/description-scene/assets/play_last.png",
      isVisible: false,
      transform: {
        position: new Vector(
          RenderManager.renderCanvasWidth,
          RenderManager.renderCanvasHeight
        ).minus(playButtonSize.multiply(0.5)),
      },
    });

    this.addChild(this.playButton);
    this.addChild(this.nextButton);

    this.index = 0;
  }

  update(deltaTime) {
    super.update(deltaTime);
    if (this.index === 3) {
      if (this.playButton.isVisible && this.playButton.isLeftMouseClickThis()) {
        SceneManager.loadScene(Stage1);
      }
    } else {
      if (this.nextButton.isLeftMouseClickThis()) {
        this.index++;
        this.descriptionSprites[this.index].show();
        if (this.index === 3) {
          this.nextButton.hide();
          this.playButton.show();
        }
      }
    }
  }
}
