import { getVectorComponents, normalize } from '@/modules';

export default class Particle {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  color: string;
  brightness: number;
  xPosition: number;
  yPosition: number;
  xBase: number;
  yBase: number;

  velocity: number;
  size: number;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    color: string,
    brightness: number,
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.xPosition = x;
    this.yPosition = y;
    this.xBase = this.xPosition;
    this.yBase = this.yPosition;
    this.color = color;
    this.brightness = brightness;
    this.velocity = Math.random() * 10 + 2;
    this.size = 2;
  }

  // calculate particle position for each frame before draw
  update(
    xPosition: number,
    yPosition: number,
    mouseX: number,
    mouseY: number,
    mouseBufferRadius: number,
  ) {
    const { dx, dy, magnitude } = getVectorComponents(
      xPosition,
      yPosition,
      mouseX,
      mouseY,
    );

    const unitVectorX = dx / magnitude;
    const unitVectorY = dy / magnitude;
    const scale = normalize(magnitude, mouseBufferRadius); // scale magnitude between 0 and 1
    const forceDirectionX = unitVectorX * scale * this.velocity;
    const forceDirectionY = unitVectorY * scale * this.velocity;

    if (magnitude < mouseBufferRadius + this.size) {
      this.xPosition -= forceDirectionX;
      this.yPosition -= forceDirectionY;
    } else {
      if (this.xPosition !== this.xBase) {
        this.xPosition -= this.xPosition - this.xBase;
      } else if (this.yPosition !== this.yBase) {
        this.yPosition -= this.yPosition - this.yBase;
      }
    }

    return this;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.xPosition, this.yPosition, this.size, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fill();
    return this;
  }
}
