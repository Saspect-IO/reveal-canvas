import { config } from '@/config/env';

(async () => {
  const brushRadius = 80;
  const imageUrl = config?.IMAGES.DOIST.TEXTURES as string;
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D | null = null;

  async function loadImagePattern(
    ctx: CanvasRenderingContext2D,
    url: string,
  ): Promise<CanvasPattern> {
    const img = new Image();
    img.src = url;
    await img.decode();
    return ctx.createPattern(img, 'no-repeat') as CanvasPattern;
  }

  function portrait(imgPattern: CanvasPattern, brushRadius: number) {
    (ctx as CanvasRenderingContext2D).fillStyle = imgPattern;

    canvas.addEventListener('mousemove', (e) => {
      let r = canvas.getBoundingClientRect();
      let x = e.clientX - r.left;
      let y = e.clientY - r.top;

      (ctx as CanvasRenderingContext2D).beginPath();
      (ctx as CanvasRenderingContext2D).moveTo(x + brushRadius, y);
      (ctx as CanvasRenderingContext2D).arc(x, y, brushRadius, 0, 2 * Math.PI);
      (ctx as CanvasRenderingContext2D).fill();
    });
  }

  async function init() {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    if (canvas.getContext) {
      ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      const imgPattern = await loadImagePattern(ctx, imageUrl);
      portrait(imgPattern, brushRadius);
    }
  }

  await init();
})();
