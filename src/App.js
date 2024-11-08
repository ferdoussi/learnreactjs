import Home from './components/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Html from "./components/page/html";
import Css from "./components/page/css";
import Javascript from "./components/page/javascript";
function App() {
  return (
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/html" element={<Html />} errorElement={'opps'} />
        <Route path="/css" element={<Css />} />
        <Route path="/js" element={<Javascript />} />
      </Routes>
    </Router>
      
      
  );
}

export default App;
