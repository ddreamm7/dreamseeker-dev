import { Star } from '@/models/Star.js';
import { useWindowSize, useMouse } from '@vueuse/core';

export function useHeroBackground(canvasRef) {
  const maxElements = 500;
  const { width, height } = useWindowSize();
  const { x, y } = useMouse();

  let stars = [];
  let animationFrameId;

  const drawCanvas = () => {
    const canvas = canvasRef.value;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = width.value;
      canvas.height = height.value;
      stars = Array.from({ length: maxElements }, () => new Star(canvas.width, canvas.height));
    };

    resizeCanvas();

    const animateCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update(canvas.width, canvas.height, x.value, y.value);
        star.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animateCanvas);
    };

    animateCanvas();

    window.addEventListener('resize', resizeCanvas);
  };

  const stopCanvas = () => {
    cancelAnimationFrame(animationFrameId);
  };

  return { drawCanvas, stopCanvas };
}
