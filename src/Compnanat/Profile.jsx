import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/cart")
      .then((res) => {
        console.log(res.data);
        setCart(res.data);
      })
      .catch(() => {
        alert("Invalid data");
      });
  },[]);

  function deleteitem(index){

    axios.delete(`http://localhost:5001/cart/${index}`).then((res)=>{

    var filterdata = cart.filter((e , i)=>{
      return e.id!=index

  });

  setCart(filterdata);
      

    }).catch((error)=>{
      console.log(error)
    })

    
    
    
   
    

}

  return (
    <>
      <div style={{ marginTop: "20px", margin: "10px" , display:"flex", alignItems:"center",
              justifyContent:"center" }}>

        <div>
          
        {
        
        cart.map((e)=>{
          return(
            <div style={{
              boxShadow: " 0 0 10px black",
              width: "900px",
              height: "300px",
              margin: "20px",
              padding: "20px"
              
            }}>
              <table>

                <tr >
                 
                  <td>
                  <img src={e.image} width="300px" height="300px" />
                  </td>
                  <td>
                  <h3>Title:{e.title}</h3>
                  <p><b>Decription:</b>{e.description}</p>
                  <h4 style={{ color: "red" }}>Price:{e.price}</h4>
                  <button style={{backgroundColor:"lightgreen" , padding:"7px"}} onClick={()=>deleteitem(e.id)}>Remove</button>

                  </td>
                  
                </tr>
              </table>
            </div>

          );
            
        }
        
        )
      }

      </div> 
        
      </div>
    </>
  );
}
export default Profile;
