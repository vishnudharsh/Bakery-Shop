import axios from "axios";
import { useEffect, useState } from "react";

function Newarrivals() {
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
      <div className="page-wrapper">
        {/* End .header */}
        <main className="main">
          {/* <div
            className="page-header text-center"
            style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
          >
            <div className="container">
              <h1 className="page-title">
                Grid 4 Columns<span>Shop</span>
              </h1>
            </div>
            End .container
          </div>
          End .page-header */}
          {/* <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2"> */}
          {/* <div className="container">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Shop</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Grid 4 Columns
                </li>
              </ol>
            </div> */}
          {/* End .container */}
          {/* </nav> */}
          {/* End .breadcrumb-nav */}
          <div className="page-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="toolbox">
                    <div className="toolbox-left">
                      <div className="toolbox-info">
                        <h2>New Arrivals</h2>
                      </div>
                      {/* End .toolbox-info */}
                    </div>
                    {/* End .toolbox-left */}
                    <div className="toolbox-right">
                      {/* <div className="toolbox-sort">
                        <label htmlFor="sortby">Sort by:</label>
                        <div className="select-custom">
                          <select
                            name="sortby"
                            id="sortby"
                            className="form-control"
                          >
                            <option value="popularity" selected="selected">
                              Most Popular
                            </option>
                            <option value="rating">Most Rated</option>
                            <option value="date">Date</option>
                          </select>
                        </div>
                      </div> */}
                      {/* End .toolbox-sort */}
                      {/* <div className="toolbox-layout">
                        <a href="category-list.html" className="btn-layout">
                          <svg width={16} height={10}>
                            <rect x={0} y={0} width={4} height={4} />
                            <rect x={6} y={0} width={10} height={4} />
                            <rect x={0} y={6} width={4} height={4} />
                            <rect x={6} y={6} width={10} height={4} />
                          </svg>
                        </a>
                        <a href="category-2cols.html" className="btn-layout">
                          <svg width={10} height={10}>
                            <rect x={0} y={0} width={4} height={4} />
                            <rect x={6} y={0} width={4} height={4} />
                            <rect x={0} y={6} width={4} height={4} />
                            <rect x={6} y={6} width={4} height={4} />
                          </svg>
                        </a>
                        <a href="category.html" className="btn-layout">
                          <svg width={16} height={10}>
                            <rect x={0} y={0} width={4} height={4} />
                            <rect x={6} y={0} width={4} height={4} />
                            <rect x={12} y={0} width={4} height={4} />
                            <rect x={0} y={6} width={4} height={4} />
                            <rect x={6} y={6} width={4} height={4} />
                            <rect x={12} y={6} width={4} height={4} />
                          </svg>
                        </a>
                        <a href="category-4cols.html" className="btn-layout active">
                          <svg width={22} height={10}>
                            <rect x={0} y={0} width={4} height={4} />
                            <rect x={6} y={0} width={4} height={4} />
                            <rect x={12} y={0} width={4} height={4} />
                            <rect x={18} y={0} width={4} height={4} />
                            <rect x={0} y={6} width={4} height={4} />
                            <rect x={6} y={6} width={4} height={4} />
                            <rect x={12} y={6} width={4} height={4} />
                            <rect x={18} y={6} width={4} height={4} />
                          </svg>
                        </a>
                      </div>
                      End .toolbox-layout */}
                    </div>
                    {/* End .toolbox-right */}
                  </div>
                  {/* End .toolbox */}
                  <div className="products mb-3">
                    <div className="row">
                      {products.map((p) => {
                        return (
                          <>
                            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                              <div className="product product-7 text-center">
                                <figure className="product-media">
                                  <span className="product-label label-new">New</span>
                                  <img
                                    src={`http://localhost:9000/api/v1/product/product-photo/${p._id}`}
                                    alt={p.name}
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
                  {/* End .products */}
                  {/* <div>{total}</div> */}
                  {/* <div className='pagination justify-content-center'>
                    {products && products.length < total && (
                      <>
                      <button className="btn btn-warning" onClick={(e) => {
                        e.preventDefault();
                        setPage(page + 1);
                      }}>
                        Load
                      </button>
                      </>
                    )}
                  </div> */}
                  {/* <div className="pagination justify-content-center">
                    <button className='btn btn-warning'>Loading...</button>
                  </div> */}
                  {/* <div className="justify-content-center">
                    {products && products.length < total && (
                      <>
                      <button className="btn btn-primary" onClick={(e) => {
                        e.preventDefault();
                        setPage(page + 1);
                      }}>
                        {loading ? "Loading..." : "Load More"}
                      </button>
                      </>
                    )}
                  </div> */}
                  {/* <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                  <li className="page-item">
                    {products && products.length < total && (
                      <>
                      <a className="page-link page-link-next text-dark" href="#" aria-label="Next" onClick={(e) => {
                        e.preventDefault();
                        setPage(page + 1);
                      }}>
                        {loading ? "Loading..." : "LoadMore"}
                      </a>
                      </>
                    )}
                  </li>
                  </ul>
                  </nav> */}
                </div>
                {/* End .col-lg-9 */}
                <aside className="col-lg-3 order-lg-first">
                  <div className="sidebar sidebar-shop">
                    {/* <div className="widget widget-clean">
                      <label>Filters:</label>
                      <a href="#" className="sidebar-filter-clear" onClick={() => window.location.reload()}>
                        Clean All
                      </a>
                    </div> */}
                    {/* End .widget widget-clean */}
                    {/* <div className="d-felx flex-column">
                      <button className='btn btn-danger' onClick={() => window.location.reload()}>RESET FILTERS</button>
                    </div> */}
                  </div>
                  {/* End .sidebar sidebar-shop */}
                </aside>
                {/* End .col-lg-3 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </div>
          {/* End .page-content */}
        </main>
        {/* End .main */}
        {/* End .footer */}
      </div>
      {/* End .page-wrapper */}
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up" />
      </button>
    </>
  )
}
export default Newarrivals;