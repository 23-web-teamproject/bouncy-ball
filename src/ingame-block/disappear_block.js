import { Rect, Vector, Sprite } from "/src/engine/module.js";

export default class disappear_block extends Sprite {
  constructor(x, y) {
    super({
      imagePath: "/src/ingame-block/onceblock.png",
      transform: {
        position: new Vector(x, y),
      },
      isPhysicsEnable: true,
      rigidbody: {
        isStatic: true,
      },
    });

    this.staticCollider = new Rect({
      name: "jumpTrigger",
      isVisible: false,
      width: 30,
      height: 4,
      transform: {
        position: new Vector(0, -13),
      },
      isPhysicsEnable: true,
      rigidbody: {
        // isTrigger: true,
        isStatic: true,
      },
    });
    this.addChild(this.staticCollider);

    this.staticCollider.onCollision = (other) => {
      this.destroy();
      this.staticCollider.destroy();
    }
  }
}
