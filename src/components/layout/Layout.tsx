import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { Navigation } from "./Navigation";

export const Layout: React.FC<LayoutProps> = props => {
    return (
        <>
            <div>The layout component</div>
            <Header></Header>
            <Navigation></Navigation>
        </>
    )
}

export interface LayoutProps {

}