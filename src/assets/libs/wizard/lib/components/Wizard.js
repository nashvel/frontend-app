"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Component = _interopRequireDefault(require("./Component"));

var _List = _interopRequireDefault(require("./List"));

var _ListToggle = _interopRequireDefault(require("./ListToggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO - Add tests
class Wizard extends _Component.default {
  constructor(steps, styles, components) {
    super(styles);
    const styleDefaults = {
      preserveAnswer: true,
      question: {
        color: this.colors.white,
        prefix: '',
        paddingLeft: 0
      },
      caret: {
        icon: '❯',
        color: this.colors.white,
        paddingRight: 1,
        paddingLeft: 0
      },
      list: {
        wrapToTop: false,
        defaultColor: this.colors.gray,
        selectedColor: this.colors.white,
        toggledColor: this.colors.red,
        paddingLeft: 2,
        toggle: {
          icon: '*',
          color: this.colors.red,
          paddingRight: 1,
          paddingLeft: 0
        }
      }
    };
    this.components = {
      list: _List.default,
      listToggle: _ListToggle.default,
      ...components
    };
    this.styles = { ...styleDefaults,
      ...styles
    };
    this.steps = steps;
    this.selections = {};
  }

  async init() {
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    this.write(this.ansi.cursorHide);
    const selections = await this.traverse(this.steps);
    return selections;
  }

  async traverse(section) {
    try {
      return new Promise(async (resolve, reject) => {
        if (!this.validateSection(section)) {
          this.cleanAndExit();
          throw new Error('Invalid configuration');
        }

        const ComponentType = this.components[section.type];

        if (ComponentType) {
          const component = new ComponentType(section, this.styles);
          const response = await component.init();
          this.selections[section.id] = response.value;

          if (section.then && section.then[response.then]) {
            resolve((await this.traverse(section.then[response.then])));
            return null;
          }

          if (!response.then) {
            this.write(this.ansi.cursorShow);
            resolve(this.selections);
            return null;
          }

          if (!section.then) {
            this.write(this.ansi.cursorShow);
            reject(new Error('Invalid configuration'));
            return null;
          }

          this.write(this.ansi.cursorShow);
          reject(new Error('An unknown error occured'));
          return null;
        }

        this.write(this.ansi.cursorShow);
        reject(new Error('Invalid configuration'));
        return null;
      });
    } catch (err) {
      this.write(this.colors.red(err));
      this.cleanAndExit();
      return null;
    }
  }

  validateSection(section) {
    return (section.question || section.options || section.id || section.type) && true;
  }

}

var _default = Wizard;
exports.default = _default;