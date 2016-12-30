class Engine {
  public currentScene : Scene;
  public previousScene : Scene;

  constructor(firstScene : Scene) {
    this.currentScene = firstScene;
    this.currentScene.init();
    this.currentScene.enter();
  }

  switch = (scene : Scene) => {
    this.previousScene = this.currentScene;
    this.currentScene = scene;
    this.previousScene.exit();
    this.currentScene.enter();
  }

  gameloop = () => {
    //if (this.currentScene == null) return;
    this.currentScene.update();
  }

}
