/*var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    TextureCache = PIXI.utils.TextureCache,
    Texture = PIXI.Texture,
    Sprite = PIXI.Sprite;
*/


//cenas
var gameScene = new GameScene();
var menuScene = new MenuScene();

var screenWidth=800, screenHeight=600;

declare var Bump : any;
var b;

function Start(options) {
    //renderer.backgroundColor = 0x061639;

    stage.addChild(gameScene, menuScene);

    b = new Bump(PIXI);

    smoothie = new Smoothie(options);
    smoothie.start();
}
