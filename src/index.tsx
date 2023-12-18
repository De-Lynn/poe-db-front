import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import store from './redux/redux-store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let rerenderEntireTree = (state: any) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState())

store.subscribe( () => {
  let state = store.getState()
  rerenderEntireTree(state)
})

reportWebVitals();
