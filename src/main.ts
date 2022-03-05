import Painting, { MappedImage } from '@/core/painting';
import { config } from './config/env';
import Particle from './core/particle';
import Texture from './core/texture';

(async () => {
  const imageUrl = config?.IMAGES.DOIST.TEXTURES as string;
  const particleCount = 25000;
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null = null;
  let particleStore: Particle[] = [];
  let mappedImage: MappedImage[][] = [];

  async function init() {


    if (canvas.getContext) {
      ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      const texture = new Texture(canvas, ctx);
      const img = await Texture.loadImage(imageUrl);
      texture.draw(img);
      const pixels = texture.loadPixels();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const painting = new Painting(canvas, ctx, pixels);
      mappedImage = painting.getMappedImage();
      particleStore = Particle.generateParticles(
        canvas,
        ctx,
        particleCount,
        mappedImage,
      );
      animate();
    }
  }

  init();

  function animate() {
    (ctx as CanvasRenderingContext2D).globalAlpha = 0.05;
    (ctx as CanvasRenderingContext2D).fillStyle = 'rgb(0,0,0)';
    (ctx as CanvasRenderingContext2D).fillRect(
      0,
      0,
      canvas.width,
      canvas.height,
    );
    for (let i = 0; i < particleStore.length; i++) {
      particleStore[i].update();
      particleStore[i].draw();
    }
    requestAnimationFrame(animate);
  }
})();
