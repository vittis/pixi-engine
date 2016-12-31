abstract class Scene extends PIXI.Container{
    public id : number = -1;
    public hasLoaded : boolean = false;
    init(): void {
      this.hasLoaded = true;
      console.log("init scene");
    }
    abstract load(): void;
    abstract enter(): void;
    abstract update(): void;
    abstract exit(): void;
}
