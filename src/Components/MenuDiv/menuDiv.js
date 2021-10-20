import "../MenuDiv/menuDiv.css"
import MenuList from "../MenuList/menuList"
import Card from "../Card/card"
function MenuDiv(){
       return(
              <div className="MenuDiv">
                    <MenuList title="Categori menu" text1="Bakery" text2="Fruit and vegetables" text3="Meat and fish" text4="Drinks" text5="Kitchen"/>
                    <div className="MenuCard1"><Card/></div><div className="MenuCard2"><Card/></div> 
              </div>
       )
}

export default MenuDiv