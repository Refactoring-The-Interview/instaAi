import { Route, Routes } from "react-router-dom";

import { Paths } from "../../Types/routerTypes";
import { AddPicturePage } from "../AddPicturePage/AddPicturePage";
import { MyPicturesContextProvider } from "../Context/MyPicturesContext";
import { MyUserContextProvider } from "../Context/MyUserContext";
import { Feed } from "../Feed/Feed";
import { Home } from "../Home/Home";
import { FooterNav } from "../NavBars/FooterNav/FooterNav";
import { HeaderNav } from "../NavBars/HeaderNav/HeaderNav";
import { Profile } from "../Profile/Proflie";
import "./AppS.scss";

export const App = () => {
    return (
        <div className="App">
            <MyPicturesContextProvider>
                <MyUserContextProvider>
                    <HeaderNav />
                    <FooterNav />
                    <Routes>
                        <Route path={Paths.HOME} element={<Home />} />
                        <Route
                            path={Paths.ADDPICTUREPAGE}
                            element={<AddPicturePage />}
                        />
                        <Route path={Paths.PROFILE} element={<Profile />} />
                        <Route path={Paths.FEED} element={<Feed />} />
                    </Routes>
                </MyUserContextProvider>
            </MyPicturesContextProvider>
        </div>
    );
};
