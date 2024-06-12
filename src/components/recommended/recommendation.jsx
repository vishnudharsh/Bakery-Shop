import axios from "axios";
import { useEffect, useState } from "react";

function Recommendation() {
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
      <div className="container for-you">
        <div className="heading heading-flex mb-3">
          <div className="heading-left">
            <h2 className="title">Recommendation For You</h2>
            {/* End .title */}
          </div>
          {/* End .heading-left */}
          {/* End .heading-right */}
        </div>
        {/* End .heading */}
        <div className="products">
          <div className="row">
            {products.map((p) => {
              return (
                <>
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <span className="product-label label-circle label-sale">
                          Sale
                        </span>
                        <a href="product.html">
                          <img
                            src={`http://localhost:9000/api/v1/product/product-photo/${p._id}`}
                            alt={p.name}
                            className="product-image"
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
                            title="Add to wishlist"
                          />
                        </div>
                        {/* End .product-action */}
                        <div className="product-action">
                          <a
                            href="#"
                            className="btn-product btn-cart"
                            title="Add to cart"
                          >
                            <span>add to cart</span>
                          </a>
                          <a
                            href="popup/quickView.html"
                            className="btn-product btn-quickview"
                            title="Quick view"
                          >
                            <span>quick view</span>
                          </a>
                        </div>
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
                        <div className="product-price">
                          <span className="new-price">$ {p.price}</span>
                          {/* <span className="old-price">Was $349.99</span> */}
                        </div>
                        {/* End .product-price */}
                        <div className="ratings-container">
                          <div className="ratings">
                            <div className="ratings-val" style={{ width: "40%" }} />
                            {/* End .ratings-val */}
                          </div>
                          {/* End .ratings */}
                          <span className="ratings-text">( 4 Reviews )</span>
                        </div>
                        {/* End .rating-container */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#666666" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#ff887f" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#6699cc" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#f3dbc1" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#eaeaec" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-md-4 col-lg-3 */}
                </>
              )
            })}
          </div>
          {/* End .row */}
        </div>
        {/* End .products */}
        <div className="heading-right">
          <a href="#" className="title-link">
            View All Recommendadion <i className="icon-long-arrow-right" />
          </a>
        </div>
      </div>
      {/* End .container */}
      <div className="mb-4" />
      {/* End .mb-4 */}
      <div className="container">
        <hr className="mb-0" />
      </div>
      {/* End .container */}
      <div className="icon-boxes-container bg-transparent">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-rocket" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Free Shipping</h3>
                  {/* End .icon-box-title */}
                  <p>Orders $50 or more</p>
                </div>
                {/* End .icon-box-content */}
              </div>
              {/* End .icon-box */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-rotate-left" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Free Returns</h3>
                  {/* End .icon-box-title */}
                  <p>Within 30 days</p>
                </div>
                {/* End .icon-box-content */}
              </div>
              {/* End .icon-box */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-info-circle" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">Get 20% Off 1 Item</h3>
                  {/* End .icon-box-title */}
                  <p>when you sign up</p>
                </div>
                {/* End .icon-box-content */}
              </div>
              {/* End .icon-box */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}
            <div className="col-sm-6 col-lg-3">
              <div className="icon-box icon-box-side">
                <span className="icon-box-icon text-dark">
                  <i className="icon-life-ring" />
                </span>
                <div className="icon-box-content">
                  <h3 className="icon-box-title">We Support</h3>
                  {/* End .icon-box-title */}
                  <p>24/7 amazing services</p>
                </div>
                {/* End .icon-box-content */}
              </div>
              {/* End .icon-box */}
            </div>
            {/* End .col-sm-6 col-lg-3 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .icon-boxes-container */}
    </>
  )
}
export default Recommendation;