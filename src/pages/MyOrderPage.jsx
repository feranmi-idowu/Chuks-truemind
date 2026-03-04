import Footer from "./components/Footer";
import Header from "./components/Header"
import React from "react";
import MyOrder from "./components/MyOrder";

function MyOrderPage () {
    return (
        <div id="MyOrder">
            <Header />
            <MyOrder/>
            <Footer />
        </div>
    )
}

export default MyOrderPage;