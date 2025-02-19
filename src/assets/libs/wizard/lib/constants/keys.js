"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const ESC = '\u001B';
var _default = {
  KEY_UP: `${ESC}[A`,
  KEY_DOWN: `${ESC}[B`,
  KEY_RIGHT: `${ESC}[C`,
  KEY_LEFT: `${ESC}[D`,
  KEY_ENTER: '\u2324',
  KEY_RETURN: '\u000D',
  KEY_SPACE: '\u0020',
  CTRL_C: '\u0003'
};
exports.default = _default;