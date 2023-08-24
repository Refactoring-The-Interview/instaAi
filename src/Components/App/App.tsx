import { Routes, Route } from "react-router-dom";

import { MyPicturesContextProvider } from "../Context/MyPicturesContext";
import { FooterNav } from "../NavBars/FooterNav/FooterNav";
import { HeaderNav } from "../NavBars/HeaderNav/HeaderNav";
import "./AppS.scss";
import { Paths } from "../../Types/routerTypes";
import { AddPicturePage } from "../AddPicturePage/AddPicturePage";

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
                </Routes>
            </MyPicturesContextProvider>
        </div>
    );
};
