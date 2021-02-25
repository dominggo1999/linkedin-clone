import React from 'react';
import { IconContext } from 'react-icons';

const iconSettings = {
  color: '#7C7B7C',
  className: 'header-icon',
  size: '23px',
};

const HeaderOption = ({ title, Icon }) => {
  return (
    <div className="header-option">
      <IconContext.Provider value={iconSettings}>
        <Icon />
      </IconContext.Provider>
      <p>{title}</p>
    </div>
  );
};

export default HeaderOption;
