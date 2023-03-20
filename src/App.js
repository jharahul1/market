import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
import './assets/css/style.css';
import Creator_Profile from './components/Creator_Profile';
import Discover_Page from './components/Discover_Page';
import Leader_Board_page from './components/Leader_Board_page';
import Profile_Collection_Card from './components/section-components/Profile_Collection_Cards';
import Profile_Created_Card from './components/section-components/Profile_Created_Cards';
import Settings_page from './components/Settings_page';
import Setting_Form from './components/section-components/Setting_Form';
import Setting_Notification from './components/section-components/Setting_Notification';
import Setting_Wallet from './components/section-components/Setting_Wallet';
import SignUp from './components/SignUp';
import SignUp_Creator_Step3 from './components/section-components/SignUp_Creator_Step3';
import SignUp_Creator_Step4 from './components/section-components/SignUp_Creator_Step4';
import SignUp_Choose_mode from './components/section-components/SignUp_Choose_mode';
import SignUp_Creator_Step5 from './components/section-components/SignUp_Creator_Step5';
import SignUp_Creator_Step6 from './components/section-components/SignUp_Creator_Step6';
import SignUp_Investor_Step3 from './components/section-components/SignUp_Investor_Step3';
import SignUp_Investor_Step4 from './components/section-components/SignUp_Investor_Step4';
import SignUp_Investor_Step5 from './components/section-components/SignUp_Investor_Step5';
import Explore_Page from './components/Explore_Page';
import Unauthorize_Profile_Sec from './components/section-components/Unauthorize_Profile_Sec';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/step2" element={ <SignUp_Choose_mode/> } />
          <Route  path="/step3" element={ <SignUp_Creator_Step3/> } />
          <Route  path="/step4" element={ <SignUp_Creator_Step4/> } />
          <Route  path="/step5" element={ <SignUp_Creator_Step5/> } />
          <Route  path="/step6" element={ <SignUp_Creator_Step6/> } />
          <Route  path="/investor_step3" element={ <SignUp_Investor_Step3/> } />
          <Route  path="/investor_step4" element={ <SignUp_Investor_Step4/> } />
          <Route  path="/investor_step5" element={ <SignUp_Investor_Step5/> } />
          <Route  path="/register" element={ <SignUp/> } />
          <Route  path="/" element={ <Discover_Page/> } />
          <Route  path="/stats" element={ <Leader_Board_page/> } />
          <Route  path="/setting/" element={ <Settings_page/> }>
            <Route path="" element={<Setting_Form/>}/>
            <Route path="wallet" element={<Setting_Wallet/>}/>
            <Route path="notification" element={<Setting_Notification/>}/>
          </Route>
          <Route  path="/Profile/" element={ <Creator_Profile/> }>
            <Route path="Collection" element={<Profile_Collection_Card/>}/>
            <Route path="" element={<Profile_Created_Card/>}/>
          </Route>
          <Route  path="/explore" element={ <Explore_Page/> } />
          <Route  path="/unauth_profile" element={ <Unauthorize_Profile_Sec/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
