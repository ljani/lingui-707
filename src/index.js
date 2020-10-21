import React from 'react';
import ReactDOM from 'react-dom';
import { t } from "@lingui/macro";
import { setup } from "./lingui";

const i = setup();

const key1 = t`Hello`;
console.log("Key1:", key1)
const translated1 = i._(t`Hello`);
console.log("Translated1:", translated1);

const name = Math.random() > 0.5 ? "Foo" : "Bar";

const key2 = t`My name is ${name}`;
console.log("Key2:", key2);
const translated2 = i._(key2);
console.log("Translated2:", translated2);

const vars = i._(t`My name is ${name}`);
console.log(vars);

ReactDOM.render(
  <h1>See developer tools</h1>,
  document.getElementById('root')
);

