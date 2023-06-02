import { Vector, Sprite, Rect, GameObject, Color } from "/src/engine/module.js";

export default class Thorn extends Sprite {
  /**
   * 밟으면 더 높이 뛰어오르는 블록입니다.
   *
   * @param {number} x - x좌표
   * @param {number} y - y좌표
   */
  constructor(x, y) {
    super({
      name: "thornimg",
      imagePath: "/src/ingame-block/thorn.png",
      isPhysicsEnable: true,
      transform: {
        position: new Vector(x, y),
      },
      rigidbody: {
        isStatic: true,
      },
    });

    const trigger = new Rect({
      name: "thorn",
      width: 26,
      height: 1,
      transform: {
        position: new Vector(0, -14.5),
      },
      isPhysicsEnable: true,
      rigidbody: {
        isTrigger: true,
      },
    })
    this.addChild(trigger);
    trigger.hide();
  }
}
