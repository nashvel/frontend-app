"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Component = _interopRequireDefault(require("./Component"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListToggle extends _Component.default {
  constructor(question, styles) {
    super(styles);
    this.styles = styles;
    this.question = question.question;
    this.options = question.options;
    this.selected = new Array(this.options.length);
    this.chosen = 0;
  }

  init() {
    return new Promise(resolve => {
      this.onKeyEnter = () => {
        this.clear();
        resolve({
          value: this.selected.filter(Boolean),
          then: this.options[0].then
        });
      };

      this.onKeyUp = () => {
        this.chosen = this.chosen === 0 ? this.styles.list.wrapToTop ? this.options.length - 1 : 0 : this.chosen - 1;
        this.update();
      };

      this.onKeyDown = () => {
        this.chosen = this.chosen === this.options.length - 1 ? this.styles.list.wrapToTop ? 0 : this.options.length - 1 : this.chosen + 1;
        this.update();
      };

      this.onKeySpace = () => {
        this.selected[this.chosen] = this.selected[this.chosen] ? null : this.options[this.chosen].value;
      };

      this.initialize(this.question);
    });
  }

  update() {
    this.options.forEach((option, index) => {
      this.write(this.ansi.eraseLine);
      let formatted = option.name;
      formatted = formatted.padStart(formatted.length + this.styles.list.paddingLeft, ' '.repeat(this.styles.list.paddingLeft));

      if (index === this.chosen) {
        if (this.styles.caret.icon) {
          this.write(this.styles.caret.color(this.styles.caret.icon.padStart(this.styles.caret.paddingLeft + this.styles.caret.paddingLeft, ' '.repeat(this.styles.caret.paddingLeft))) + ' '.repeat(this.styles.caret.paddingRight) + this.styles.list.selectedColor(option.name));
        } else {
          this.write(this.styles.list.selectedColor(formatted));
        }
      } else if (this.selected[index]) {
        if (this.styles.list.toggle.icon) {
          this.write(this.styles.list.toggle.color(this.styles.list.toggle.icon.padStart(this.styles.list.toggle.paddingLeft + 1, ' '.repeat(this.styles.list.toggle.paddingLeft))) + ' '.repeat(this.styles.list.toggle.paddingRight) + this.styles.list.toggledColor(option.name));
        } else {
          this.write(this.styles.list.toggledColor(formatted));
        }
      } else {
        this.write(this.styles.list.defaultColor(formatted));
      }

      this.newline();
    });
    this.write(this.ansi.cursorUp(this.options.length));
  }

}

var _default = ListToggle;
exports.default = _default;