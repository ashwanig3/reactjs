import React from 'react';

function Header(props) {
  const {onSubmit, onChange, value, onClick} = props;
  console.log(value);
  return (
    <header>
      <div className="header-wrapper">
        <h1 className="heading">Weather Search</h1>
      </div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={value} className="search-value" placeholder="Search" />
      </form>
    </header>
  )
}

export default Header;