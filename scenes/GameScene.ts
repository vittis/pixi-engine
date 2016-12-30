class GameScene extends Scene {
  init() : void {
    console.log("init gamescene");
  }
  enter() : void {
    console.log("enter gamescene");
    this.visible = true;

  }
  update() : void {
    console.log("update gamescene");
    t++;
    //console.log(t);
    if (t > 200) {
      t=0;
      //cat.visible = false;
      //rectangle.visible=false;
      engine.switch(menuScene);
    }
    rectangle.x ++;
  }
  exit() : void {
    console.log("exit gamescene");
    this.visible = false;
  }
}
