import { useState } from "react";
import { ROUTINGS } from "../../../App";
import { useNavigate } from "react-router-dom";

const navStyle = {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    height: "fit-content",
    borderBottom: "2px solid rgba(255,255,255, 0.14)",
    gap: "3rem",
    color: "white",
};

const navBarTitleTextStyle = {
    fontSize: "2rem",
};

const navBarItemTextStyle = {
    fontSize: "1rem",
};

const ACTIVE_COLOR = "#8DCAFE";

const NavBar = () => {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState(ROUTINGS[0].tab_name);

    const navItemStyle = (tab: string) => ({
        padding: "1.5rem 0",
        cursor: "pointer",
        borderBottom: activeTab === tab ? `2px solid ${ACTIVE_COLOR}` : "",
        color: activeTab === tab ? ACTIVE_COLOR : "",
    });

    const renderTabs = () => {
        return ROUTINGS.map(({ tab_name, link }) => {
            return (
                <div
                    onClick={() => {
                        setActiveTab(tab_name);
                        navigate(link);
                    }}
                    style={navItemStyle(tab_name)}
                    key={tab_name}
                >
                    <span style={navBarItemTextStyle}>{tab_name}</span>
                </div>
            );
        });
    };

    return (
        <div style={navStyle}>
            <div style={{}}>
                <span style={navBarTitleTextStyle}>Notification task</span>
            </div>
            {renderTabs()}
        </div>
    );
};

export default NavBar;
