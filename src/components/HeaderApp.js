import React, { Component } from "react";
import SignupForm from "./SignupForm";

class HeaderApp extends Component {
  render() {
    let logoUrl =
      "https://lh3.googleusercontent.com/kR336RQiLl2T5YPjI24kCQUP8FfsSkCY0CVoMsPpC62hBam0qHQ-qyKtcsmlaxep2FiFKgE9mkw9axkxCIKa_Xt0JDNMEbzTACuiE9YXYzPdaNPYQB65os9dfPjY7RH2kbVikD7Vkw=w2400";
    return (
      <header className="App-header">
        <div className="header">
          <div className="slogan">
            <img src={logoUrl} className="logo" height={70} width={80} />
            <div className="title">Donations</div>
          </div>

          <div className="signUp-div">
            <SignupForm />
          </div>
        </div>
      </header>
    );
  }
}
export default HeaderApp;
