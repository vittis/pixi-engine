var explorer : PIXI.Sprite;
function loadou() {
  console.log("load viado");

}

class MenuScene extends Scene {

  init() : void {
    explorer = new PIXI.Sprite(PIXI.loader.resources["images/explorer.png"].texture);
    explorer.x = 150;
    explorer.y = 50;
    menuScene.addChild(explorer);

    super.init();
  }

  load() : void {
    PIXI.loader
      .add("images/explorer.png")
      .load(this.init.bind(this));
  }

  enter() : void {
    if (!this.hasLoaded) return;
    this.visible = true;

  }
  update() : void {
    if (!this.hasLoaded) return;

    
  }
  exit() : void {
    this.visible = false;
  }
}
