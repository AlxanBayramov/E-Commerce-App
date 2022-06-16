import React from "react";
import "../sidebar/_sidebar.scss";

import { GiCancel } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";


import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import commerce from "../../../lib/Ecommerce";
const Sidebar = ({ setShowsidebar, focusInput, setFilterName }) => {
  let navigate = useNavigate();
  const goToLogin = ()=>{
    setShowsidebar(false);
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
    navigate(`/login`)

  }
  const goToRegister = ()=>{
    setShowsidebar(false);
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
    navigate(`/register`)

  }
  const closeSidebarHandler = () => {
    setShowsidebar(false);
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
  };
  const handler = (e) =>{
    setFilterName(e.target.innerHTML);
    setShowsidebar(false)
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
  }
  const categories = useSelector((state)=>state.categories.categories)
  return (
    <div className="sidebar">
      <motion.div
        whileInView={{ x: ["-100%", "0%"] }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="sidebar-header">
          <GiCancel onClick={closeSidebarHandler} className="cancel" />
          <h1 className="title">
            Project <span className="x">X</span>
          </h1>

          <BsSearch onClick={focusInput} className="search" />
        </div>
        <ul className="menu-links">
          {categories.map((item, i) => (
            <li key={i} className="menu-link">
              <Link onClick={handler}
                className="router-link-nav"
                to={`/products/${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
              {["Hamısı", "Apple", "Redmi", "Aksesuarlar"].includes(
                item.name
              ) && <AiOutlineArrowRight />}
            </li>
          ))}
        </ul>
        <div className="sidebar-footer">
          <button onClick={goToLogin} className={commerce.customer.isLoggedIn() ? 'd-none' : 'login'}>Daxil ol</button>
          <button onClick={goToRegister} className={commerce.customer.isLoggedIn() ? 'd-none' : 'registration'}>Qeydiyyat</button>
        </div>
      </motion.div>
    </div>
  );
};
export default Sidebar;
