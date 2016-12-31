var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Texture = PIXI.Texture,
    Sprite = PIXI.Sprite;

var stage = new Container();

var renderer = new PIXI.CanvasRenderer(740, 512);
document.body.appendChild(renderer.view);

var gameScene = new GameScene();
var menuScene = new MenuScene();
stage.addChild(gameScene, menuScene);

var engine = new Engine(gameScene);

var options = {
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
declare var Smoothie:any;
var smoothie = new Smoothie(options);
//-----------------------------------------

setup();
var t :number = 0;

function setup() {
    renderer.backgroundColor = 0x061639;

    smoothie.start();
}
