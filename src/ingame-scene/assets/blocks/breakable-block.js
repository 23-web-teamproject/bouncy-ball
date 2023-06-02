import { Rect, Vector, Sprite, ParticleEffect } from "/src/engine/module.js";

export default class BreakableBlock extends Sprite {
  constructor(x, y) {
    super({
      imagePath: "/src/ingame-scene/assets/images/breakableBlock.png",
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
        isTrigger: true,
      },
    });
    this.addChild(this.staticCollider);

    this.staticCollider.onCollision = (other) => {
      if(other.getName() === "Ball") {
        const breakableBlockEffect = new ParticleEffect({
          imagePath: "/src/ingame-scene/assets/images/breakableBlockParticle.png",
          isEnable: true,
          countPerSecond: 20,
          duration: 0.25,
          rotateDirection: "random",
          rotatePerSecond: 0.5,
          speed: 200,
          diffuseness: 180,
          isAlphaFade: true,
          isScaleFade: true,
          lifeTime: 0.5,
        });
        this.addChild(breakableBlockEffect);
        breakableBlockEffect.removeParent();
        breakableBlockEffect.setPosition(this.getPosition());
  
        this.destroy();
        this.staticCollider.destroy();
      }
    }
  }
}
