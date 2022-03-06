import { WindowEvents } from '@/modules';
import Particle from './particle';

export interface MappedImage {
  brightness: number;
  color: string;
}

export default class Painting {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  pixels: ImageData;
  xCoord: number;
  yCoord: number;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    pixels: ImageData,
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.pixels = pixels;
    this.xCoord = 0;
    this.yCoord = 0;
    this.canvas.addEventListener(WindowEvents.MOUSE_MOVE, (e: MouseEvent) =>
      this.getCoords(e),
    );
  }

  getCoords(e: MouseEvent) {
    this.xCoord = e.clientX;
    this.yCoord = e.clientY;
  }

  generate(): Particle[] {
    const result = [];

    for (let y = 0; y < this.canvas.height; y++) {
      for (let x = 0; x < this.canvas.width; x++) {
        const red = this.pixels.data[(y * this.pixels.width + x) * 4];
        const green = this.pixels.data[(y * this.pixels.width + x) * 4 + 1];
        const blue = this.pixels.data[(y * this.pixels.width + x) * 4 + 2];
        const brightness = this.getRelativeBrightness(red, green, blue);
        const color = this.getColor(red, green, blue);

        result.push(
          new Particle(this.canvas, this.ctx, x, y, color, brightness),
        );
      }
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
