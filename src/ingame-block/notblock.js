import { Vector, Sprite, GameObject, Rect } from "/src/engine/module.js";

export default class notBlock extends Sprite {
  /**
   * 기본 블록입니다.
   *
   * @param {number} x - x좌표
   * @param {number} y - y좌표
   */
  constructor(x, y) {
    super({
      name: "notblock",
      imagePath: "/src/ingame-block/block(gray).png",
      isPhysicsEnable: true,
      transform: {
        position: new Vector(x, y),
      },
      rigidbody: {
        isStatic: true,
      },
      boundary: {
        width: 28,
        height:28
      }
    });
  }
}
