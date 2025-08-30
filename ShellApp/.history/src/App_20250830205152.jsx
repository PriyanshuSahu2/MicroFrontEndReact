import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShellLayout from './ShellLayout';
import PreRFQPage from 'preRfq/PreRFQPage';
import RFQPage from 'rfq/RFQPage';
import PostRFQPage from 'postRfq/PostRFQPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShellLayout />}>
          <Route path="pre" element={<PreRFQPage />} />
          <Route path="rfq" element={<RFQPage />} />
          <Route path="post" element={<PostRFQPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
