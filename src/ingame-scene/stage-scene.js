import {
  GameObject,
  InputManager,
  RenderManager,
  SceneManager,
  Vector,
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
    this.isStagePositionSetToCenter = false;
    this.minPos = new Vector(Number.MAX_VALUE, Number.MAX_VALUE);
    this.maxPos = new Vector(0, 0);
  }

  update(deltaTime) {
    super.update(deltaTime);
    if (this.isStagePositionSetToCenter === false) {
      this.setStagePositionToCenter();
      // updateMatrix 이후에 update가 실행되기 때문에
      // 어쩔 수 없이 updateMatrix를 한 번 더 호출하여
      // 바뀐 좌표를 전체적으로 갱신해준다.
      this.updateMatrix();
    }

    if (this.isSceneChangeState === false) {
      if (this.isStarCountIsZero()) {
        this.loadNextStage();
      }
      if (this.isBallDead()) {
        this.reloadCurrentScene();
      }
    }
    if (this.isEnteredCheatCode()) {
      this.loadNextStage();
    }
  }

  /**
   * 스테이지 내 모든 블럭들의 위치가 상수여서
   * 해상도에 따라 위치가 달라지므로 이 씬의 위치를 중앙으로 옮긴다.
   */
  setStagePositionToCenter() {
    this.findMinAndMaxPosInStage(this.childList);

    const canvasCenterPos = new Vector(
      RenderManager.renderCanvasWidth / 2,
      RenderManager.renderCanvasHeight / 2
    );
    const stageSize = this.maxPos.minus(this.minPos);
    const centerPos = canvasCenterPos.minus(stageSize.multiply(0.5));
    this.setPosition(centerPos.minus(this.minPos));

    this.isStagePositionSetToCenter = true;
  }

  findMinAndMaxPosInStage(childList) {
    childList.forEach((child) => {
      if (this.minPos.x > child.getPosition().x) {
        this.minPos.x = child.getPosition().x;
      }
      if (this.minPos.y > child.getPosition().y) {
        this.minPos.y = child.getPosition().y;
      }
      if (this.maxPos.x < child.getPosition().x) {
        this.maxPos.x = child.getPosition().x;
      }
      if (this.maxPos.y < child.getPosition().y) {
        this.maxPos.y = child.getPosition().y;
      }

      if (child.childList.length > 0) {
        this.findMinAndMaxPosInStage(child.childList);
      }
    });
  }

  isStarCountIsZero() {
    return star.starCount === 0;
  }

  loadNextStage() {
    this.isSceneChangeState = true;

    setTimeout(() => {
      star.starCount = 0;
      SceneManager.loadScene(this.NextScene);
    }, 1500);
  }

  isBallDead() {
    return Ball.isDead;
  }

  reloadCurrentScene() {
    this.isSceneChangeState = true;

    setTimeout(() => {
      star.starCount = 0;
      SceneManager.loadScene(this.constructor);
    }, 1500);
  }

  /**
   * 시연용 치트코드 키가 눌렸다면 true를 반환한다.
   * @returns {boolean}
   */
  isEnteredCheatCode() {
    return InputManager.isKeyDown("`");
  }
}

export default StageScene;
