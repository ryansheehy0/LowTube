import AppCss from './App.module.css';
import { Navbar, VideoPage, VideoView } from './components';

function App() {
  return (
    <div className={AppCss.App}>
      <Navbar/>
      <VideoPage/>
    </div>
  );
}

export default App;
