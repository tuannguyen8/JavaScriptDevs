//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Content from './components/Content/Content';
import DashboardContent from './components/Dashboard/dashboard';
import ProfileContent from './components/Profiles/profiles';
import Header from './components/Header/header';
import 'bootstrap/dist/css/bootstrap.min.css';


function Landing() {
  return (
      <main>
        <Header/>
        <div className='heading-title'>
          <h2 >Landing</h2>
        </div>
        <Content/>
        
        
      </main>

  );
}

function Dashboard() {
  return (
      <main>
        <Header/>
        <div className='heading-title'>
          <h2>Dashboard</h2>
        </div>
        <DashboardContent/>
      </main>
  );
}

function Profile() {
  return (
    <>
      <main>
        <Header/>
        <div className='heading-title'>
          <h2 >User Profiles</h2>
        </div>
        <ProfileContent/>
      </main>
    </>
  );
}


const App = () => {
	return (
		<div className="App">
		
      <Routes>
        <Route path="/" element={<Landing />} />
        
        <Route path="/profile" element = {<Profile />} />

        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
		</div>
	);
};

export default App;
