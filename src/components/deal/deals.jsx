function Deals() {
  return (
    <>
      <div className="container">
        <div className="heading text-center mb-3">
          <h2 className="title">Deals &amp; Outlet</h2>
          {/* End .title */}
          <p className="title-desc">Today’s deal and more</p>
          {/* End .title-desc */}
        </div>
        {/* End .heading */}
        <div className="row">
          <div className="col-lg-6 deal-col">
            <div
              className="deal"
              style={{
                backgroundImage:
                  'url("item/assets/images/demos/demo-4/deal/bg-3.jpg")'
              }}
            >
              <div className="deal-top">
                <h2>Deal of the Day.</h2>
                <h4>Limited quantities. </h4>
              </div>
              {/* End .deal-top */}
              <div className="deal-content">
                <h3 className="product-title">
                  <a href="product.html">
                    Home Smart Speaker with Google Assistant
                  </a>
                </h3>
                {/* End .product-title */}
                <div className="product-price">
                  <span className="new-price">$129.00</span>
                  <span className="old-price">Was $150.99</span>
                </div>
                {/* End .product-price */}
                <a href="product.html" className="btn btn-link">
                  <span>Shop Now</span>
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
              {/* End .deal-content */}
              <div className="deal-bottom">
                <div
                  className="deal-countdown daily-deal-countdown"
                  data-until="+10h"
                />
                {/* End .deal-countdown */}
              </div>
              {/* End .deal-bottom */}
            </div>
            {/* End .deal */}
          </div>
          {/* End .col-lg-6 */}
          <div className="col-lg-6 deal-col">
            <div
              className="deal"
              style={{
                backgroundImage:
                  'url("item/assets/images/demos/demo-4/deal/bg-4.jpg")'
              }}
            >
              <div className="deal-top">
                <h2>Your Exclusive Offers.</h2>
                <h4>Sign in to see amazing deals.</h4>
              </div>
              {/* End .deal-top */}
              <div className="deal-content">
                <h3 className="product-title">
                  <a href="product.html">
                    Certified Wireless Charging Pad for iPhone / Android
                  </a>
                </h3>
                {/* End .product-title */}
                <div className="product-price">
                  <span className="new-price">$29.99</span>
                </div>
                {/* End .product-price */}
                <a href="login.html" className="btn btn-link">
                  <span>Sign In and Save money</span>
                  <i className="icon-long-arrow-right" />
                </a>
              </div>
              {/* End .deal-content */}
              <div className="deal-bottom">
                <div
                  className="deal-countdown offer-countdown"
                  data-until="+11d"
                />
                {/* End .deal-countdown */}
              </div>
              {/* End .deal-bottom */}
            </div>
            {/* End .deal */}
          </div>
          {/* End .col-lg-6 */}
        </div>
        {/* End .row */}
        <div className="more-container text-center mt-1 mb-5">
          <a href="#" className="btn btn-outline-dark-2 btn-round btn-more">
            <span>Shop more Outlet deals</span>
            <i className="icon-long-arrow-right" />
          </a>
        </div>
        {/* End .more-container */}
      </div>
      {/* End .container */}
      <div className="container">
        <hr className="mb-0" />
        <div
          className="owl-carousel mt-5 mb-5 owl-simple"
          data-toggle="owl"
          data-owl-options='{
                  "nav": false, 
                  "dots": false,
                  "margin": 30,
                  "loop": false,
                  "responsive": {
                      "0": {
                          "items":2
                      },
                      "420": {
                          "items":3
                      },
                      "600": {
                          "items":4
                      },
                      "900": {
                          "items":5
                      },
                      "1024": {
                          "items":6
                      }
                  }
              }'
        >
          <a href="#" className="brand">
            <img src="item/assets/images/brands/1.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="item/assets/images/brands/2.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="item/assets/images/brands/3.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="item/assets/images/brands/4.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="item/assets/images/brands/5.png" alt="Brand Name" />
          </a>
          <a href="#" className="brand">
            <img src="item/assets/images/brands/6.png" alt="Brand Name" />
          </a>
        </div>
        {/* End .owl-carousel */}
      </div>
      {/* End .container */}
    </>
  )
}
export default Deals;