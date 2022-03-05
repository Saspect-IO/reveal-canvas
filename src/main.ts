import { config } from './config/env';
import CVContext from './core/cvContext';
import Painting from '@/core/painting';
import Texture from './core/texture';
import Particle from './core/particle';
import { ParticleConfig, ProgramEntrySettings } from './modules';

(async () => {
  const cvContext = new CVContext(ProgramEntrySettings.CANVAS_ID);
  cvContext.fitScreen().setColor().setSize().clear();
  const { canvas, ctx } = cvContext;

  const texture = new Texture(canvas, ctx);
  const img = await texture.loadImage(config?.IMAGES.DOIST.TEXTURES as string);
  texture.drawImage(img);
  const pixels = texture.loadImagePixels();

  cvContext.clear();

  const painting = new Painting(canvas, ctx, pixels);
  const particleStore: Particle[] = Particle.generateParticles(
    canvas,
    ctx,
    ParticleConfig.COUNT,
    painting.getMappedImage(),
  );

  function animate() {
    for (const particle of particleStore) {
      particle.update().draw();
    }
    requestAnimationFrame(animate);
  }
  animate();
})();
