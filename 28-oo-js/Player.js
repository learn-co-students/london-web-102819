class Player extends Entity {
  constructor(x, y) {
    super(x, y);
    this.score = 0;
    this.color = "blue";
  }

  scorePoints(points) {
    this.score += points;
  }

  update() {
    console.log("player update");
    this.speed.x = 1;
    super.update();
  }
}
