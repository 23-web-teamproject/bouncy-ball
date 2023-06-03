import { GameObject, Rect, Sprite, Vector } from "../../../engine/module.js";
import { typeCheck } from "../../../engine/utils.js";

class Block extends GameObject {
  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {object} [size]
   * @param {object} [size.x=1]
   * @param {object} [size.y=1]
   */
  constructor(x, y, size = { x: 1, y: 1 }) {
    const blockWidth = 30;
    const blockHeight = 30;
    const sizeX = typeCheck(size.x, "number", 1);
    const sizeY = typeCheck(size.y, "number", 1);
    super({
      transform: {
        position: new Vector(x, y),
      },
      isPhysicsEnable: true,
      rigidbody: {
        isStatic: true,
      },
      boundary: {
        width: blockWidth * sizeX,
        height: blockHeight * sizeY,
        offset: new Vector(
          (blockWidth / 2) * (sizeX - 1),
          (blockHeight / 2) * (sizeY - 1)
        ),
      },
    });

    // cover Sprite to boundary area
    for (let i = 0; i < sizeY; i++) {
      for (let j = 0; j < sizeX; j++) {
        this.addChild(
          new Sprite({
            imagePath: "/src/ingame-scene/assets/images/block.png",
            transform: {
              position: new Vector(j * blockWidth, i * blockHeight),
            },
          })
        );
      }
    }

    //create trigger on top of block set
    this.addChild(
      new Rect({
        name: "jumpTrigger",
        isVisible: false,
        width: blockWidth * sizeX - 4,
        height: 4,
        rigidbody: {
          isTrigger: true,
        },
        isPhysicsEnable: true,
        transform: {
          position: new Vector(
            (blockWidth / 2) * (sizeX - 1),
            -blockHeight / 2 + 2
          ),
        },
      })
    );
  }
}

export default Block;
