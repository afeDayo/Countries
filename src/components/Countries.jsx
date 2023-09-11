import React from "react";
import { Link } from "react-router-dom";

const Countries = ({ allCountries }) => {
  return (
    <div className="all-countries bg-main-color py-5 px-5 custom-text-white text-start">
      {allCountries.map((country) => {
        const { name, population, region, capital, flags } = country;
        return (
          <div key={name.common} className="bg-elements">
            <Link
              to={`/${name.common}`}
              key={name.common}
              className="rounded-2 text-decoration-none custom-text-white"
            >
              <img
                className="w-100 rounded-top"
                src={flags.png}
                alt={flags.alt}
              />
              <div className="d-flex flex-column p-5 gap-1">
                <h2 className="m-0 mb-3">{name.common}</h2>
                <p className="m-0">
                  <b>Population:</b> {population.toLocaleString()}
                </p>
                <p className="m-0">
                  <b>Region:</b> {region}
                </p>
                <p className="m-0">
                  <b>Capital: </b> {capital ? capital[0] : name.common}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Countries;
// read on Object.key and Object.values to fetch data from an AP1
