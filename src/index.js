import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './Portfolio';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import FloatingDiv from './components/Floatingdiv';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Portfolio />
      <FloatingDiv index={'one'}/>
      <FloatingDiv index={'two'}/>
      <FloatingDiv index={'three'}/>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
