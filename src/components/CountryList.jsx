/* eslint-disable react/prop-types */
import styles from './CountryList.module.scss';
import CountryItem from './CountryItem';
import Message from './Message';
import { useCities } from '../contexts/CitiesContext';

function CountryList() {
  const { cities } = useCities();
  if (!cities.length)
    return (
      <Message message='Add your first city by clicking on a city on the map' />
    );

  const countries = cities.reduce(
    (acc, cur) =>
      acc.some(el => el.country === cur.country)
        ? acc
        : [...acc, { country: cur.country, emoji: cur.emoji }],
    []
  );

  return (
    <ul className={styles.countryList}>
      {countries.map(country => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
