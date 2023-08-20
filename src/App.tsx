import './App.css';
import SearchPanel from './SearchPanel';
import { Results } from './ResultComponents/Results'
import logo from "./img/Path-of-Exile-Logo.png"
import { useSelector } from "react-redux"
import { getResults,} from "./redux/results-selector"

export type FilterHeadersType = {
  id: string;
  title: string;
  visibility: boolean;
}

function App(props: any) {
  const results = useSelector(getResults)
  let haveResults = false

  // for (let key in results) {
  //   if (results[key] == null) {
  //     continue
  //   }
  //   if (results[key].length !== 0) {
  //     haveResults = true
  //     break
  //   }
  // }
  if (results.length !== 0) {
    haveResults = true
  }

  return (
    <div id='app' className='container-fluid full'>
      <div className="content">
        <div className='wrapper'>
          <div className='logo'><a href=""><img src={logo} alt="" /></a></div>
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
