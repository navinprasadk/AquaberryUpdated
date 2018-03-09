import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import GoogleSearch from "./components/GoogleSearch.jsx";
import WomenCategoryWebView from "./components/WomenCategoryWebView.jsx";
import MHome from "./components/MobileAppHome.jsx";
import WomenCategory from "./components/WomenCategory.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import InfoPage from "./components/InfoPage.jsx";
import FB from "./components/FbAuth.jsx";
import ArView from "./components/ArView.jsx";
import CartDetails from "./components/CartDetails.jsx";
import Delivery from "./components/DeliveryOptions.jsx";
import Inventory from "./components/Inventory.jsx";
import Recommendation from "./components/Recommendation.jsx";
import RotationView from "./components/RotationView.jsx";
import SmartStore from "./components/SmartStore.jsx";
import WishList from "./components/WishList.jsx";
import SmartStoreCheckout from "./components/SmartStoreCheckout.jsx";
import OrderDetails from "./components/OrderDetails.jsx";
import ModifyDeliveryDate from "./components/ModifyDeliveryDate.jsx";
import ChatApp from "./components/ChatApp.jsx";
import NotificationScreen from "./components/NotificationScreen.jsx";
import SocialHandle from "./components/SocialHandle.jsx";
import Promotions from "./components/Promotions.jsx";
import PromotionsCheckout from "./components/PromotionsCheckout.jsx";
import ComboCart from "./components/ComboCart.jsx";
import ExchangePage from "./components/ExchangePage.jsx";
import ExchangeSuccessful from "./components/ExchangeSuccessful.jsx";
import PersonalStylist from "./components/PersonalStylist.jsx";
import FeedBack from "./components/FeedBack.jsx";
import ShopWithShape from "./components/ShopWithShape.jsx";
import ModifySize from "./components/ModifySize.jsx";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./../redux/reducers/combineReducers.js";

const store = createStore(allReducers);

export default class AppRouter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/" component={GoogleSearch} exact />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/mHome" component={MHome} />
            <Route path="/womenCategory" component={WomenCategoryWebView} />
            <Route path="/mWomenCategory/:category" component={WomenCategory} />
            <Route path="/productDetails/:topName" component={ProductDetails} />
            <Route path="/infoPage" component={InfoPage} />
            <Route path="/recommendation" component={Recommendation} />
            <Route path="/ArView" component={ArView} />
            <Route path="/fb" component={FB} />
            <Route path="/cart" component={CartDetails} />
            <Route path="/inventory" component={Inventory} />
            <Route path="/rotation" component={RotationView} />
            <Route path="/delivery" component={Delivery} />
            <Route path="/smartstore" component={SmartStore} />
            <Route path="/wishList" component={WishList} />
            <Route path="/sscheckout" component={SmartStoreCheckout} />
            <Route path="/order" component={OrderDetails} />
            <Route path="/modifyDelivery" component={ModifyDeliveryDate} />
            <Route path="/chat" component={ChatApp} />
            <Route path="/notification" component={NotificationScreen} />
            <Route path="/socialhandle" component={SocialHandle} />
            <Route path="/promotions" component={Promotions} />
            <Route path="/promoCheckout" component={PromotionsCheckout} />
            <Route path="/feedback" component={FeedBack} />
            <Route path="/comboCart" component={ComboCart} />
            <Route path="/exchangepage" component={ExchangePage} />
            <Route path="/exchangeSuccessful" component={ExchangeSuccessful} />
            <Route
              path="/personalstylist/:audioStatus/:buttonstate/:outfit/:color/:height/:size"
              component={PersonalStylist}
            />
            <Route path="/shopwithshape" component={ShopWithShape} />
            <Route path="/modifysize" component={ModifySize} />

            <Route component={PageNotFound} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}
