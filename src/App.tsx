import { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import SearchPanel from './SearchPanel';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Results } from './Results';
import { BrowserRouter } from 'react-router-dom';

export type FilterHeadersType = {
  id: string;
  title: string;
  visibility: boolean;
}

function App(props: any) {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
        <SearchPanel //state={useSelector(state => state)} dispatch={useDispatch()}
          // state={props.state} dispatch={props.dispatch}
          // changeFiltersVisibility={props.changeFiltersVisibility}
          // changeCategoriesState={props.changeCategoriesState} changeCategoriesInputValue={props.changeCategoriesInputValue} cleanCategoriesInputValue={props.cleanCategoriesInputValue}
          // changeRangeMinValue={props.changeRangeMinValue} changeRangeMaxValue={props.changeRangeMaxValue} cleanRangeValues={props.cleanRangeValues}
          // setNewMinInputValue={props.setNewMinInputValue} setNewMaxInputValue={props.setNewMaxInputValue}
        />
      {/* </BrowserRouter> */}
      
      <Results />
    </div>
  );
}

export default App;
