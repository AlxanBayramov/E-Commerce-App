import React,{useEffect} from "react";
import commerce from "../lib/Ecommerce";
import { useParams, Navigate } from "react-router-dom";


const Auth = () => {
  let params = useParams();
  const id = params.id;
  useEffect(()=>{
    commerce.customer
    .getToken(`${id}`, "save= true")
},[id])
  return (
    <div>
      {(localStorage.getItem("commercejs_customer_token")) && <Navigate to="/" replace={true} />}
      <div style={{minHeight:'50vh'}} className="d-flex flex-column justify-content-center align-items-center">
        <div className="spinner-border" role="status">
        </div>
        <h2 className='mt-3'>Daxil olunur...</h2>
      </div>

    </div>
  );
};

export default Auth;
