var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Texture = PIXI.Texture,
    Sprite = PIXI.Sprite;

var stage = new Container();
var stage2 = new Container();
var renderer = autoDetectRenderer(740, 512);
document.body.appendChild(renderer.view);

loader
  .add("images/cat.png")
  .load(setup);

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
var rectangle : PIXI.Graphics;
var cat : PIXI.Sprite;
//setup()
function setup() {
    renderer.backgroundColor = 0x061639;

    rectangle = new PIXI.Graphics();
    rectangle.lineStyle(4, 0xFF3300, 1);
    rectangle.beginFill(0x66CCFF);
    rectangle.drawRect(0, 0, 64, 64);
    rectangle.endFill();
    rectangle.x = 170;
    rectangle.y = 170;
    gameScene.addChild(rectangle);

    cat = new Sprite(resources["images/cat.png"].texture);
    cat.x = 50;
    cat.y = 50;
    menuScene.addChild(cat);
    //renderer.render(stage);

    smoothie.start();
}
var t :number = 0;
