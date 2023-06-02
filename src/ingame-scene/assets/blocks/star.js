import { Vector, Sprite, ParticleEffect } from "/src/engine/module.js";

export default class Star extends Sprite {
  /**
   * @property {number} starCount
   * @static
   */
  static starCount = 0;
  /**
   * 플레이어가 획득할 수 있는 별입니다.
   *
   * @param {number} x - x좌표
   * @param {number} y - y좌표
   */
  constructor(x, y) {
    super({
      name: "star",
      imagePath: "/src/ingame-scene/assets/images/star.png",
      transform: {
        position: new Vector(x, y),
      },
      isPhysicsEnable: true,
      rigidbody: {
        isTrigger: true,
      },
    });
    Star.starCount++;
  }

  onCollision(other) {
    if (this.isActive) {
      const starEffect = new ParticleEffect({
        imagePath: "/src/ingame-scene/assets/images/starParticle.png",
        isEnable: true,
        countPerSecond: 40,
        duration: 0.25,
        rotateDirection: "random",
        rotatePerSecond: 0.5,
        speed: 200,
        diffuseness: 180,
        isAlphaFade: true,
        isScaleFade: true,
        lifeTime: 0.5,
      });
      this.addChild(starEffect);
      starEffect.removeParent();
      starEffect.setPosition(this.getPosition());

      this.deactivate();
      this.destroy();
      Star.starCount--;
    }
  }
}
