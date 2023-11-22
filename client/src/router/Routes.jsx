import Main from "../pages/main/MainPage";
import Login from "../pages/login/Login";
import Logout from "../pages/login/Logout.jsx";
import Register from "../pages/register/Register";

import Order from "../pages/order/Order";
import Cart from "../pages/cart/Cart";
import Payment from "../pages/payment/Payment";
import PaymentDone from "../pages/payment/paymentDone/PaymentDone.jsx";

import Recipe from "../pages/recipe/Recipe";
import RecipeView from "../pages/recipe/recipeView/RecipeView";
import RecipeWrite from "../pages/recipe/recipeWrite/RecipeWrite";

import MyPage from "../pages/mypage/mypageComponent/MyPage.jsx";
import UserInfoChange from "../pages/mypage/userInfoChange/UserInfoChange.jsx";
import ConfirmPassword from "../pages/mypage/confirmPassword/ConfirmPassword.jsx";
import OrderDetails from "../pages/mypage/orderDetails/OrderDetails.jsx";
import WriteList from "../pages/mypage/writeList/WriteList.jsx";
import CommentListPage from "../pages/mypage/commentList/CommentListPage.jsx";

import AdminOrder from "../pages/admin/adminOrder/AdminOrder";
import AdminMenu from "../pages/admin/adminMenu/AdminMenu";
import AdminUser from "../pages/admin/adminUser/AdminUser.jsx";
import NotFound from "../pages/error/NotFound.jsx";

// 재사용성 강화
// 가독성 증진

// 라우트 객체

// DRY(Do not repead yourself) Principle
// Single Source Of Truth(같은 거는 하나만 두자)
export const ROUTES = {
  MAIN: {
    path: "/",
    link: "/",
    // element: <Main /> or Main
    element: <Main />,
  },
  LOGIN: {
    path: "/login",
    link: "/login",
    element: <Login />,
  },
  LOGOUT: {
    path: "/logout",
    link: "/logout",
    element: <Logout />,
  },
  REGISTER: {
    path: "/Register",
    link: "/Register",
    element: <Register />,
  },

  ORDER: {
    path: "/Order",
    link: "/Order",
    element: <Order />,
  },
  CART: {
    path: "/Cart",
    link: "/Cart",
    element: <Cart />,
  },
  PAYMENT: {
    path: "/Payment",
    link: "/Payment",
    element: <Payment />,
  },
  PAYMENTDONE: {
    path: "/PaymentDone",
    link: "/PaymentDone",
    element: <PaymentDone />,
  },

  RECIPE: {
    path: "/Recipe",
    link: "/Recipe",
    element: <Recipe />,
  },
  RECIPEVIEW: {
    path: "/RecipeView",
    link: "/RecipeView",
    element: <RecipeView />,
  },
  RECIPEWRITE: {
    path: "/RecipeWrite",
    link: "/RecipeWrite",
    element: <RecipeWrite />,
  },

  MYPAGE: {
    path: "/MyPage",
    link: "/MyPage",
    element: <MyPage />,
  },
  USERINFOCHANGE: {
    path: "/UserInfoChange",
    link: "/UserInfoChange",
    element: <UserInfoChange />,
  },
  CONFIRMPASSWORD: {
    path: "/ConfirmPassword",
    link: "/ConfirmPassword",
    element: <ConfirmPassword />,
  },
  ORDERDETAILS: {
    path: "/OrderDetails",
    link: "/OrderDetails",
    element: <OrderDetails />,
  },
  WRITELIST: {
    path: "/WriteList",
    link: "/WriteList",
    element: <WriteList />,
  },
  COMMENTLISTPAGE: {
    path: "/CommentListpage",
    link: "/CommentListpage",
    element: <CommentListPage />,
  },

  ADMINORDER: {
    path: "/admin/order",
    link: "/admin/order",
    element: <AdminOrder />,
  },
  ADMINMENU: {
    path: "/admin/menu",
    link: "/admin/menu",
    element: <AdminMenu />,
  },
  ADMINMUSER: {
    path: "/admin/user",
    link: "/admin/user",
    element: <AdminUser />,
  },
  NOTFOUND: {
    path: "/*",
    link: "/*",
    element: <NotFound code={404}/>,
  },
  BADREQUEST: {
    path: "/badrequest",
    link: "/badrequest",
    element: <NotFound code={400}/>,
  },
  INTERNALSERVERERROR: {
    path: "/internalservererror",
    link: "/internalservererror",
    element: <NotFound code={500} />,
  },
};

// 라우트 배열

export const ROUTES_ARR = Object.values(ROUTES);

// [
//  {
//         path: '/',
//         link: '/',
//         // element: <Main /> or Main
//         element: Main
//     },
//      {
//         path: '/login',
//         link: '',
//         element: Login
//     }
// ]
