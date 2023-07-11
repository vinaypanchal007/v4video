import './App.css';
import Home from './Components/MainPage.js'
import Editor from './Components/EditPage.js'
import Video from './OtherComponents/RecordVideos.js'
import Podcast from './OtherComponents/RecordPodcast.js'
import Live from './OtherComponents/GoLive.js'
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/Editor' element={<Editor/>} />
          <Route exact path='/Record_Video' element={<Video/>} />
          <Route exact path='/Record_Podcast' element={<Podcast/>} />
          <Route exact path='/Go_Live' element={<Live/>} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;
