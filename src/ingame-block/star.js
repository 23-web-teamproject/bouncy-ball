import { Vector, Sprite } from "/src/engine/module.js";

export default class star extends Sprite {
  /**
   * @property {number} starCount
   * @static
   */
  static starCount = 0;
  /**
   * 밟으면 더 높이 뛰어오르는 블록입니다.
   *
   * @param {number} x - x좌표
   * @param {number} y - y좌표
   */
  static starCount = 2;
  constructor(x, y) {
    super({
      name: "star",
      imagePath: "/src/ingame-block/star.png",
      transform: {
        position: new Vector(x, y),
      },
      isPhysicsEnable: true,
      rigidbody: {
        isTrigger : true
      },
    });
    star.starCount++;
  }

  onCollision(other) {
    if(this.isActive){
      this.deactivate();
      this.destroy();
      star.starCount--;
    }

  }
}
