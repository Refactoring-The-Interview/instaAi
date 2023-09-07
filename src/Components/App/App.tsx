import { Route, Routes } from "react-router-dom";
import { Paths } from "../../Types/routerTypes";
import { AddPicturePage } from "../AddPicturePage/AddPicturePage";
import { MyPicturesContextProvider } from "../Context/MyPicturesContext";
import { FooterNav } from "../NavBars/FooterNav/FooterNav";
import { HeaderNav } from "../NavBars/HeaderNav/HeaderNav";
import "./AppS.scss";

export const App = () => {
    // get("http://localhost:4000");

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
