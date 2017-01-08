//Variaveis globais
var stage, renderer, engine;
declare var Smoothie:any;
var smoothie;

function Setup() {
  stage = new PIXI.Container();
  renderer = new PIXI.CanvasRenderer(screenWidth, screenHeight); //TODO: trocar pra autoDetectRenderer
  document.body.appendChild(renderer.view);

  engine = new Engine(gameScene);

  let options = {
    engine: PIXI,
    renderer: renderer,
    root: stage,
    update: engine.gameloop.bind(this),
    interpolate: true,
    fps: 30,
    renderFps: undefined,
    properties: {
      position: true,
      rotation: true,
      size: false,
      scale: false,
      alpha: false,
      tile: false
    }
  }
  Start(options);
}
Setup();
