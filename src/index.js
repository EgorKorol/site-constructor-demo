import './index.css';
import { Site } from './js/site';
import { MODELS } from './js/constants';
import { Sidebar } from './js/sidebar';

const site = new Site('#content');

function updateContent(newBlock) {
  MODELS.push(newBlock);
  site.render(MODELS);
}

new Sidebar('#sidebar', updateContent);

site.render(MODELS);
