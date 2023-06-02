import { Vector, Sprite, Rect } from "/src/engine/module.js";

export default class JumpBlock extends Sprite {
  /**
   * 밟으면 더 높이 뛰어오르는 블록입니다.
   *
   * @param {number} x - x좌표
   * @param {number} y - y좌표
   */
  constructor(x, y) {
    super({
      name: "jumpblockimg",
      imagePath: "/src/ingame-block/jumpblock.png",
      isPhysicsEnable: true,
      transform: {
        position: new Vector(x, y),
      },
      rigidbody: {
        isStatic: true,
      },
    });

    const trigger = new Rect({
      name: "jumpblock",
      isVisible: false,
      width: 30,
      height: 4,
      transform: {
        position: new Vector(0, -13),
      },
      isPhysicsEnable: true,
      rigidbody: {
        isTrigger: true,
      },
    });

    this.addChild(trigger);
  }
}
