import "../MenuList/menuList.css"
import ToRightBlack from "../Icons/toRightBlack"
function MenuList({title,text1,text2,text3,text4,text5}){
       return(
              <div className="MenuList">
                     <strong className="MenuListTitle">{title}</strong>
                     <div className="MenuListP1"><p>{text1}</p></div>
                     <p>{text2}</p>
                     <p>{text3}</p>
                     <p>{text4}</p>
                     <p>{text5}</p>
                     <button className="moreCotegories">More cotegories<ToRightBlack/></button>
              </div>
       )
}

export default MenuList