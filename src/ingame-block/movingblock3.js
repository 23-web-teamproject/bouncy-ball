import { Rect, Vector, Sprite } from "/src/engine/module.js";

export default class movingblock extends Sprite {
  constructor(x, y) {
    super({
      imagePath: "/src/ingame-block/movingblock3.png",
      transform: {
        position: new Vector(x, y),
      },
      isPhysicsEnable: true,
      rigidbody: {
        isStatic: true,
      },
    });

    const trigger = new Rect({
      name: "jumpTrigger",
      isVisible: false,
      width: 90,
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

    this.direction = 1;
  }

  update(deltaTime) {
    super.update(deltaTime);
    this.moveByDirection(deltaTime);
  }

  /**
   * direction에 따라서 블록을 움직인다.
   * 이 때 jumpTrigger도 따라서 움직인다.
   * @param {number} deltaTime
   */
  moveByDirection(deltaTime) {
    this.addPosition(new Vector(this.direction * 100 * deltaTime, 0));
  }

  onCollision(other) {
    if (other.getName() === "wall") {
      //트리거 블록과 이 블록간의 충돌된 영역을 구함.
      const xSize = (other.getWorldSize().x + this.getWorldSize().x) / 2;
      const distance = Math.abs(
        this.getPosition().x - other.getPosition().x
      );
      const xDiff = xSize - distance + 1;
      this.direction *= -1;
      this.addPosition(new Vector(this.direction * xDiff, 0));
    }
  }
}
