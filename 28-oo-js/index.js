const p = new Player(1, 10);

const e1 = new Enemy();
const e2 = new Enemy();
const e3 = new Enemy();
const e4 = new Enemy();

const update = () => {
  ctx.clearRect(0, 0, 1000, 1000);
  p.update();
  Enemy.all.forEach(e => e.update());

  p.render(ctx);
  Enemy.all.forEach(e => e.render(ctx));
  requestAnimationFrame(update);
};

update();
