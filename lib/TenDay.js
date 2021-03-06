import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card.js';

export default function TenDay(props) {
  return (
    <section className='ten-day'>

      {
        props.forecast.map((day, index) => 
          <Card 
            key={index}
            day={day.date.weekday} 
            icon={day.icon_url}
            tenHi={day.high.fahrenheit}
            tenLo={day.low.fahrenheit} /> 
        )
      }
      
    </section>
  );
}

TenDay.propTypes = {
  forecast: PropTypes.array,
  ['forecast.map']: PropTypes.func
};