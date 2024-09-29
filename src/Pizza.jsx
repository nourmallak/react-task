import {useEffect ,useState } from "react";
export default function Pizza()
{
    const [products, setProducts]=useState([]);
  async function getProducts() {
    const response=await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    const data = await response.json();
    setProducts(data.recipes);
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container">
      {products?.length ==0?<h2>Loading...</h2>:
        <div className="row">
      {
        products?.map((product)=>(
          <div className="col-lg-4 card">
            <div className="product">
              <h2>{product.title}</h2>
              <img src={`${product.image}`} className="img-fluid"/>
            </div>
          </div>
        )
        )
      }
        </div>
      }
      
      
    </div>
  )
}