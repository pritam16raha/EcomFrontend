import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/global/GlobalStyles";
import BaseLayout from "./components/layout/BaseLayout";
import HomeScreen from "./components/screens/home/HomeScreen";
import SignInScreen from "./components/screens/auth/SignInScreen";
import AuthLayout from "./components/layout/AuthLayout";
import SignUpScreen from "./components/screens/auth/SignUpScreen";
import NoScreenFoundScreen from "./components/screens/error/NoScreenFoundScreen";
import ProductListScreen from "./components/screens/product/ProductListScreen";
import ProductDetailsScreen from "./components/screens/product/ProductDetailsScreen";
import Cart from "./components/screens/cart/Cart";
import EmptyCart from "./components/screens/cart/EmptyCart";
import LoginScreen from "./components/screens/auth/LoginScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./store/Auth";
import { LogOutScreen } from "./components/screens/auth/LogOutScreen";
import UserInfoPage from "./components/screens/auth/UserInfoPage";
import AddProduct from "./Admin/AddProduct";
import AdminRegistration from "./Admin/AdminRegistration";
import AdminLayout from "./components/layout/AdminLayout";
import AllUser from "./Admin/AllUser";
import AllProduct from "./Admin/AllProduct";
import UpdateUser from "./Admin/UpdateUser";
import UpdateProduct from "./Admin/UpdateProduct";
import { CartProvider } from "./store/Cart";
import MyOrder from "./components/screens/MyOrder/MyOrder";


function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <Router>
            <ToastContainer />
            <GlobalStyles />

            <Routes>
              {/* Main Screen */}
              <Route path="/" element={<BaseLayout />}>
                <Route index element={<HomeScreen />} />
                <Route path="/product" element={<ProductListScreen />} />
                <Route
                  path="/singleproduct/:id"
                  element={<ProductDetailsScreen />}
                />

                <Route path="/cart" element={<Cart />} />
                <Route path='/order' element={<MyOrder/>} />
                <Route path="/emptycart" element={<EmptyCart />} />
                <Route path="/userinfo" element={<UserInfoPage />} />
              </Route>

              {/* Auth Screen */}
              <Route path="/" element={<AuthLayout />}>
                <Route path="signin" element={<SignInScreen />} />
                <Route path="signup" element={<SignUpScreen />} />
                <Route path="login" element={<LoginScreen />} />
                <Route path="signout" element={<LogOutScreen />} />
              </Route>

              {/* Admin Route */}
              {/* <Route path="/admin" element={<AuthLayout />}>
              <Route path="registration" element={<AdminRegistration />} />
              <Route path="alluser" element={<AllUser />} />
              <Route path="allproduct" element={<AllProduct />} />
              <Route path="addproduct" element={<AddProduct />} />
            </Route> */}

              <Route path="/admin" element={<AdminLayout />}>
                <Route path="registration" element={<AdminRegistration />} />
                <Route path="alluser" element={<AllUser />} />
                <Route path="updateuser/:id" element={<UpdateUser />} />
                <Route path="allproduct" element={<AllProduct />} />
                <Route path="addproduct" element={<AddProduct />} />
                <Route path="updateproduct/:id" element={<UpdateProduct />} />
              </Route>

              <Route path="*" element={<NoScreenFoundScreen />} />
            </Routes>
          </Router>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
