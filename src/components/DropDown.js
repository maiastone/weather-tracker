import React, { Component } from 'react';
import { pull, isUndefined } from 'lodash';
import { Link } from 'react-router';

const DropDown = ({ pinnedCities }) => {
  pinnedCities = pull(pinnedCities, undefined); //eslint-disable-line

  return (
    <ul className="settings-city-name">
      {pinnedCities ?
      pinnedCities.map((city, i) =>
        <li key={i}>
          <Link to={`/weather/${city}`}>
            {city}
          </Link>
        </li>,
      )
      : null}
    </ul>
  );
};

module.exports = DropDown;