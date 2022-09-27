import React from 'react';
import PropTypes from 'prop-types'
import s from './Filter.module.css'

export default function Filter({ data, value }) {
    console.log(data)
  return (
    <div className={s.div}>
      <ol className={s.ol}>
        {data
          .filter(data => data.symbol.toUpperCase().includes(value))
          .map(({ id, symbol, usd_price}) => (
            <li className={s.li} key={id}>
              <span className={s.span_name} >{symbol}</span>
              <span className={s.span_price} >${usd_price}</span>
            </li>
          ))}
      </ol>
    </div>
  );
}

Filter.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            symbol: PropTypes.string,
            usd_price: PropTypes.number
        })
    ),
    value: PropTypes.string,
}