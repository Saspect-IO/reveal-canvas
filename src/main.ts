import { config } from './config/env';
import CVContext from './core/cvContext';
import Painting from '@/core/painting';
import Texture from './core/texture';
import { ProgramEntrySettings } from './modules';

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
  const particleStore = painting.generate();

  function animate() {
    for (const particle of particleStore) {
      particle
        .update(
          particle.xBase,
          particle.yBase,
          painting.mouseX,
          painting.mouseY,
          painting.mouseBufferRadius,
        )
        .draw();
    }
    requestAnimationFrame(animate);
  }
  animate();
})();
