import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { Navigation } from "./Navigation";
import { Home } from "../Home";

export const Layout: React.FC<LayoutProps> = props => {
    return (
        <>
            <Navigation></Navigation>
            <Home></Home>
        </>
    )
}

export interface LayoutProps {

}