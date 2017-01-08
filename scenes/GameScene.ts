var rectangle : PIXI.Graphics;
var cat : PIXI.Sprite;
var cat2 : PIXI.Sprite;

var linha : PIXI.Graphics;
var x=0;
var y;
var q;

var borda : LinhaBorda;
var t=0;

declare var kd : any;

class GameScene extends Scene {
  load() : void {
    PIXI.loader
      .add("images/cat.png")
      .load(this.init.bind(this));
  }
  init() : void {
    y = screenHeight;
    rectangle = new PIXI.Graphics();
    //rectangle.lineStyle(4, 0xFF3300, 1);
    rectangle.beginFill(0x66CCFF);
    //rectangle.moveTo(0,0);
    rectangle.drawRect(0, 0, 64, 64);
    rectangle.endFill();
    rectangle.x = 300;
    rectangle.y =50;
    gameScene.addChild(rectangle);

    cat = new PIXI.Sprite(PIXI.loader.resources["images/cat.png"].texture);
    cat.x = 0;
    cat.y = 50;
    gameScene.addChild(cat);

    cat2 = new PIXI.Sprite(PIXI.loader.resources["images/cat.png"].texture);
    cat2.x = 400;
    cat2.y = 100;
    gameScene.addChild(cat2);


    linha = new PIXI.Graphics();
    linha.lineStyle(35, 0xFF3300, 1);
    //linha.beginFill(0x66CCFF);

    linha.moveTo(0,y);

    //linha.lineTo(x ,400);
    //linha.lineTo(400 ,200);
    //linha.lineTo(200 ,200);

    linha.endFill();

    gameScene.addChild(linha);

    borda = new LinhaBorda(20, 3);

    for (let i = 0; i < borda.linhas.length; i++) {
      gameScene.addChild(borda.linhas[i]);
    }





  kd.W.down(function () {
    cat.y-= 10*smoothie.dt;
  });
  kd.S.down(function () {
    cat.y+= 10*smoothie.dt;
  });
  kd.A.down(function () {
    cat.x-= 10*smoothie.dt;
  });
  kd.D.down(function () {
    cat.x+= 10*smoothie.dt;
  });


    super.init();
  }
  enter() : void {
    if (!this.hasLoaded) return;
    cat.x=600;
    this.visible = true;
  }
  update() : void {
    if (!this.hasLoaded) return;

    for (let i = 0; i < borda.linhas.length; i++) {
      b.hit(cat, borda.linhas[i], true)
      b.hit(cat2, borda.linhas[i], true)
    }
    b.hit(cat, rectangle, true)
    t+= 3*smoothie.dt;
    //borda.linhas[0].lineTo((screenWidth-borda.offset*2)/2, -t);
    //borda.linhas[0].lineTo(screenWidth-borda.offset*2, 0);

  //  borda.linhas[0].lineTo((screenWidth-borda.offset*2)/2, 0);

    //borda.linhas[0].lineTo(0, -50);

    /*if (x> screenWidth) {
      if (y > 0) {
        y-=10*smoothie.dt;
        linha.lineTo(x ,y);
      }
      else {
        q-=10*smoothie.dt;
        linha.lineTo(q ,y);
      }
    }
    else {
      x+=10*smoothie.dt;
      linha.lineTo(x ,y);
      q=x;
    }*/

    //cat.x-= 5* smoothie.dt;
    cat2.y-= 3* smoothie.dt;

  }

  exit() : void {
    this.visible = false;
  }
}
