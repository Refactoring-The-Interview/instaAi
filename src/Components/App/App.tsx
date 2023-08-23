import {
  Routes
} from "react-router-dom";

import { FooterNav } from "../NavBars/FooterNav/FooterNav";
import { HeaderNav } from "../NavBars/HeaderNav/HeaderNav";
import './AppS.scss';


export const App = () => {

  return <div className="App">
    <HeaderNav/>
    <FooterNav/>
    <Routes>

    </Routes>
  </div>
}