import { useSearch } from "../components/context/search";


function SearchItem() {
  const [values, setValues] = useSearch();
  return (
    <>
      <div className="container">
        <div className="text-center">
          <h3>Search Results</h3>
          <h6>{values?.results.length < 1 ? "No Products Found" : `Found ${values?.results.length}`}</h6>
          <div className="products mt-5">
            <div className="row">
              {values?.results.map((p) => {
                return (
                  <>
                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                      <div className="product product-7 text-center">
                        <figure className="product-media">
                          <span className="product-label label-new">New</span>
                          <img
                            src={`http://localhost:9000/api/v1/product/product-photo/${p._id}`}
                            alt="Product image"
                            className="product-image"
                          />
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
                          <div className="product-action">
                            <a className="btn-product btn-cart">
                              <span>add to cart</span>
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
                              {p.description.substring(0, 30)}
                            </a>
                          </h3>
                          {/* End .product-title */}
                          <div className="product-price">$ {p.price}</div>
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
            {/* End .row */}
          </div>
        </div>
      </div>
    </>
  )
}
export default SearchItem;