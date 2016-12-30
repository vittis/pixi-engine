class MenuScene extends Scene {
  init() : void {
    console.log("init menuscene");
  }
  enter() : void {
    console.log("enter menuscene");
    this.visible = true;

  }
  update() : void {
    console.log("update menuscene");
    t++;
    if (t > 200) {
      t=0;
      engine.switch(gameScene);
    }
    cat.x++;
  }
  exit() : void {
    console.log("exit menuscene");
    this.visible = false;
  }
}
