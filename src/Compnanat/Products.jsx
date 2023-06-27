//import  Product from './Products'
//import {Link, Outlet } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";

import "./Product.css";

function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    function getProduct() {
      axios
        .get("http://localhost:5001/data")
        .then((res) => {
          console.log(res.data);
          setProduct(res.data);
        })
        .catch(() => {
          alert("Invalid data");
        });
    }
    getProduct();
  }, []);

  function Server(data){

    //console.log("server" , data)
    return axios.post("http://localhost:5001/cart" , data)
  }

  const addToCart = (e) => {
    console.log(e);
    
    Server(e).then((res)=>console.log(res)).catch((error)=>{
      console.log(error);
    })
    
  };



  return (
    <div style={{ display:"flex", alignItems:"center",
    justifyContent:"center"}}>
    <div style={{marginTop:"20px" , margin:"10px" ,display:"grid", gridTemplateRows:"500px 600px" , gridTemplateColumns:" 1fr 2fr 3fr"} }>
    

      {product.map((e) => {
        return (

          
              
              <div style={{boxShadow :" 0 0 10px black", width:"350px" , height:"455px" , margin:"20px" , padding:"20px"}}>
               <img src={e.image} width="250px" height="250px" />
               <h3>{e.title}</h3>
               <h4 style={{color:"red"}}>Price:{e.price}</h4>
               <button style={{backgroundColor:"lightgreen" , padding:"7px"}} onClick={()=>addToCart(e)}>Add to cart</button>
             </div>
            
            
          
          // <div style={{boxShadow :" 0 0 10px black", width:"350px" , height:"455px" , margin:"20px" , padding:"20px"}}>
          //   <img src={e.image} width="300px" height="300px" />
          //   <h3>{e.title}</h3>
          //   <h4 style={{color:"red"}}>Price:{e.price}</h4>
          //   <button style={{backgroundColor:"lightgreen" , padding:"7px"}} onClick={()=>addToCart(e)}>Add to cart</button>
          // </div>
        );
      })}
    
    </div>

    </div>
  
  );
}
export default Products;
