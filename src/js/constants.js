import image from '../assets/yoda.jpg';
import { Title, Image, Text, Columns } from './blocks';

export const TYPES = {
  title: 'title',
  text: 'text',
  columns: 'columns',
  image: 'image',
};

export const MODELS = [
  new Title('title', {
    styles: 'background-color: darkred; color: #fff;',
    tag: 'h3',
  }),
  new Image(image, {
    styles: 'max-width: 500px;'
  }),
  new Text('texttext texttext texttext', {
    styles: 'background-color: darkblue; color: #fff;',
  }),
  new Columns(['asd', 'asd', 'das'], {
    styles: 'background-color: lightblue;',
  }),
];
