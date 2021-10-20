import "../RelatedProducts/relatedProducts.css"
import ToRightGreen from "../Icons/toRightGreen"
function RelatedProducts({title,button}){
       return(
              <div className="RelatedProducts">
                     <strong>{title}</strong>
                     <button>{button}<ToRightGreen/></button>
              </div>
       )
}

export default RelatedProducts