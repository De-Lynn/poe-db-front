import './App.css';
import SearchPanel from './SearchPanel';
import { Results } from './Results';
import logo from './img/Path-of-Exile-Logo.png'
import { useSelector } from "react-redux"
import { getBaseWeaponsResults, getUniqueWeaponsResults, getBaseArmourResults, getUniqueArmourResults, 
  getBaseJewelleryResults, getUniqueJewelleryResults, getBaseFlasksResults, getUniqueFlasksResults, 
  getRareWeaponResults, getRareArmourResults, getRareJewelleryResults, getRareFlasksResults, getNameSortAsc, 
  getResults} from "./redux/results-selector"

export type FilterHeadersType = {
  id: string;
  title: string;
  visibility: boolean;
}

function App(props: any) {
  let baseWeaponsResults = useSelector(getBaseWeaponsResults)
  let rareWeaponsResults = useSelector(getRareWeaponResults)
  let uniqueWeaponsResults = useSelector(getUniqueWeaponsResults) 
  let baseArmourResults = useSelector(getBaseArmourResults)
  let rareArmourResults = useSelector(getRareArmourResults)
  let uniqueArmourResults = useSelector(getUniqueArmourResults) 
  let baseJewelleryResults = useSelector(getBaseJewelleryResults)
  let rareJewelleryResults = useSelector(getRareJewelleryResults)
  let uniqueJewelleryResults = useSelector(getUniqueJewelleryResults) 
  let baseFlasksResults = useSelector(getBaseFlasksResults)
  let rareFlasksResults = useSelector(getRareFlasksResults)
  let uniqueFlasksResults = useSelector(getUniqueFlasksResults) 
  const results = useSelector(getResults)
  let haveResults = false

  for (let key in results) {
    if (results[key].length !== 0) {
      haveResults = true
      break
    }
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
            {/* {(baseWeaponsResults.length!==0 || rareWeaponsResults.length!==0 || uniqueWeaponsResults.length!==0 
            || baseArmourResults.length!==0 || rareArmourResults.length!==0 || uniqueArmourResults.length!==0
            || baseJewelleryResults.length!==0 || rareJewelleryResults.length!==0 || uniqueJewelleryResults.length!==0
            || baseFlasksResults.length!==0 || rareFlasksResults.length!==0 || uniqueFlasksResults.length!==0) */}
            {haveResults && <Results />}
          </div>
        </div>
        
      </div>
    </div>
    
  );
}

export default App;
