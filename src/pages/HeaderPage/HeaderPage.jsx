import React, { Component } from "react";
import Header from "../../components/Header/Header";
import "./HeaderPage.css";

class HeaderPage extends Component {

    render () {
        return (
            <div className="HeaderPage">
                <Header />
            </div>
        )
    }
}

export default HeaderPage;