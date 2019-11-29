import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { Home } from "../Home";
import { Footer } from "./Footer";

export const Layout: React.FC<LayoutProps> = props => {
    return (
        <>
            <Navigation></Navigation>
            <Home client={props.client}></Home>
            <Footer></Footer>
        </>
    )
}

export interface LayoutProps {
    client: any
}