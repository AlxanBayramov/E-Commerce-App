import React from "react";
import "../Notfound/notfound.scss";
import {useNavigate} from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate()
  return (
    <div className="notfound">
      <div className="loop">
        <aside>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png"
            alt="pic"
          />
        </aside>
        <main>
          <h1>OOOOPPSS...</h1>
          <p>
            Axtardığınız səhifə mövcud deyildir.{" "}
            {/* <em>Cavanligin ezrayil olub</em> */}
          </p>
          <button onClick={()=>navigate(`/`)}>Home-a keç</button>
        </main>
      </div>
    </div>
  );
};

export default Notfound;
