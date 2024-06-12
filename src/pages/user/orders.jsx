import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import UserMenu from "./usermenu";
import { useAuth } from "../../components/context/auth";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    const url = "http://localhost:9000/api/v1/auth/orders";
    try {
      const { data } = await axios.get(url);
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);
  return (
    <>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h3 className="text-center">All Orders</h3>
            {
              orders?.map((o, i) => {
                return (
                  <>
                    <div className="border shadow">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Status</th>
                            <th scope="col">Buyer</th>
                            <th scope="col">Orders</th>
                            <th scope="col">Payment</th>
                            <th scope="col">Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{i + 1}</td>
                            <td>{o?.status}</td>
                            <td>{o?.buyer?.name}</td>
                            <td>{moment(o?.createAt).fromNow()}</td>
                            <td>{o?.payment.success ? "Success" : "Failed"}</td>
                            <td>{o?.products?.length}</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="container">
                        {o?.products?.map((p, i) => (
                          <div className="row mb-1 p-2 card flex-row" key={p._id}>
                            <div className="col-md-4">
                              <img
                                src={`http://localhost:9000/api/v1/product/product-photo/${p._id}`}
                                className="card-img-top"
                                alt={p.name}
                                // width="20px"
                                // height={"20px"}
                                style={{ height: "90px", width: "90px" }}
                              />
                            </div>
                            <div className="col-md-4">
                              <p>{p.name}</p>
                              <p>Price : {p.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
export default Orders;