import './App.css';
import SearchPanel from './components/SearchPanel';
import { Results } from './components/ResultComponents/Results'
import logo from "./img/Path-of-Exile-Logo.png"
import { useSelector } from "react-redux"
import { getResultsCount } from "./redux/results-selector"

export type FilterHeadersType = {
  id: string;
  title: string;
  visibility: boolean;
}

function App(props: any) {
  const resultsCount = useSelector(getResultsCount)
  let haveResults = false

  if (resultsCount) {
    haveResults = true
  }

  return (
    <div id='app' className='container-fluid full'>
      <div className="content">
        <div className='wrapper'>
          <div className='logo'>
            <a href="">
              <img src={logo} alt="" />
            </a>
          </div>
          <div id='trade'>
            <div className='top'>
              <SearchPanel />
            </div>
            <div className='clear'></div>
            {haveResults && <Results />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
