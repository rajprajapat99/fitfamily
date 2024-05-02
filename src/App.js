import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css'
import Home from './Home'
import WhatsappLink from './Components/WhatsappLink'
import NoMatch from "./Components/NoMatch";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/whatsapplink" element={<WhatsappLink />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

