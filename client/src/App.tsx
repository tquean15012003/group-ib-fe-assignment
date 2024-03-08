import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import HomeLayOut, {
    HomeComponentLayout,
} from "./modules/home/layout/HomeLayout";
import NotificationPage from "./modules/home/pages/NotificationPage";
import SettingsPage from "./modules/home/pages/SettingsPage";

export const ROUTINGS = [
    {
        tab_name: "Main",
        link: "/",
        component: NotificationPage,
    },
    {
        tab_name: "Settings",
        link: "/settings",
        component: SettingsPage,
    },
];

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayOut />}>
                    <Route element={<HomeComponentLayout />}>
                        <Route index element={<NotificationPage />} />
                        <Route path="/settings" element={<SettingsPage />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
