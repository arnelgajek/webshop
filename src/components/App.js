import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { WebshopProvider } from "../webshop.context";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";
// import Start from "./pages/Start/Start";
import Start2 from './pages/Start2/Start2';
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import Account from "./pages/Account/Account";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import LoginToAccount from "../modals/logintoaccount/LoginToAccount";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loginToAccountModalIsOpen: false,
      fakeDeleteItemDone: false
    };

    this.openLoginToAccount = this.openLoginToAccount.bind(this);
    this.closeLoginToAccount = this.closeLoginToAccount.bind(this);
    this.fakeDeleteCartItem = this.fakeDeleteCartItem.bind(this);
  }

  openLoginToAccount() {
    this.setState({ loginToAccountModalIsOpen: true });
  }

  closeLoginToAccount() {
    this.setState({ loginToAccountModalIsOpen: false });
  }

  onRequestClose() {
    this.setState({ loginToAccountModalIsOpen: false });
  }

  fakeDeleteCartItem() {
    this.setState({ fakeDeleteItemDone: true });
  }

  render() {
    return (
      <WebshopProvider
        openLoginModal={this.openLoginToAccount}
        fakeDeleteCartItem={this.fakeDeleteCartItem}
        deleteButtonProp={this.state.fakeDeleteItemDone}
      >
        <div className="App Site">
          <div className="App-content">
            <div className="App-header">
              <BrowserRouter>
                <div>
                  <Header />
                  <LoginToAccount
                    isOpen={this.state.loginToAccountModalIsOpen}
                    onClose={this.closeLoginToAccount}
                  />
                  <Route path="/" exact component={Start2} />
                  <Route path="/products" exact component={Products} />
                  <Route path="/product" exact component={Product} />
                  <Route path="/about" exact component={About} />
                  <Route path="/account" exact component={Account} />
                  <Route path="/cart" exact component={Cart} />
                </div>
              </BrowserRouter>
            </div>
            <div className="App-main" />
          </div>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </WebshopProvider>
    );
  }
}

export default App;
