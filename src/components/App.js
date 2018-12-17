import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { WebshopProvider } from "../webshop.context";
import Header from "../components/shared/Header/Header";
import Footer from "../components/shared/Footer/Footer";
import Start from "./pages/Start/Start";
import Products from "./pages/Products/Products";
import About from "./pages/About/About";
import Account from "./pages/Account/Account";
import Product from "./pages/Product/Product";
import LoginToAccount from "../modals/logintoaccount/LoginToAccount";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loginToAccountModalIsOpen: false
    };

    this.openLoginToAccount = this.openLoginToAccount.bind(this);
    this.closeLoginToAccount = this.closeLoginToAccount.bind(this);
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

  render() {
    return (
      <WebshopProvider openLoginModal={this.openLoginToAccount}>
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
                  <Route path="/" exact component={Start} />
                  <Route path="/products" exact component={Products} />
                  <Route path="/product" exact component={Product} />
                  <Route path="/about" exact component={About} />
                  <Route path="/account" exact component={Account} />
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
