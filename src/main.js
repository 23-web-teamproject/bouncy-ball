import Engine from "/src/engine/engine.js";
import Stage1 from "./ingame-scene/stage1.js";
import Stage2 from "./ingame-scene/stage2.js";
import Stage3 from "./ingame-scene/stage3.js";
import Stage4 from "./ingame-scene/stage4.js";
import Stage5 from "./ingame-scene/stage5.js";
import Stage6 from "./ingame-scene/stage6.js";
import endingscene from "./ingame-scene/endingscene.js";
import MainScene from "./main-scene/scene.js";

/**
 * main.js는 index.html에서 명시적으로 불러오고 있다.
 * 따라서 절대 지워서는 안된다.
 *
 * main.js는 게임을 실행하기 위해 기본적인 환경을 설정하는 역할을 한다.
 * init함수에 설정값을 입력하여 엔진을 초기화한다.
 * 이 때 최초로 불러올 씬을 선택하여 게임을 시작한다.
 *
 * 사용자가 직접 설정할 수 있지만, 플레이어에게 맡기는 방법도 있다.
 * Engine.initWithForm()으로 form을 이용해 엔진을 초기화할 수 있다.
 */
window.onload = () => {
  Engine.initWithForm({
    thumbnailImagePath: "/thumbnail.png",
    title: "Bouncy Ball",
    scene: MainScene
  });
};
