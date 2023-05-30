import {
  Debug,
  GameObject,
  InputManager,
  SceneManager,
} from "../engine/module.js";
import Ball from "../ingame-block/ball.js";
import star from "../ingame-block/star.js";

/**
 * 스테이지 씬을 나타낸다.
 * 별을 모두 획득했을 때 다음 스테이지로 넘어가는 것과,
 * 공이 죽었을 때 씬을 다시 불러오는 책임을 담당한다.
 */
class StageScene extends GameObject {
  /**
   * 모든 별을 획득했을 때 다음 스테이지를 불러오기 위해
   * 다음 스테이지를 인자로 넘겨줘야 한다.
   * 
   * @constructor
   * @param {StageScene} NextScene 스테이지 클리어 시 불러올 다음 스테이지
   */
  constructor(NextScene) {
    super();
    this.NextScene = NextScene;
    this.isSceneChangeState = false;
  }

  update(deltaTime) {
    super.update(deltaTime);
    if (this.isStarCountIsZero()) {
      this.loadNextStage();
    }
    if (this.isBallDead()) {
      this.reloadCurrentScene();
    }
    if (InputManager.isKeyDown("a")) {
      console.log(star.starCount);
      Debug.pause();
    }
  }

  isStarCountIsZero() {
    return star.starCount === 0;
  }

  loadNextStage() {
    if (this.isSceneChangeState === false) {
      this.isSceneChangeState = true;

      setTimeout(() => {
        star.starCount = 0;
        SceneManager.loadScene(this.NextScene);
      }, 1500);
    }
  }

  isBallDead() {
    return Ball.isDead;
  }

  reloadCurrentScene() {
    if (this.isSceneChangeState === false) {
      this.isSceneChangeState = true;

      setTimeout(() => {
        star.starCount = 0;
        SceneManager.loadScene(this.constructor);
      }, 1500);
    }
  }
}

export default StageScene;
