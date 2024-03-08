import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { HomeProvider } from "../HomeProvider";
import { useMessage } from "../hooks/useMessage";

const outerGridStyle = {
    display: "grid",
    gridTemplateRows: "auto 1fr",
    gridTemplateColumns: "1fr",
    minHeight: "100dvh",
    maxHeight: "100dvh",
    background: "#030919",
    padding: "0 2rem",
    margin: 0,
};

const innerGridStyle = {
    width: "100%",
    display: "flex",
    gap: "1rem",
    background: `
    linear-gradient(
      to right,
      rgba(0,0,0,0.04), 
      rgba(0,0,0,0.08)
    )`,
};

const HomeLayOut = () => {
    return (
        <HomeProvider>
            <Outlet />
        </HomeProvider>
    );
};
export const HomeComponentLayout = () => {
    useMessage();
    return (
        <div style={outerGridStyle}>
            <div></div>
            <div style={{ ...innerGridStyle, flexDirection: "column" }}>
                <NavBar />
                <Outlet />
            </div>
        </div>
    );
};

export default HomeLayOut;
