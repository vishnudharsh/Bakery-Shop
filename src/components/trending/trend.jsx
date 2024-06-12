import axios from "axios";
import { useEffect, useState } from "react";

function Trend() {
  const [products, setProducts] = useState([]);

  //get products
  const getAllProducts = async () => {
    const url = "http://localhost:9000/api/v1/product/get-product";
    try {
      const { data } = await axios.get(url);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [])
  return (
    <>

    </>
  )
}
export default Trend;