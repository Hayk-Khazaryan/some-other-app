import "../BestFarmers/bestFarmers.css"
import MenuList from "../MenuList/menuList"
import Product from "../Product/product"
function BestFarmers(){
       return(
              <div className="BestFarmers">
                     <MenuList title="Best from Farmers" 
                     text1="Carrots" text2="Tomatoes" 
                     text3="Potatoes" text4="Chicken" text5="Pork"/>
                     <Product other currency={"1.48 USD"}/>
                     <Product currency={"0.28 USD"}/>
                     <Product currency={"1.12 USD"}/>
              </div>
       )
}

export default BestFarmers