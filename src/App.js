import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Shop from './components/shop/shop';
import PageNotFound from './pages/pagenotfound';
import Signup from './pages/auth/signup';
import Login from './pages/auth/login';
import Dashboard from './pages/user/dashboard';
import PrivateRoute from './components/routes/private';
import ForgotPassword from './pages/auth/forgotpassword';
import AdminRoute from './components/routes/adminroute';
import AdminDashboard from './pages/admin/admindashboard';
import CreateCategory from './pages/admin/createcategory';
import CreateProduct from './pages/admin/createproduct';
import Users from './pages/admin/users';
import Orders from './pages/user/orders';
import Profile from './pages/user/profile';
import Products from './pages/admin/products';
import UpdateProduct from './pages/admin/updateproduct';
import SearchItem from './pages/searchitem';
import ProductDetails from './pages/productdetails';
import CategoryProduct from './pages/categoryproduct';
import CartPage from './pages/cartpage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/product/:slug' element={<ProductDetails />}></Route>
      <Route path='/cart' element={<CartPage />}></Route>
      <Route path='/category/:slug' element={<CategoryProduct />}></Route>
      <Route path='/search' element={<SearchItem />}></Route>
      <Route path='/dashboard' element={<PrivateRoute />}>
        <Route path='user' element={<Dashboard />} />
        <Route path='user/orders' element={<Orders />} />
        <Route path='user/profile' element={<Profile />} />
      </Route>
      <Route path='/dashboard' element={<AdminRoute />}>
        <Route path='admin' element={<AdminDashboard />} />
        <Route path='admin/create-category' element={<CreateCategory />} />
        <Route path='admin/create-product' element={<CreateProduct />} />
        <Route path='admin/product/:slug' element={<UpdateProduct />} />
        <Route path='admin/products' element={<Products />} />
        <Route path='admin/users' element={<Users />} />
      </Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/forgot-password' element={<ForgotPassword />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/shop' element={<Shop />}></Route>
      <Route path='/*' element={<PageNotFound />}></Route> 
    </Routes>
    {/* <Footer /> */}
    </>
  );
}

export default App;
