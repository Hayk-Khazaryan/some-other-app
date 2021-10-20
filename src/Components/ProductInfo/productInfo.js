import "../ProductInfo/productInfo.css"
import BlackStar from "../Icons/blackStar"
import Star from "../Icons/star"
import ToRightWhite from "../Icons/toRightWhite"
import Heart from "../Icons/heart"
function ProductInfo({info}) {
       return (
              <div className="ProductInfo">
                     <div className="img"></div>
                     <div className="info">
                            <p className="title">{info.title}</p>
                            <p className="text">{info.description}</p>
                            <BlackStar />
                            <BlackStar />
                            <BlackStar />
                            <BlackStar />
                            <Star />
                            <div className="div">
                                   <div className="aboutInfo1">
                                          <p className="fresheness">Fresheness</p>
                                          <p className="p1">Farm</p>
                                          <p className="p1">Delivery</p>
                                          <p className="p1">Stock</p>
                                   </div>
                                   <div className="aboutInfo2">
                                          <div><p className="new">{info.freshenessType}</p><p className="ExtraFresh">{info.fresheness}</p></div>
                                          <p className="p2">{info.farm}</p>
                                          <p className="p2">{info.delivery}</p>
                                          <p className="pcs">{info.stock} pcs</p>
                                   </div>
                            </div>
                     </div>
                     <div className="PriceDiv">
                            <p className="Usd">{info.price} {info.currency}</p>
                            <p className="Discount">{info.oldPrice}</p>
                            <p className="FreeShipping">Free Shipping</p>
                            <p className="Delivery">Delivery in {info.deliveryDays} day</p>
                            <button className="ProducDetail">Product Detail<ToRightWhite /></button>
                            <p className="Heart"><Heart/>Add to wish list</p>
                     </div>
              </div>
       )
}

export default ProductInfo