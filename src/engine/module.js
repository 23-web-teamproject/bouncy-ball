/*
  engine/core/에 있는 클래스들을 import하려면 
  사용할 모든 클래스가 명시된 js파일을 import해야한다.
  비슷한 코드가 매우 많아지므로 단순하게 
  core.js를 import해서 사용할 수 있도록 변경한다.

  나중에 사용자가 사용할 수 있는 새로운 클래스가 엔진에 추가되었다면 
  여기에도 작성해주어야 한다.
 */

import Color from "/src/engine/data-structure/color.js";
import Vector from "/src/engine/data-structure/vector.js";
import Matrix from "/src/engine/data-structure/matrix.js";
import InputManager from "/src/engine/core/input-manager.js";
import SceneManager from "/src/engine/core/scene-manager.js";
import RenderManager from "/src/engine/core/render-manager.js";
import GameObject from "/src/engine/core/game-object.js";
import Sprite from "/src/engine/core/sprite.js";
import SoundEffect from "/src/engine/fx/sound-effect.js";
import ParticleEffect from "/src/engine/fx/particle-effect.js";

export {
  InputManager,
  SceneManager,
  RenderManager,
  Color,
  Vector,
  Matrix,
  GameObject,
  Sprite,
  SoundEffect,
  ParticleEffect
}