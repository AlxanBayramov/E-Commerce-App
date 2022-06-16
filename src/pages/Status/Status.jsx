import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkstatus } from "../../Features/RegisterStatus";
import { useNavigate,Navigate } from "react-router-dom";
import {ImUserCheck} from 'react-icons/im'
import './status.scss'
const Status = () => {
  const status = useSelector((state) => state.registerStatus.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handler = () => {
    dispatch(checkstatus(null));
    navigate("/login");
  };
  const renderComponent = () => {
    return (
      <div className='register-status'>
        <ImUserCheck className='register-status-icon'/>
        <h1 className='register-status-text'>Hesab uğurla yaradıldı.</h1>
        <button className='register-status-btn' onClick={handler}>Giriş səhifəsinə keç</button>
      </div>
    );
  };
  return <>{status  ?  renderComponent() :< Navigate to="/notfound" replace={true} />}</>;
};

export default Status;
