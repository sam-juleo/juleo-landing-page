import './App.css';

import Footer from "./view/Footer";
import Header from './view/Header';
import HomeScreen from "./view/HomeScreen";

import TermsAndConditions from './view/TermsAndConditions';
import PrivacyPolicy from './view/PrivacyPolicy';
import DeleteData from './view/Delete';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MeetTheTeam from './view/MeetTheTeam';
import GetInTouch from './view/GetInTouch';
import WhoWeAre from './view/WhoWeAre';


function App() {
    return (
      <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/delete" element={<DeleteData />} />
            <Route path="/about" element={<WhoWeAre />}>
  </Route>
  <Route path="/contact" element={<GetInTouch />} />
      </Routes>
    );
}



export default App;

