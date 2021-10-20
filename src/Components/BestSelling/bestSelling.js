import "../BestSelling/bestSelling.css"
import MenuList from "../MenuList/menuList"
import Product from "../Product/product"
function BestSelling(){
       return(
              <div className="BestSelling">
                     <MenuList title="Best selling products" 
                     text1="Kitchen" text2="Meat and fish" 
                     text3="Special nutrition" text4="Pharmacy" text5="Baby"/>
                     <Product other currency={"1.48 USD"}/>
                     <Product currency={"0.28 USD"}/>
                     <Product currency={"1.12 USD"}/>
              </div>
       )
}

export default BestSelling