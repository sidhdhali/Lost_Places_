

import 'tw-elements-react/dist/css/tw-elements-react.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ContentCard } from './components/ContentCard';

import { Routes, Route } from 'react-router-dom';

import Singleblogone from './components/Singleblog1.jsx';

function App() {
  return (
    <div className="bg-[url('./src/assets/img_5124.jpeg')] bg-no-repeat bg-cover">

      <Header />
      {/* <THÜRINGERHAUS /> */}
      <Routes>
        <Route path="/" element={<ContentCard />} />
        <Route path="/places/:id" element={<Singleblogone />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
