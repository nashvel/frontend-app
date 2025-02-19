import Wizard from '../../lib';

import questions from './questions';

const wizard = new Wizard(questions);
wizard.init().then(selections => {
  console.log(selections);
  process.exit();
});
