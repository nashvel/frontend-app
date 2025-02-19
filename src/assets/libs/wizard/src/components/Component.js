import ansiEscapes from 'ansi-escapes';
import chalk from 'chalk';

import keys from '../constants/keys';

class Component {
  constructor(styles) {
    this.styles = styles;

    this.ansi = ansiEscapes;
    this.colors = chalk;
    this.keys = keys;

    // Event Handlers
    this._onKeyHandler = null;

    this._onKeyEnter = null;
    this._onKeyArrowUp = null;
    this._onKeyArrowDown = null;
    this._onKeyArrowLeft = null;
    this._onKeyArrowRight = null;
    this._onKeySpace = null;
  }

  // Accessors

  /** When the Enter key is pressed. */
  set onKeyEnter(handler) {
    this._onKeyEnter = handler;
  }

  /** When the Up arrow is pressed.  */
  set onKeyUp(handler) {
    this._onKeyArrowUp = handler;
  }

  /** When the Down arrow is pressed.  */
  set onKeyDown(handler) {
    this._onKeyArrowDown = handler;
  }

  /** When the Left arrow is pressed.  */
  set onKeyLeft(handler) {
    this._onKeyArrowLeft = handler;
  }

  /** When the Right arrow is pressed.  */
  set onKeyRight(handler) {
    this._onKeyArrow = handler;
  }

  /** When the Space key is pressed. */
  set onKeySpace(handler) {
    this._onKeySpace = handler;
  }

  // Component Methods

  /** Write text to screen. */
  write(text) {
    process.stdout.write(`\r${text}`);
  }

  /** Write a newline to the screen. */
  newline() {
    this.write('\n');
  }

  /** Clear a components output. */
  clear() {
    if (this.styles.preserveQuestion) {
      this.write(this.ansi.cursorUp());
    }
    this.write(this.ansi.eraseDown);
  }

  /** Exit gracefully. */
  cleanAndExit() {
    this.write(this.ansi.cursorShow);
    process.exit();
  }

  /** Throw error */
  throw(err) {
    throw err;
  }

  /**
   * Initializes the component.
   * Registers event listeners and prints question.
   * @param {string} question
   */
  initialize(question) {
    this.write(this.ansi.eraseLine);
    this.write(this.styles.question.color(question));
    this.newline();
    this.update();

    this._onKeyHandler = this.onKeyHandler.bind(this);
    process.stdin.addListener('data', this._onKeyHandler);
  }

  onKeyHandler(key) {
    switch (key) {
      case this.keys.KEY_UP:
        return this._onKeyArrowUp ? this._onKeyArrowUp() : null;
      case this.keys.KEY_DOWN:
        return this._onKeyArrowDown ? this._onKeyArrowDown() : null;
      case this.keys.KEY_LEFT:
        return this._onKeyArrowLeft ? this._onKeyArrowLeft() : null;
      case this.keys.KEY_RIGHT:
        return this._onKeyArrowRight ? this._onKeyArrowRight() : null;
      case this.keys.KEY_SPACE:
        return this._onKeySpace ? this._onKeySpace() : null;
      case this.keys.KEY_ENTER:
      case this.keys.KEY_RETURN:
        process.stdin.removeListener('data', this._onKeyHandler);
        return this._onKeyEnter
          ? this._onKeyEnter()
          : this.throw(new Error('Keypress Unhandled'));
      case this.keys.CTRL_C:
        this.cleanAndExit();
        return null;
      default:
        return null;
    }
  }
}

export default Component;
