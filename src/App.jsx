import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import PageNotFound from './pages/PageNotFound';
import AppLayout from './pages/AppLayout';
import Login from './pages/Login';
import CityList from './components/CityList';
import CountryList from './components/CountryList';
import City from './components/City';
import Form from './components/Form';

function App() {
  const cities = [
    {
      cityName: 'Lisbon',
      country: 'Portugal',
      emoji: '🇵🇹',
      date: '2027-10-31T15:59:59.138Z',
      notes: 'My favorite city so far!',
      position: {
        lat: 38.727881642324164,
        lng: -9.140900099907554,
      },
      id: 73930385,
    },
    {
      cityName: 'Madrid',
      country: 'Spain',
      emoji: '🇪🇸',
      date: '2027-07-15T08:22:53.976Z',
      notes: '',
      position: {
        lat: 40.46635901755316,
        lng: -3.7133789062500004,
      },
      id: 17806751,
    },
    {
      cityName: 'Berlin',
      country: 'Germany',
      emoji: '🇩🇪',
      date: '2027-02-12T09:24:11.863Z',
      notes: 'Amazing 😃',
      position: {
        lat: 52.53586782505711,
        lng: 13.376933665713324,
      },
      id: 98443197,
    },
    {
      cityName: 'Faro',
      country: 'Spain',
      emoji: '🇪🇸',
      date: '2027-07-15T08:22:53.976Z',
      notes: '',
      position: {
        lat: 40.46635901755316,
        lng: -3.7133789062500004,
      },
      id: 17806752,
    },
    {
      cityName: 'Monaco',
      country: 'Germany',
      emoji: '🇩🇪',
      date: '2027-02-12T09:24:11.863Z',
      notes: 'Amazing 😃',
      position: {
        lat: 52.53586782505711,
        lng: 13.376933665713324,
      },
      id: 98443192,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path='react_worldwise/' element={<Homepage />} />
        <Route path='react_worldwise/pricing/' element={<Pricing />} />
        <Route path='react_worldwise/product/' element={<Product />} />
        <Route path='react_worldwise/login/' element={<Login />} />
        <Route path='react_worldwise/app/' element={<AppLayout />}>
          <Route index element={<Navigate replace to='cities' />} />
          <Route path='cities' element={<CityList cities={cities} />} />
          <Route path='cities/:id' element={<City />} />
          <Route path='countries' element={<CountryList cities={cities} />} />
          <Route path='form' element={<Form />} />
        </Route>
        <Route path='react_worldwise/*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
