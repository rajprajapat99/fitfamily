// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Home'
// import { Link } from 'react-router-dom';
// import logo from './Images/logo.svg'
// // import WhatsappLink from './WhatsappLink';
// // import PageNotFound from "./PageNotFound";
// import './App.css';

// export default function App() {
//   return (
//     <>
//     </>
//   );
// }

// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './Home';
// import WhatsappLink from './Components/WhatsappLink';
// import NoMatch from "./Components/NoMatch";
// import './App.css'

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route path="/whatsapplink" element={<WhatsappLink />} />
//         <Route path="*" element={<NoMatch />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


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

