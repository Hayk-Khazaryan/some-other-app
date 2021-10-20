import "../Product/product.css"
import BlackStar from "../Icons/blackStar"
import Star from "../Icons/star"
function Product({info = {}}) {
       return (
              <div className={`${info.oldPrice && 'other'} 
                     ${info.oldPrice && 'otherProduct'}
                     ${info.stars && 'otherProductListView'}
                     Product`}>

                     <div className="ProductImg">
                            <p className="percent">- 36 %</p>
                     </div>
                     <div className="ProductTitle"><strong >{info.title}</strong></div>
                     <p className="Description">{info.description}</p>
                     <div className="Stars">
                            <BlackStar />
                            <BlackStar />
                            <BlackStar />
                            <BlackStar />
                            <Star />
                     </div>

                     <div className="ProductPriceDiv">
                            <div className="Price">
                                   <strong className="currency">{info.currency}</strong>
                                   <p className="numberP">{info.price}</p>
                            </div>
                            <div><button className="BuyNow">Buy now</button></div>
                     </div>
              </div>
       )
}

export default Product