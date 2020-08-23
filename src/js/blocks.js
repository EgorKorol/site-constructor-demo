import { TYPES } from './constants';

class Block {
  constructor(type, value, options) {
    this.type = type;
    this.value = value;
    this.options = options;
  }

  toHTML() {
    throw new Error('The method toHTML have to be realized');
  }
}

export class Title extends Block {
  constructor(value, options) {
    super(TYPES.title, value, options);
  }

  toHTML() {
    const { tag = 'h2', styles } = this.options;

    return `<${tag} style="${styles}">${this.value}</${tag}>`;
  }
}

export class Text extends Block {
  constructor(value, options) {
    super(TYPES.text, value, options);
  }

  toHTML() {
    return `<p style="${this.options.styles}">${this.value}</p>`;
  }
}

export class Image extends Block {
  constructor(value, options) {
    super(TYPES.image, value, options);
  }

  toHTML() {
    const { alt, styles } = this.options;

    return `<img src="${this.value}" style="${styles}" alt="${alt}">`;
  }
}

export class Columns extends Block {
  constructor(value, options) {
    super(TYPES.columns, value, options);
  }

  toHTML() {
    const html = this.value.map((item) => (
      `<div class="col-sm" style="${this.options.styles}">${item}</div>`
    ));

    return `<div class="row">${html.join('')}</div>`;
  }
}
