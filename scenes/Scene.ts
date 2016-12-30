abstract class Scene extends PIXI.Container{
    public id : number = -1;
    abstract init(): void;
    abstract enter(): void;
    abstract update(): void;
    abstract exit(): void;
} 
