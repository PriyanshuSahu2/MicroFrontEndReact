import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PreRFQPage from 'preRfq/PreRFQPage';
import RFQPage from 'rfq/RFQPage';
import PostRFQPage from 'postRfq/PostRFQPage';
import ShellLayout from './components/Layout';
import "@mantine/core/styles.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShellLayout />}>
        <Route path="pre/*" element={<PreRFQPage />} />
          <Route path="rfq/*" element={<RFQPage />} />
          <Route path="post/*" element={<PostRFQPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
