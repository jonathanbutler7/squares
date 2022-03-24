import { render } from 'react-dom';

import { App } from './App';

import { Grommet } from 'grommet';

const rootElement = document.getElementById('root');
render(
  <Grommet>
    <App />
  </Grommet>,
  rootElement
);
