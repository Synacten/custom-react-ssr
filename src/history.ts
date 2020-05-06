import { createBrowserHistory } from 'history';

// eslint-disable-next-line import/no-mutable-exports
let history;

if (typeof document !== 'undefined') {
  history = createBrowserHistory();
}

export { history };
