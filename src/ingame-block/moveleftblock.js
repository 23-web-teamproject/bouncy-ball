import { Vector, Sprite, Rect, GameObject } from "/src/engine/module.js";

export default class MoveleftBlock extends Sprite {
  /**
   * 밟으면 더 높이 뛰어오르는 블록입니다.
   *
   * @param {number} x - x좌표
   * @param {number} y - y좌표
   */
  constructor(x, y) {
    super({
      name: "left_smallboximg",
      imagePath: "/src/ingame-block/moveleftblock.png",
      isPhysicsEnable: true,
      transform: {
        position: new Vector(x, y),
      },
      rigidbody: {
        bounciness: 0,
        isStatic: true,
      },
    });

    this.addChild(
      new Rect({
        name: "left_smallbox",
        isVisible: false,
        width: 26,
        height: 1,
        transform: {
          position: new Vector(0, -15),
        },
        isPhysicsEnable: true,
        rigidbody: {
          bounceness: 0,
          isTrigger: true,
        },
      })
    );
  }
}
