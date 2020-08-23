import { TYPES } from './constants';
import { Text, Title } from './blocks'

export class Sidebar {
  constructor(selector, update) {
    this.$el = document.querySelector(selector);
    this.update = update;

    this.init();
  }

  init() {
    this.$el.addEventListener('submit', this.addBlock.bind(this));
    this.$el.innerHTML = this.template;
  }

  get template() {
    return [
      block(TYPES.text),
      block(TYPES.title)
    ].join('');
  }

  addBlock(event) {
    event.preventDefault();

    const { name, value, styles } = event.target;
    const Constructor = name === 'text' ? Text : Title;
    const newBlock = new Constructor(value.value, { styles: styles.value });

    this.update(newBlock);

    event.target.value.value = '';
    event.target.styles.value = '';
  }
}

function block(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    <hr />
  `;
}
