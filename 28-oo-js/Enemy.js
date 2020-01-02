class Enemy extends Entity {
  static all = [];
  static killAll() {
    this.all = [];
  }
  constructor() {
    super(randomXpos(), randomYpos());
    this.constructor.all.push(this);
    this.color = "red";
  }
}
