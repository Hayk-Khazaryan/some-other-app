import Product from "../Product/product"
import "../ProductDiv/productDiv.css"
function ProductDiv(){
       return(
              <div className="ProductDiv">
                     <Product otherProduct USD={"3.26 USD"}/>
                     <Product otherProduct USD={"1.48 USD"}/>
                     <Product USD={"0.28 USD"}/>
                     <Product otherProduct USD={"1.12 USD"}/>
              </div>
       )
}
 export default ProductDiv