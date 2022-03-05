export default class Texture {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  drawImage(img: HTMLImageElement): void {
    this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
  }

  loadImagePixels(): ImageData {
    return this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
  }

  async loadImage(url: string): Promise<HTMLImageElement> {
    const img = new Image();
    img.src = url;
    await img.decode();
    return img;
  }
}
