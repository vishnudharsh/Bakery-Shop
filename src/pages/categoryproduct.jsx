import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function CategoryProduct() {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);


  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    const url = `http://localhost:9000/api/v1/product/product-category/${params.slug}`;
    try {
      const { data } = await axios.get(url);
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <div className="container"> */}
      {/* <h4 className="text-center">{category?.name}</h4>
            <h4 className="text-center">{products?.length} result found</h4> */}
      <div className="page-wrapper">
        {/* End .header */}
        <main className="main">
          <div
            className="page-header text-center"
            style={{ backgroundImage: 'url("assets/images/page-header-bg.jpg")' }}
          >
            <div className="container">
              <h1 className="page-title">
                {category?.name}<span>{products?.length} result found</span>
              </h1>
            </div>
            {/* End .container */}
          </div>
          {/* End .page-header */}
          {/* <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
            <div className="container">
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
            </div>
            End .container
          </nav> */}
          {/* End .breadcrumb-nav */}
          <div className="page-content">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  {/* <div className="toolbox">
                    <div className="toolbox-left">
                      <div className="toolbox-info">
                        Showing <span>9 of 56</span> Products
                      </div>
                      End .toolbox-info
                    </div>
                    End .toolbox-left
                    <div className="toolbox-right">
                      <div className="toolbox-sort">
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
                      </div>
                      End .toolbox-sort
                      <div className="toolbox-layout">
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
                      End .toolbox-layout
                    </div>
                    End .toolbox-right
                  </div>
                  End .toolbox */}
                  <div className="products mb-3">
                    <div className="row">
                      {products.map((p) => {
                        return (
                          <>
                            <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                              <div className="product product-7 text-center">
                                <figure className="product-media">
                                  <span className="product-label label-new">New</span>
                                  <Link to={`/product/${p.slug}`}><img
                                    src={`http://localhost:9000/api/v1/product/product-photo/${p._id}`}
                                    alt={p.name}
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
                    {/* <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <a
                          data-toggle="collapse"
                          href="#widget-1"
                          role="button"
                          aria-expanded="true"
                          aria-controls="widget-1"
                        >
                          Category
                        </a>
                      </h3> */}
                    {/* End .widget-title */}
                    {/* <div className="collapse show" id="widget-1">
                        <div className="widget-body">
                          <div className="filter-items filter-items-count d-flex flex-column">
                            {categories?.map((c) => {
                              return (
                                <>
                                <Checkbox
                                  key={c._id}
                                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                                  className='mt-1'
                                >
                                  {c.name}
                                </Checkbox>
                                </>
                              )
                            })}
                            End .filter-item
                          </div>
                          End .filter-items
                        </div>
                        End .widget-body
                      </div>
                      End .collapse */}
                    {/* </div> */}
                    {/* End .widget */}
                    {/* <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <a
                          data-toggle="collapse"
                          href="#widget-4"
                          role="button"
                          aria-expanded="true"
                          aria-controls="widget-4"
                        >
                          Prices
                        </a>
                      </h3> */}
                    {/* End .widget-title */}
                    {/* <div className="collapse show" id="widget-4">
                        <div className="widget-body">
                          <div className="filter-items d-flex flex-column">
                          <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                              {Prices?.map((p) => {
                                return (
                                  <div key={p._id}>
                                  <Radio value={p.array} className='mt-1'>{p.name}</Radio>
                                  </div>
                                )
                              })}
                          </Radio.Group>
                          </div>
                          End .filter-items
                        </div>
                        End .widget-body
                      </div>
                      End .collapse */}
                    {/* </div> */}
                    {/* End .widget */}
                    {/* <div className="d-felx flex-column">
                      <button className='btn btn-danger' onClick={() => window.location.reload()}>RESET FILTERS</button>
                    </div> */}
                    <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <a
                          data-toggle="collapse"
                          href="#widget-3"
                          role="button"
                          aria-expanded="true"
                          aria-controls="widget-3"
                        >
                          Colour
                        </a>
                      </h3>
                      {/* End .widget-title */}
                      <div className="collapse show" id="widget-3">
                        <div className="widget-body">
                          <div className="filter-colors">
                            <a href="#" style={{ background: "#b87145" }}>
                              <span className="sr-only">Color Name</span>
                            </a>
                            <a href="#" style={{ background: "#f0c04a" }}>
                              <span className="sr-only">Color Name</span>
                            </a>
                            <a href="#" style={{ background: "#333333" }}>
                              <span className="sr-only">Color Name</span>
                            </a>
                            <a
                              href="#"
                              className="selected"
                              style={{ background: "#cc3333" }}
                            >
                              <span className="sr-only">Color Name</span>
                            </a>
                            <a href="#" style={{ background: "#3399cc" }}>
                              <span className="sr-only">Color Name</span>
                            </a>
                            <a href="#" style={{ background: "#669933" }}>
                              <span className="sr-only">Color Name</span>
                            </a>
                            <a href="#" style={{ background: "#f2719c" }}>
                              <span className="sr-only">Color Name</span>
                            </a>
                            <a href="#" style={{ background: "#ebebeb" }}>
                              <span className="sr-only">Color Name</span>
                            </a>
                          </div>
                          {/* End .filter-colors */}
                        </div>
                        {/* End .widget-body */}
                      </div>
                      {/* End .collapse */}
                    </div>
                    {/* End .widget */}
                    <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <a
                          data-toggle="collapse"
                          href="#widget-4"
                          role="button"
                          aria-expanded="true"
                          aria-controls="widget-4"
                        >
                          Brand
                        </a>
                      </h3>
                      {/* End .widget-title */}
                      <div className="collapse show" id="widget-4">
                        <div className="widget-body">
                          <div className="filter-items">
                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="brand-1"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="brand-1"
                                >
                                  Next
                                </label>
                              </div>
                              {/* End .custom-checkbox */}
                            </div>
                            {/* End .filter-item */}
                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="brand-2"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="brand-2"
                                >
                                  River Island
                                </label>
                              </div>
                              {/* End .custom-checkbox */}
                            </div>
                            {/* End .filter-item */}
                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="brand-3"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="brand-3"
                                >
                                  Geox
                                </label>
                              </div>
                              {/* End .custom-checkbox */}
                            </div>
                            {/* End .filter-item */}
                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="brand-4"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="brand-4"
                                >
                                  New Balance
                                </label>
                              </div>
                              {/* End .custom-checkbox */}
                            </div>
                            {/* End .filter-item */}
                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="brand-5"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="brand-5"
                                >
                                  UGG
                                </label>
                              </div>
                              {/* End .custom-checkbox */}
                            </div>
                            {/* End .filter-item */}
                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="brand-6"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="brand-6"
                                >
                                  F&amp;F
                                </label>
                              </div>
                              {/* End .custom-checkbox */}
                            </div>
                            {/* End .filter-item */}
                            <div className="filter-item">
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="brand-7"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="brand-7"
                                >
                                  Nike
                                </label>
                              </div>
                              {/* End .custom-checkbox */}
                            </div>
                            {/* End .filter-item */}
                          </div>
                          {/* End .filter-items */}
                        </div>
                        {/* End .widget-body */}
                      </div>
                      {/* End .collapse */}
                    </div>
                    {/* End .widget */}
                    <div className="widget widget-collapsible">
                      <h3 className="widget-title">
                        <a
                          data-toggle="collapse"
                          href="#widget-5"
                          role="button"
                          aria-expanded="true"
                          aria-controls="widget-5"
                        >
                          Price
                        </a>
                      </h3>
                      {/* End .widget-title */}
                      <div className="collapse show" id="widget-5">
                        <div className="widget-body">
                          <div className="filter-price">
                            <div className="filter-price-text">
                              Price Range:
                              <span id="filter-price-range" />
                            </div>
                            {/* End .filter-price-text */}
                            <div id="price-slider" />
                            {/* End #price-slider */}
                          </div>
                          {/* End .filter-price */}
                        </div>
                        {/* End .widget-body */}
                      </div>
                      {/* End .collapse */}
                    </div>
                    {/* End .widget */}
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
      {/* </div> */}
    </>
  )
}
export default CategoryProduct;