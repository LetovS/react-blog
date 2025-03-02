import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';
import React from "react";
import {IProviderProps} from "../../interfaces/IProviderProps.js";

const Layout: React.FC<IProviderProps> = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="main-content">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;