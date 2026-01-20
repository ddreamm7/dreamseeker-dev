export class Star {
  constructor(width, height) {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.size = 0.5 + Math.random() * 0.4;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.alpha = 0;
    this.isVisible = false;
  }

  update(width, height, cursorX, cursorY) {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;

    if (!this.isVisible) {
      this.alpha += 0.01;
      if (this.alpha >= 1) {
        this.alpha = 1;
        this.isVisible = true;
      }
    }

    const dx = cursorX - this.x;
    const dy = cursorY - this.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const influenceRadius = 250;
    const influenceStrength = 0.5;

    if (dist < influenceRadius) {
      const factor = (1 - dist / influenceRadius) * influenceStrength;

      this.offsetX = dx * factor;
      this.offsetY = dy * factor;
    } else {
      this.offsetX = 0;
      this.offsetY = 0;
    }
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x + (this.offsetX || 0), this.y + (this.offsetY || 0), this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.restore();
  }
}
