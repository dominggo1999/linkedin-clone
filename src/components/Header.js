import React from 'react';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { MdSupervisorAccount, MdChat, MdNotifications } from 'react-icons/md';
import { GiSuitcase } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import HeaderOption from './HeaderOption';
import Avatar from './Avatar';

const headerOptions = [
  {
    title: 'Home',
    Icon: AiFillHome,
    id: 1,
  },
  {
    title: 'My Network',
    Icon: MdSupervisorAccount,
    id: 2,
  },
  {
    title: 'Jobs',
    Icon: GiSuitcase,
    id: 3,
  },
  {
    title: 'Messaging',
    Icon: MdChat,
    id: 4,
  },
  {
    title: 'Notifications',
    Icon: MdNotifications,
    id: 5,
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__left">
          <div className="linkedin__logo">
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/174/174857.svg?token=exp=1614270483~hmac=1213252f74179133583dd568b536ce14"
              alt="Linkedin"
              style={{
                width: '35px',
                height: '35px',
              }}
            />
          </div>
          <div className="search-bar">
            <IconContext.Provider value={{ className: 'search-icon' }}>
              <AiOutlineSearch />
            </IconContext.Provider>
            <input
              type="text"
              className="header-input-bar"
            />
          </div>
        </div>

        <div className="header__right">
          {
          headerOptions.map(({ id, ...restProps }) => {
            return (
              <HeaderOption
                key={id}
                {...restProps}
              />
            );
          })
        }
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Header;
