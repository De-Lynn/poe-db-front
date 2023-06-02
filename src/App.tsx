//import './App.css';
import SearchPanel from './SearchPanel';
import { Results } from './Results';
import logo from './img/Path-of-Exile-Logo.png'

export type FilterHeadersType = {
  id: string;
  title: string;
  visibility: boolean;
}

function App(props: any) {
  return (
    <div id='app' className='container-fluid full'>
      <div className="content">
        <div className='wrapper'>
          {/* <div className='logo'><a href=""><img src={logo} alt="" /></a></div> */}
          <div id='trade'>
            <div className='top'>
              <SearchPanel />
            </div>
            
          </div>
          <div><Results /></div>
        </div>
        
      </div>
    </div>
    
  );
}

export default App;
