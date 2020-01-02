class Entity {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = { x: 0, y: 0 };
  }

  move(dir) {
    this.y += dir.y;
    this.x += dir.x;
  }

  render(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, 10, 10);
  }

  update() {
    this.move(this.speed);
  }
}
