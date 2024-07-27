import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='react_worldwise/' element={<Homepage />} />
        <Route path='react_worldwise/pricing/' element={<Pricing />} />
        <Route path='react_worldwise/product/' element={<Product />} />
        <Route path='react_worldwise/login/' element={<Login />} />
        <Route path='react_worldwise/app/' element={<AppLayout />}>
          <Route index element={<p>List of cities</p>} />
          <Route path='cities' element={<p>List of cities</p>} />
          <Route path='countries' element={<p>countries</p>} />
          <Route path='form' element={<p>Form</p>} />
        </Route>
        <Route path='react_worldwise/*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
