import { Vector, Sprite, Rect, GameObject, Color } from "/src/engine/module.js";

export default class Thorn extends GameObject {
  /**
   * 밟으면 더 높이 뛰어오르는 블록입니다.
   *
   * @param {number} x - x좌표
   * @param {number} y - y좌표
   */
  constructor(x, y) {
    super();

    this.addChild(new Rect({
      name: "thorn",
      width: 28,
      height: 1,
      color: new Color(256, 256, 256, 1),
      transform: {
        position: new Vector(x, y - 14.5),
      },
      isPhysicsEnable: true,
      rigidbody: {
        isStatic: true,
        isTrigger: true,
      },
    }));

    this.addChild(new Sprite({
      name: "thornimg",
      imagePath: "/src/ingame-block/thorn.png",
      isPhysicsEnable: true,
      transform: {
        position: new Vector(x, y),
      },
      rigidbody: {
        isStatic: true,
      },
    }));
  }
}
