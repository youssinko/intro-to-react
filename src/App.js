import Bar from './components/Bar';
import Reviews from './components/Reviews';
import Average from './components/Average';
import Sentiment from './components/Sentiments';
import Visitors from './components/Visitors';

import './App.css';

function App() {
  return (
    <div className="App">
     <Bar/>
     <Reviews />
     <Average />
     <Sentiment />
     <Visitors />
     <div id='empty'></div>
    </div>
  );
}

export default App;
