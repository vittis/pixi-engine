class Engine {
  public currentScene : Scene;
  public previousScene : Scene;

  constructor(firstScene : Scene) {
    this.currentScene = firstScene;
    this.currentScene.load();
  }

  switch = (scene : Scene) => {
    this.previousScene = this.currentScene;
    this.currentScene = scene;
    this.previousScene.exit();
    if (this.currentScene.hasLoaded == false)
      this.currentScene.load();
    this.currentScene.enter();
  }

  gameloop = () => {
    kd.tick();
    this.currentScene.update();
  }

}
