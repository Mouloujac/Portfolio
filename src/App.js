import './App.css';
import Room from './Components/Room/Room'
import Cloud from './Components/Cloud/Cloud'
import Desk from './Components/Room/Desk/Desk';
import Projects from './Components/Room/Projects/Projects';
import AvatarDesk from './Components/Room/AvatarDesk/AvatarDesk';


function App() {
  return (
    <div className="App">
      <Cloud/>
      <Room/>
      
      <Projects />
      
      
    </div>
  );
}

export default App;
