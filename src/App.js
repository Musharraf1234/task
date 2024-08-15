import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Courses from './component/Courses';
import LearningTime from './component/TimeSpentChar';
import Nav from './component/Nav';
import { useState } from 'react';
import Sildenav from './component/Sildenav';
import Profile from './component/Profile';
import Dashboard from './component/Deshboard'
import { BrowserRouter , Routes ,Router, Route } from 'react-router-dom';
import Classes from './RoutingComponent/Classes';
import Settings from './RoutingComponent/Settings';
import Chtats from './RoutingComponent/Chtats';
import Resources from './RoutingComponent/Resources';
import LearningPlan from './RoutingComponent/LearningPlan';

function App() {
  const [sidebar , setsidebar] = useState(false)
  const handleclick = () => {
    setsidebar(!sidebar)
  }
  return (
    <div class="d-flex w-100">
   
    <div className="App">
     
      
      
      <BrowserRouter>
      <Nav handleclick={handleclick}/>
      {sidebar && <Sildenav handleclick={handleclick}/>}
      <Routes>
      <Route path="/" element={<Dashboard />}/>
      <Route path="/classes" element={<Classes />}/>
      <Route path="/Chat" element={<Chtats />} />
      <Route path="/settings" element={<Settings/>} />
      <Route path="/resources" element={<Resources/>} />
      <Route path="/Learningplan" element={<LearningPlan/>} />

      
      </Routes>
      </BrowserRouter>
  
   

    </div>
    <Profile/>
    </div>
  );
}

export default App;
