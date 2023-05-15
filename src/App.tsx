import './App.css';
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
    <div className="App">
      <div className='logo'><a href=""><img src={logo} alt="" /></a></div>
      <div className='SearchPanel'><SearchPanel /></div>
      <div><Results /></div>
    </div>
  );
}

export default App;
