import { MappedImage } from './painting';

export default class Particle {
  xAxis: number;
  yAxis: number;
  xCoord: number;
  yCoord: number;
  fallingSpeed: number;
  velocity: number;
  size: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  mappedImage: MappedImage[][];

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    mappedImage: MappedImage[][],
  ) {
    this.xAxis = Math.random() * canvas.width;
    this.yAxis = 0;
    this.xCoord = Math.floor(this.xAxis); // ensure whole numbers for location index
    this.yCoord = Math.floor(this.yAxis); // ensure whole numbers for location index
    // particle falling speed calculated based on brightness of background
    this.fallingSpeed = 0;
    this.velocity = Math.random() * 3.5;
    this.size = Math.random() * 1.5 + 1;
    this.canvas = canvas;
    this.ctx = ctx;
    this.mappedImage = mappedImage;
  }

  // calculate particle position for each frame before draw
  update() {
    this.xCoord = Math.floor(this.xAxis); // ensure whole numbers for location index
    this.yCoord = Math.floor(this.yAxis); // ensure whole numbers for location index
    this.yAxis += this.velocity;
    if (this.yAxis >= this.canvas.height) {
      this.yAxis = 0;
      this.xAxis = Math.random() * this.canvas.width;
    }

    return this;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.mappedImage[this.yCoord][this.xCoord].color;
    this.ctx.arc(this.xAxis, this.yAxis, this.size, 0, Math.PI * 2);
    this.ctx.fill();
    return this;
  }
}
