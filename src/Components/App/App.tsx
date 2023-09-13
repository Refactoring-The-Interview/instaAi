import { Route, Routes } from "react-router-dom";

import { Paths } from "../../Types/routerTypes";
import { AddPicturePage } from "../AddPicturePage/AddPicturePage";
import { MyPicturesContextProvider } from "../Context/MyPicturesContext";
import { FooterNav } from "../NavBars/FooterNav/FooterNav";
import { HeaderNav } from "../NavBars/HeaderNav/HeaderNav";
import { Profile } from "../Profile/Proflie";
import "./AppS.scss";

export const App = () => {
    return (
        <div className="App">
            <MyPicturesContextProvider>
                <HeaderNav />
                <FooterNav />
                <Routes>
                    <Route path={Paths.HOME} element={<></>} />
                    <Route
                        path={Paths.ADDPICTUREPAGE}
                        element={<AddPicturePage />}
                    />
                    <Route path={Paths.PROFILE} element={<Profile />} />
                </Routes>
            </MyPicturesContextProvider>
        </div>
    );
};
