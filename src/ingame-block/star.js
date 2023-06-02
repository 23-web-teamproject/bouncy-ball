import { Vector, Sprite, ParticleEffect } from "/src/engine/module.js";

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
      const starEffect = new ParticleEffect({
        imagePath: "/src/ingame-scene/assets/images/starParticle.png",
        isEnable: true,
        countPerSecond: 25,
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
      star.starCount--;
    }

  }
}
