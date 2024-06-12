import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../components/context/auth";
import { useCart } from "../components/context/cart";

function CartPage() {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  //total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };

  //detele item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  //get payment gateway token
  const getToken = async () => {
    const url = "http://localhost:9000/api/v1/product/braintree/token";
    try {
      const { data } = await axios.get(url);
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  //handle payments
  const handlePayment = async () => {
    const url = "http://localhost:9000/api/v1/product/braintree/payment";
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post(url, {
        nonce,
        cart,
      });
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <>
      {/* <div className="container">
          <div className="col-md-9">
          <div className="row">
            <h3 className="text-center bg-light p-2 mb-1">
              {`Hello ${auth?.token && auth?.user?.name}`}
            </h3>
            <h4 className="text-center">
              {cart?.length ? `You Have ${cart.length} items in your cart ${auth?.token ? "" : "please login to checkout !"}` : "Your Cart Is Empty"}
            </h4>
          </div>
          </div>
        </div> */}

      <div className="page-wrapper">
        <main className="main">
          <div
            className="page-header text-center"
            style={{ backgroundImage: 'url("item/assets/images/page-header-bg.jpg")' }}
          >
            <div className="container">
              <h1 className="page-title">
                Shopping Cart<span>Shop</span>
              </h1>
            </div>
            {/* End .container */}
          </div>
          {/* End .page-header */}
          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <div className="container">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Shop</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Shopping Cart
                </li>
              </ol>
            </div>
            {/* End .container */}
          </nav>
          {/* End .breadcrumb-nav */}
          <div className="page-content">
            <div className="cart">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9">
                    <table className="table table-cart table-mobile">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((p) => {
                          return (
                            <>
                              <tr key={p._id}>
                                <td className="product-col">
                                  <div className="product">
                                    <figure className="product-media">
                                      <a href="#">
                                        <img
                                          src={`http://localhost:9000/api/v1/product/product-photo/${p._id}`}
                                          alt="Product image"
                                        />
                                      </a>
                                    </figure>
                                    <h3 className="product-title">
                                      <a href="#">{p.name}</a>
                                    </h3>
                                    {/* End .product-title */}
                                  </div>
                                  {/* End .product */}
                                </td>
                                <td className="price-col">$ {p.price}</td>
                                <td className="quantity-col">
                                  <div className="cart-product-quantity">
                                    <input
                                      type="number"
                                      className="form-control"
                                      defaultValue={1}
                                      min={1}
                                      max={10}
                                      step={1}
                                      data-decimals={0}
                                      required=""
                                    />
                                  </div>
                                  {/* End .cart-product-quantity */}
                                </td>
                                <td className="total-col">$ {p.price}</td>
                                <td className="remove-col">
                                  <button className="btn-remove" onClick={() => removeCartItem(p._id)}>
                                    <i className="icon-close" />
                                  </button>
                                </td>
                              </tr>
                            </>
                          )
                        })}
                      </tbody>
                    </table>
                    {/* End .table table-wishlist */}
                    <div className="cart-bottom">
                      <div className="cart-discount">
                        <form action="#">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              required=""
                              placeholder="coupon code"
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-outline-primary-2"
                                type="submit"
                              >
                                <i className="icon-long-arrow-right" />
                              </button>
                            </div>
                            {/* .End .input-group-append */}
                          </div>
                          {/* End .input-group */}
                        </form>
                      </div>
                      {/* End .cart-discount */}
                      <a href="#" className="btn btn-outline-dark-2">
                        <span>UPDATE CART</span>
                        <i className="icon-refresh" />
                      </a>
                    </div>
                    {/* End .cart-bottom */}
                  </div>
                  {/* End .col-lg-9 */}
                  <aside className="col-lg-3">
                    <div className="summary summary-cart">
                      <h3 className="summary-title">Cart Total</h3>
                      {/* End .summary-title */}
                      <table className="table table-summary">
                        <tbody>
                          <tr className="summary-subtotal">
                            <td>Subtotal:</td>
                            <td>{totalPrice()}</td>
                          </tr>
                          {/* End .summary-subtotal */}
                          <tr className="summary-shipping">
                            <td>Shipping:</td>
                            <td>&nbsp;</td>
                          </tr>
                          <tr className="summary-shipping-row">
                            <td>
                              <div className="custom-control custom-radio">
                                <input
                                  type="radio"
                                  id="free-shipping"
                                  name="shipping"
                                  className="custom-control-input"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="free-shipping"
                                >
                                  Free Shipping
                                </label>
                              </div>
                              {/* End .custom-control */}
                            </td>
                            <td>$0.00</td>
                          </tr>
                          {/* End .summary-shipping-row */}
                          <tr className="summary-shipping-row">
                            <td>
                              <div className="custom-control custom-radio">
                                <input
                                  type="radio"
                                  id="standart-shipping"
                                  name="shipping"
                                  className="custom-control-input"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="standart-shipping"
                                >
                                  Standart:
                                </label>
                              </div>
                              {/* End .custom-control */}
                            </td>
                            <td>$10.00</td>
                          </tr>
                          {/* End .summary-shipping-row */}
                          <tr className="summary-shipping-row">
                            <td>
                              <div className="custom-control custom-radio">
                                <input
                                  type="radio"
                                  id="express-shipping"
                                  name="shipping"
                                  className="custom-control-input"
                                />
                                <label
                                  className="custom-control-label"
                                  htmlFor="express-shipping"
                                >
                                  Express:
                                </label>
                              </div>
                              {/* End .custom-control */}
                            </td>
                            <td>$20.00</td>
                          </tr>
                          {/* End .summary-shipping-row */}
                          {auth?.user?.address ? (
                            <>
                              <tr className="summary-shipping-estimate">
                                <td>
                                  Current Address:
                                  <br /> <h6 className="mt-1" style={{ fontWeight: "normal" }}>
                                    {auth?.user?.address}
                                    <br /><br /> <a href="#" className="text-dark" style={{ fontWeight: "500" }} onClick={() => navigate("/dashboard/user/profile")}>Update address</a>
                                  </h6>
                                </td>
                                <td>&nbsp;</td>
                              </tr>
                            </>
                          ) : (
                            <>
                              {
                                auth?.token ? (
                                  <a href="#" className="text-dark" style={{ fontWeight: "500" }} onClick={() => navigate("/dashboard/user/profile")}>Update address</a>
                                ) : (
                                  <>
                                    <br /><a
                                      href="#"
                                      className="text-dark"
                                      style={{ fontWeight: "500" }}
                                      onClick={() => navigate("/login", {
                                        state: "/cart",
                                      })}>
                                      Please Login To Checkout
                                    </a>
                                  </>
                                )
                              }
                            </>
                          )}
                          {/* <tr className="summary-shipping-estimate">
                        <td>
                          Estimate for Your Country
                          <br /> <a href="dashboard.html">Change address</a>
                        </td>
                        <td>&nbsp;</td>
                      </tr> */}
                          {/* End .summary-shipping-estimate */}
                          <tr className="summary-total">
                            <td>Total:</td>
                            <td>{totalPrice()}</td>
                          </tr>
                          {/* End .summary-total */}
                        </tbody>
                      </table>
                      {/* End .table table-summary */}
                      <a
                        href="checkout.html"
                        className="btn btn-outline-primary-2 btn-order btn-block"
                      >
                        PROCEED TO CHECKOUT
                      </a>
                    </div>
                    {/* End .summary */}
                    <div className="mt-2">
                      {!clientToken || !auth?.token || !cart?.length ? (
                        ""
                      ) : (
                        <>
                          <DropIn
                            options={{
                              authorization: clientToken,
                              paypal: {
                                flow: "vault",
                              },
                            }}
                            onInstance={(instance) => setInstance(instance)}
                          />

                          <button
                            className="btn btn-primary"
                            onClick={handlePayment}
                            disabled={loading || !instance || !auth?.user?.address}
                          >
                            {loading ? "Processing ...." : "Make Payment"}
                          </button>
                        </>
                      )}
                    </div>
                    {/* <a
                  href="category.html"
                  className="btn btn-outline-dark-2 btn-block mb-3"
                >
                  <span>CONTINUE SHOPPING</span>
                  <i className="icon-refresh" />
                </a> */}
                  </aside>
                  {/* End .col-lg-3 */}
                </div>
                {/* End .row */}
              </div>
              {/* End .container */}
            </div>
            {/* End .cart */}
          </div>
          {/* End .page-content */}
        </main>
        {/* End .main */}
      </div>
      {/* End .page-wrapper */}
      <button id="scroll-top" title="Back to Top">
        <i className="icon-arrow-up" />
      </button>
    </>
  )
}
export default CartPage;