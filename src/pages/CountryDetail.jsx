import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../utils/Loading";
import EachCountry from "../components/EachCountry";

const CountryDetail = ({ darkMode }) => {
  const { countryName } = useParams();
  const [country, setCountry] = useState({});
  const [isloaded, setIsLoaded] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const data = await response.json();
      setCountry(data[0]);
      setIsLoaded(false);
    };
    setTimeout(() => {
      getData();
    }, 3000);
  }, []);

  return (
    <div>
      {!isloaded && <EachCountry country={country} />}
      {isloaded && <Loading darkMode={darkMode} />}
    </div>
  );
};

export default CountryDetail;
