import { Route, Routes } from "react-router-dom";

import { useContext } from "react";
import { getPhotoLibrary } from "../../Testing/TestingAPICall/getPhotoLibrary";
import { Paths } from "../../Types/routerTypes";
import { AddPicturePage } from "../AddPicturePage/AddPicturePage";
import {
    MyPictureContext,
    MyPicturesContextProvider,
} from "../Context/MyPicturesContext";
import { MyUserContextProvider } from "../Context/MyUserContext";
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
                    </Routes>
                </MyUserContextProvider>
            </MyPicturesContextProvider>
        </div>
    );
};
