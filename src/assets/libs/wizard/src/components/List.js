import Component from './Component';

class List extends Component {
  constructor(question, styles) {
    super(styles);

    this.styles = styles;
    this.question = question.question;
    this.options = question.options;

    this.chosen = 0;
  }

  init() {
    return new Promise(resolve => {
      this.onKeyEnter = () => {
        this.clear();
        resolve(this.options[this.chosen]);
      };

      this.onKeyUp = () => {
        this.chosen =
          this.chosen === 0
            ? this.styles.list.wrapToTop
              ? this.options.length - 1
              : 0
            : this.chosen - 1;
        this.update();
      };

      this.onKeyDown = () => {
        this.chosen =
          this.chosen === this.options.length - 1
            ? this.styles.list.wrapToTop
              ? 0
              : this.options.length - 1
            : this.chosen + 1;
        this.update();
      };

      this.initialize(this.question);
    });
  }

  update() {
    this.options.forEach((option, index) => {
      this.write(this.ansi.eraseLine);

      const formatted = option.name.padStart(
        option.name.length + this.styles.list.paddingLeft,
        ' '.repeat(this.styles.list.paddingLeft),
      );

      if (index === this.chosen) {
        if (this.styles.caret.icon) {
          this.write(
            this.styles.caret.color(
              this.styles.caret.icon.padStart(
                this.styles.caret.paddingLeft + 1,
                ' '.repeat(this.styles.caret.paddingLeft),
              ),
            ) +
              ' '.repeat(this.styles.caret.paddingRight) +
              this.styles.list.selectedColor(option.name),
          );
        } else {
          this.write(this.styles.list.selectedColor(formatted));
        }
      } else {
        this.write(this.styles.list.defaultColor(formatted));
      }
      this.newline();
    });
    this.write(this.ansi.cursorUp(this.options.length));
  }
}

export default List;
