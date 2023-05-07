import React, { useState } from 'react';
import './Header.css';
function showCryptos(setShowForm) {
  const cryptos = ["Bitcoin", "Ethereum", "Binance Coin", "Cardano", "XRP", "Dogecoin", "Polkadot", "Uniswap", "Litecoin", "Chainlink", "Stellar", "VeChain", "Polygon", "Theta Network", "Filecoin", "Solana", "Cosmos", "Tezos", "Aave", "Compound"];
  
  const message = document.createElement('div');
  message.textContent = `Available cryptocurrencies:\n${cryptos.join('\n')}`;
  message.style.position = 'fixed';
  message.style.bottom = '10px';
  message.style.right = '10px';
  message.style.backgroundColor = '#ffffff';
  message.style.padding = '10px';
  message.style.borderRadius = '5px';
  message.style.boxShadow = '0px 0px 5px 0px rgba(0,0,0,0.5)';
  message.style.animation = 'fade-in 0.5s ease-in-out';
  document.body.appendChild(message);
  setShowForm(true);
  // Remove message after 5 seconds
  setTimeout(() => {
    message.style.animation = 'fade-out 0.5s ease-in-out';
    setTimeout(() => {
      document.body.removeChild(message);
    }, 500);
  }, 5000);
  
}


function Header() {
  const [showNav, setShowNav] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you, ${name}!Connecting to server ${email}`);
    setShowForm(false);
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className={`nav-list ${showNav ? 'mobile-show' : ''}`}>
          <button id="transacton" onClick={() => showCryptos(setShowForm)}>Connect to wallet</button>
        </ul>
        <button className="nav-toggle" onClick={toggleNav}>
          {showNav ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          Menu
        </button>
      </nav>
      {showForm && (
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name-input">Name:</label>
            <input id="name-input" type="text" value={name} onChange={handleNameChange} />
            <label htmlFor="email-input">Email:</label>
            <input id="email-input" type="email" value={email} onChange={handleEmailChange} />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </header>
  );
}

export default Header;
