import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const Layout = ({children} : {children: React.ReactNode}) => {
    return (
        <>
            <Header/>
            <main className="min-h-screen">{children}</main>
            <Footer/>
        </>
        
    )
}

export default Layout;