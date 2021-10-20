import "../Header/header.css"
import Freshnesecom from "../Icons/freshnesecom"
import Person from "../Icons/person"
import Basket from "../Icons/basket"
import Four from "../Icons/four"
import GreenDown from "../Icons/greenDown"
import Search from "../Icons/search"
import { Link } from "react-router-dom"
function Header(){

       return(
              <header className="Header">

                     <div className="HeaderDiv1">
                            <div className="chatWithUs">
                                   <p className="chatWithUsp1">Chat with us</p>
                                   <p className="chatWithUsp2">+420 336 775 664</p>
                                   <p>info@freshnesecom.com</p>
                            </div>
                            <div className="aboutUs">
                                   <p>Blog</p>
                                   <p>About Us</p>
                                   <p>Careers</p>
                            </div>
                     </div>
                     <div className="line"></div>
                     <div className="HeaderDiv2">
                            <Link to="/"><Freshnesecom/></Link>

                            <div className="HeaderSearch">
                                   <strong>All categories</strong>
                                   <GreenDown/>
                                   <div className="lineHeight"></div>
                                   <input className="HeaderInput" type="search" placeholder="Search Products, categories ..."/>
                                   <Search/>
                            </div>

                            <div className="HeaderIcons">
                                   <Person/>
                                   <Basket/>
                                   <Four/>
                            </div>
                     </div>
              </header>
       )
}

export default Header