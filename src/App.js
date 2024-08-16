import logo from './logo.svg';
import './App.css';
import './MediaQuery.css';
import Nav from './component/Nav';
import { useState , useEffect } from 'react';
import Sildenav from './component/Sildenav';
import Profile from './component/Profile';
import Dashboard from './component/Deshboard'
import { BrowserRouter , Routes ,Router, Route } from 'react-router-dom';
import Classes from './RoutingComponent/Classes';
import Settings from './RoutingComponent/Settings';
import Chtats from './RoutingComponent/Chtats';
import Resources from './RoutingComponent/Resources';
import LearningPlan from './RoutingComponent/LearningPlan';
import ProgressBar from './component/ProgressBar';

function App() {
  const [sidebar , setsidebar] = useState(false)
  const [loading, setLoading] = useState(true);
  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const handleclick = () => {
    setsidebar(!sidebar)
  }
  return (
    <div class="d-flex w-100">
   
    <div className="App">
     
      
      
      <BrowserRouter>
      <Nav handleclick={handleclick}/>
      {sidebar && <Sildenav handleclick={handleclick}/>}
      {loading ? (
            <ProgressBar duration={2000} />
          ) : (
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/Chat" element={<Chtats />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/Learningplan" element={<LearningPlan />} />
            </Routes>
          )}
      </BrowserRouter>
  
   

    </div>
    <Profile/>
    </div>
  );
}

export default App;
