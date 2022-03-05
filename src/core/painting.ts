export interface MappedImage {
  brightness: number;
  color: string;
}

export default class Painting {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  pixels: ImageData;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    pixels: ImageData,
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.pixels = pixels;
  }

  getMappedImage(): MappedImage[][] {
    const result = [];

    for (let y = 0; y < this.canvas.height; y++) {
      const row = [];
      for (let x = 0; x < this.canvas.width; x++) {
        const red = this.pixels.data[(y * this.pixels.width + x) * 4];
        const green = this.pixels.data[(y * this.pixels.width + x) * 4 + 1];
        const blue = this.pixels.data[(y * this.pixels.width + x) * 4 + 2];
        const brightness = this.getRelativeBrightness(red, green, blue);
        const color = this.getColor(red, green, blue);
        const cell = {
          brightness,
          color,
        };
        row.push(cell);
      }
      result.push(row);
    }
    return result;
  }

  getRelativeBrightness(red: number, green: number, blue: number): number {
    return (
      Math.sqrt(red ** 2 * 0.299 + green ** 2 * 0.587 + blue ** 2 * 0.114) / 100
    );
  }

  getColor(red: number, green: number, blue: number): string {
    return `rgb(${red},${green},${blue})`;
  }
}
