import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminMenu from "./adminmenu";

function Products() {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    const url = "http://localhost:9000/api/v1/product/get-product";
    try {
      const { data } = await axios.get(url);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div>
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Products List</h1>
            <div className="d-flex">
              {products.map((p) => {
                return (
                  <>
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <div className="product product-7 text-center">
                        <figure className="product-media">
                          <span className="product-label label-new">New</span>
                          <Link key={p._id} to={`/dashboard/admin/product/${p.slug}`}><img
                            src={`http://localhost:9000/api/v1/product/product-photo/${p._id}`}
                            alt="Product image"
                            className="product-image"
                          /></Link>
                          <div className="product-action-vertical">
                            <a
                              href="#"
                              className="btn-product-icon btn-wishlist btn-expandable"
                            >
                              <span>add to wishlist</span>
                            </a>
                            <a
                              href="popup/quickView.html"
                              className="btn-product-icon btn-quickview"
                              title="Quick view"
                            >
                              <span>Quick view</span>
                            </a>
                            <a
                              href="#"
                              className="btn-product-icon btn-compare"
                              title="Compare"
                            >
                              <span>Compare</span>
                            </a>
                          </div>
                          {/* End .product-action-vertical */}
                          {/* <div className="product-action">
                                      <a className="btn-product btn-cart">
                                        <span>add to cart</span>
                                      </a>
                                    </div> */}
                          {/* End .product-action */}
                        </figure>
                        {/* End .product-media */}
                        <div className="product-body">
                          <div className="product-cat">
                            <a href="#">{p.name}</a>
                          </div>
                          {/* End .product-cat */}
                          <h3 className="product-title">
                            <a href="product.html">
                              {p.description}
                            </a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price"></div>
                          {/* End .product-price */}
                          <div className="ratings-container">
                            <div className="ratings">
                              <div
                                className="ratings-val"
                                style={{ width: "20%" }}
                              />
                              {/* End .ratings-val */}
                            </div>
                            {/* End .ratings */}
                            <span className="ratings-text"></span>
                          </div>
                          {/* End .rating-container */}
                          {/* End .product-nav */}
                        </div>
                        {/* End .product-body */}
                      </div>
                      {/* End .product */}
                    </div>
                    {/* End .col-sm-6 col-lg-4 col-xl-3 */}
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Products;