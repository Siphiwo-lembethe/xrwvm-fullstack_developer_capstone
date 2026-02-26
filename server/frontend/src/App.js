import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Register/Register';

// inside return():
<BrowserRouter>
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
</BrowserRouter>
