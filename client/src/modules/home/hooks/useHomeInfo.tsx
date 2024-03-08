import React from "react";
import { HomeContext } from "../HomeProvider";

const useHomeInfo = () => {
    const context = React.useContext(HomeContext);

    if (context === undefined) {
        throw new Error("useHomeInfo must be used within a HomeProvider");
    }

    return context;
};

export default useHomeInfo;
