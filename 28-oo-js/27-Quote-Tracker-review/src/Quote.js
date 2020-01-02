class Quote {
  static all = [];
  constructor(quoteObject) {
    this.quote = quoteObject;
    this.element = document.createElement("li");
    this.element.classList.add("quote-card");
    this.constructor.all.push(this);
  }

  celebrate() {
    this.element.classList.add("celebrate");
  }

  render() {
    this.element.innerHTML = `
      <blockquote class="blockquote" data-id="${this.quote.id}">
          <p class="mb-0">${this.quote.quote}</p>
          <footer class="blockquote-footer">${this.quote.author}</footer>
          <br>
          <button class='btn-success'>Likes: <span>${
            this.quote.likes ? this.quote.likes.length : "0"
          }</span></button>
          <button class='btn-danger'>Delete</button>
      </blockquote>
      `;
    return this.element;
  }
}
