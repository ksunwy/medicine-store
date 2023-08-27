import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/authSlise';
import { IoSettingsOutline } from "react-icons/io5";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { GrHelp } from "react-icons/gr";
import { BiLogOut } from "react-icons/bi";

const User = () => {
  const user = true;
  const [profileOpen, setProfileOpen] = useState(false);

  const close = () => {
    setProfileOpen(null);
  };

  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    dispatch(authActions.logout());
  };
  return (
    <>
      <div className="profile">
        {user ? (
          <>
            <button className="img" onClick={() => setProfileOpen(!profileOpen)}>
              <AiOutlineUser size={26} />
            </button>

            {profileOpen && (
              <div className="openProfile boxItems" onClick={close}>
                <div className="image">
                  <div className="img">
                    <AiOutlineUser size={24} className='icon' />
                  </div>
                  <div className="text">
                    <h4>Eden Smith</h4>
                    <label htmlFor="">Los Angeles, CA</label>
                  </div>
                </div>
                <a href='/login' className="box">
                  <IoSettingsOutline className="icon" />
                  <h4>My account</h4>
                </a>
                <button className="box">
                  <BsBagCheck className="icon" />
                  <h4>My order</h4>
                </button>
                <button className="box">
                  <AiOutlineHeart className="icon" />
                  <h4>Wishlist</h4>
                </button>
                <button className="box">
                  <GrHelp className="icon" />
                  <h4>Help</h4>
                </button>
                <button className="box" onClick={logoutHandler}>
                  <BiLogOut className="icon" />
                  <h4>Log Out</h4>
                </button>
              </div>
            )}
          </>
        ) : (
          <button>My account</button>
        )}
      </div>
    </>
  )
}

export default User;