var rectangle : PIXI.Graphics;
var cat : PIXI.Sprite;
class GameScene extends Scene {
  init() : void {
    super.init();
    console.log("init gamescene");

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
    gameScene.addChild(cat);
  }
  enter() : void {
    console.log("enter gamescene");
    this.visible = true;
 
  }
  load() : void {
    loader
      .add("images/cat.png")
      .load(this.init.bind(this));
  }

  update() : void {
    console.log(this.hasLoaded);
    if (this.hasLoaded) {
      t++;
      if (t>200) {
        engine.switch(menuScene);
        t=0;
      }
      cat.x++;
    }
  }
  exit() : void {
    console.log("exit gamescene");
    this.visible = false;
  }
}
