import { config } from './config/env';
import CVContext from './core/cvContext';
import Painting from '@/core/painting';
import Texture from './core/texture';
import { ParticleConfig, ProgramEntrySettings } from './modules';

(async () => {
  const cvContext = new CVContext(ProgramEntrySettings.CANVAS_ID);

  if (!cvContext.getContext()) return; // escape program if context does not exist
  cvContext.fitScreen().setSize();
  const { canvas, ctx } = cvContext;

  const texture = new Texture(canvas, ctx);
  const img = await texture.loadImage(
    config?.IMAGES.PAINTING.TEXTURES as string,
  );
  texture.drawImage(img);
  const pixels = texture.loadImagePixels();

  cvContext.clear().setSize().setColor(); // clear image after getting image data to pixels

  const painting = new Painting(canvas, ctx, pixels);
  const mappedImage = painting.getMappedImage();
  const particleStore = painting.generate(
    canvas,
    ctx,
    ParticleConfig.COUNT,
    mappedImage,
  );

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
  animate();
})();
