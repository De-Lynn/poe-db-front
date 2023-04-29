import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
//import store from './redux/redux-store';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let rerenderEntireTree = (state: any) => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App 
        //state={useSelector(state)} dispatch={useDispatch()}
        //state={state} dispatch={store.dispatch.bind(store)} 
        // changeFiltersVisibility={store.changeFiltersVisibility.bind(store)} 
        // changeCategoriesState={store.changeCategoriesState.bind(store)} changeCategoriesInputValue={store.changeCategoriesInputValue.bind(store)} 
        // cleanCategoriesInputValue={store.cleanCategoriesInputValue.bind(store)}
        // changeRangeMinValue={store.changeRangeMinValue.bind(store)} changeRangeMaxValue={store.changeRangeMaxValue.bind(store)} 
        // cleanRangeValues={store.cleanRangeValues.bind(store)} setNewMinInputValue={store.setNewMinInputValue.bind(store)} 
        // setNewMaxInputValue={store.setNewMaxInputValue.bind(store)}
        />
      </Provider>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState())

// store.subscribe( () => {
//   rerenderEntireTree()
// })

// rerenderEntireTree(store.getState())

store.subscribe( () => {
  let state = store.getState()
  rerenderEntireTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
