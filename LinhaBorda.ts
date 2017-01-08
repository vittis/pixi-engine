class LinhaBorda {

  public  offset : number;
  public linhas : PIXI.Graphics[] = [];

  constructor(_offset : number, _lineSize) {
    this.offset = _offset;



    let linha1 = new PIXI.Graphics();
    linha1.lineStyle(_lineSize, 0xFFFFFF, 1);
    linha1.x = this.offset;
    linha1.y = screenHeight-this.offset;
    linha1.moveTo(0, 0);
    //linha1.lineTo(screenWidth-this.offset*2, 0);
    linha1.boundsPadding=0;



    let linha2 = new PIXI.Graphics();
    linha2.lineStyle(_lineSize, 0xFFFFFF, 1);
    linha2.x = screenWidth-this.offset;
    linha2.y = this.offset;
    linha2.moveTo(0, 0);
    linha2.lineTo(0, screenHeight-this.offset*2);
    linha2.boundsPadding=0;

    let linha3 = new PIXI.Graphics();
    linha3.lineStyle(_lineSize, 0xFFFFFF, 1);
    linha3.x = this.offset;
    linha3.y = this.offset;
    linha3.moveTo(0, 0);
    linha3.lineTo(screenWidth-this.offset*2, 0);
    linha3.boundsPadding=0;

    let linha4 = new PIXI.Graphics();
    linha4.lineStyle(_lineSize, 0xFFFFFF, 1);
    linha4.x = this.offset;
    linha4.y = this.offset;
    linha4.moveTo(0, 0);
    linha4.lineTo(0, screenHeight-this.offset*2);
    linha4.boundsPadding=0;

    this.linhas.push(linha1);
    this.linhas.push(linha2);
    this.linhas.push(linha3);
    this.linhas.push(linha4);
  }



}
