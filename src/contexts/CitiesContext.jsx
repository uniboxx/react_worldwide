/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useReducer } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const CitiesContext = createContext();
const citiesArray = [
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
];

const initialState = {
  cities: citiesArray,
  currentCity: {},
  error: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'city/loaded':
      return { ...state, currentCity: action.payload };
    case 'city/created':
      return {
        ...state,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case 'city/deleted':
      return {
        ...state,
        cities: state.cities.filter(city => city.id !== action.payload),
        currentCity: {},
      };
    case 'rejected':
      return { ...state, error: action.payload };
    default:
      throw new Error('Unknown action type');
  }
}

function CitiesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { cities, currentCity, error } = state;

  function getCity(id) {
    if (+id === currentCity.id) return;
    const city = cities.find(city => city.id === +id);
    try {
      dispatch({ type: 'city/loaded', payload: city });
    } catch {
      dispatch({
        type: 'rejected',
        payload: 'There was an error loading the city',
      });
    }
  }
  function createCity(newCity) {
    try {
      dispatch({ type: 'city/created', payload: newCity });
    } catch {
      dispatch({
        type: 'rejected',
        payload: 'There was an error creating the city',
      });
    }
  }

  function deleteCity(id) {
    try {
      dispatch({ type: 'city/deleted', payload: id });
    } catch {
      dispatch({
        type: 'rejected',
        payload: 'There was an error deleteting the city',
      });
    }
  }

  return (
    <CitiesContext.Provider
      value={{ cities, currentCity, error, getCity, createCity, deleteCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error('CitiesContext was used outside the CitiesProvider!');
  return context;
}

export { CitiesProvider, useCities };
