import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />
      <Exhibit name="exhibit1" />
      <Exhibit name="exhibit2" />
      <Exhibit name="exhibit3" />
    </div>
  );
}

export default App;
