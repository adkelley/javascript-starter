/* eslint-env node */

import printMe from './print.js';
const {reduce, concat, map} = require ('sanctuary');

function join(list, char) {
  return reduce (concat) ('') (map (x => concat (x) (char)) (list));
}

function component() {
  const element = document.createElement ('div');
  const btn = document.createElement ('button');

  element.innerHTML = join (['Hello', 'Webpack'], ' ');

  btn.innerHTML = 'Click me and check the console';
  btn.onclick = printMe;
  element.appendChild (btn);


  return element;
}

document.body.appendChild (component ());
