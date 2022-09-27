import React, { Component } from 'react';
import Logo from './Logo/Logo';
import Filter from './Filter/Filter';
import data from './data.json';
import s from './Crypto.module.css'

class Crypto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({ inputValue: value });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div className={s.div}>
        <Logo title={'BINANCE NFT'} />
        <input
          className={s.input}
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={this.handleChange}
        />
        <Filter data={data.data} value={inputValue} />
      </div>
    );
  }
}

export default Crypto;
