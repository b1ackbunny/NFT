import React, { useState } from 'react';
import Logo from './Logo/Logo';
import s from './Crypto.module.css';

export function Crypto({data}) {
  const [query, setQuery] = useState('')

  return (
    <div className={s.div}>
      <Logo title={'BINANCE NFT'} />

      <input
        className={s.input}
        type="text"
        placeholder="Search..."
        onChange={e => setQuery(e.currentTarget.value)}
      />
      <div className={s.div}>
        <ol className={s.ol}>
        {data.filter(data => data.symbol.toUpperCase().includes(query)).map(({id, symbol, usd_price}) => (
                      <li className={s.li} key={id}>
                      <span className={s.span_name}>{symbol}</span>
                      <span className={s.span_price}>${usd_price.toFixed(2)}</span>
                    </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
