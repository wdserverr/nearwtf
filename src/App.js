import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TipButton from "./TipButton";
import * as nearAPI from "near-api-js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar"
import Dogs from "./pages/Dogs"
import Cats from "./pages/Cats"
import Sheeps from "./pages/Sheeps"
import Goats from "./pages/Goats"

const { utils, connect, keyStores, WalletConnection } = nearAPI;

// Connection configuration
const config = {
  testnet: {
    networkId: "testnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    explorerUrl: "https://explorer.testnet.near.org",
  },
  mainnet: {
    networkId: "mainnet",
    keyStore: new keyStores.BrowserLocalStorageKeyStore(),
    nodeUrl: "https://rpc.mainnet.near.org",
    walletUrl: "https://wallet.mainnet.near.org",
    helperUrl: "https://helper.mainnet.near.org",
    explorerUrl: "https://explorer.mainnet.near.org",
  }
};

class App extends Component {
  state = {
    wallet: false,
    accountId: null,
  }

  sendNear = async (amount, receiver) => {
    const { wallet } = this.state;

    // Account sending the Near
    const account = wallet.account();

    // Convert the human readable number of Near we are sending to YoctoNear
    // YoctoNear is the number of indivisible units in one NEAR
    const yoctoNear = utils.format.parseNearAmount(amount);

    // Transfer tokens
    await account.sendMoney(
      receiver, // Receiver account id
      yoctoNear // Amount in yoctoNEAR
    );
  }

  // Initialize connection
  async initNear() {
    const near = await connect(config.mainnet);
    const wallet = new WalletConnection(near);

    // If a user is signed in return their account id
    // If a user is not signed in return null
    const accountId = wallet.getAccountId() || null;

    this.setState({
      wallet,
      accountId
    });
  }

  nearLogin = () => {
    const { wallet } = this.state;
    wallet.requestSignIn("");
  }

  componentDidMount() {
    this.initNear();
  }
  

  render() {
    const {
      accountId
    } = this.state;
    
    return (  
        <div className="main">
          <iframe 
          src='https://paras.id/token/undead.secretskelliessociety.near::2554/2554'>
          </iframe>
                    {accountId ?
                    <TipButton
                    className="login"
                      // Change this to your account id!
                      receiver="lfg123.near"
                      sendNear={this.sendNear}
                    />
                    :
                    <div className="header">
                      <Router>
                      <Navbar />
                      <Routes>
                        <Route path='/' exact component={Dogs} />
                        <Route path='/cats' component={Cats} />
                        <Route path='/sheeps' component={Sheeps} />
                        <Route path='/goats' component={Goats} />
                      </Routes>
                      </Router>
                      <a className="login" onClick={this.nearLogin}>Login</a>
                      <TipButton
                    className="tip"
                      // Change this to your account id!
                      receiver="lfg123.near"
                      sendNear={this.nearLogin}
                    />
                      <a className="buybtn" onClick={this.nearLogin}></a>
                    </div>
                    }
                    {accountId &&
                    <>
                    <Router>
                      <Navbar />
                      <Routes>
                        <Route path='/' exact component={Dogs} />
                        <Route path='/cats' component={Cats} />
                        <Route path='/sheeps' component={Sheeps} />
                        <Route path='/goats' component={Goats} />
                      </Routes>
                      </Router>
                    <a href="/" className="login1" onClick={() => this.state.wallet.signOut()}>Sign out</a>

                    </>
                    }

        </div>
);
}
}

export default App;
