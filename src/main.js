/*
 * main.js는 index.html에서 명시적으로 불러오고 있다.
 * 따라서 절대 지워서는 안된다.
 * 
 * main.js는 게임을 실행하기 위해 기본적인 환경을 설정하는 역할을 한다.
 * init함수에 설정값을 입력하여 엔진을 초기화한다.
 * 이 때 최초로 불러올 씬을 선택하여 게임을 시작한다.
 */
import Engine from "/src/engine/engine.js";
import ExampleScene from "/src/default-scene/scene.js";

Engine.init({
  width: 1280,
  height: 720,
  fps: 24,
  scene: ExampleScene
});
