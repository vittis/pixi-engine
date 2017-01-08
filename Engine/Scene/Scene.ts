abstract class Scene extends PIXI.Container{
    public id : number = -1;
    public hasLoaded : boolean = false;
    init(): void {
      this.hasLoaded = true;
      this.enter();
    }
    abstract load(): void;
    enter(): void {
    }
    update(): void {
    }
    abstract exit(): void;
}
