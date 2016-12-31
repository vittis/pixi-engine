var explorer : PIXI.Sprite;
function loadou() {
  console.log("load viado");

}

class MenuScene extends Scene {

  init() : void {
    super.init();
    explorer = new Sprite(resources["images/explorer.png"].texture);
    explorer.x = 150;
    explorer.y = 50;
    menuScene.addChild(explorer);


  }

  load() : void {
    loader
      .add("images/explorer.png")
      .load(this.init.bind(this));
  }

  enter() : void {
    console.log("enter menuscene");
    this.visible = true;

  }
  update() : void {
    if (this.hasLoaded) {
      t++;
      if (t > 200) {
        t=0;
        engine.switch(gameScene);
      }
      
    }
  }
  exit() : void {
    console.log("exit menuscene");
    this.visible = false;
  }
}
