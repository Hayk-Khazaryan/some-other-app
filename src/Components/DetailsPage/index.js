import "./index.css"
import StarYellow from "../Icons/starYellow"
import Star from "../Icons/star"
import ToDown from "../Icons/toDown"
import HeartRed from "../Icons/heartRed"
import Compar from "../Icons/compar"
function DetailsPage({ info }) {
       return (
              <div className="DetailsPage">
                     <h2>Carrots from Tomissy Farm</h2>
                     <div className="icons">
                            <StarYellow />
                            <StarYellow />
                            <StarYellow />
                            <StarYellow />
                            <Star />
                            <p>(1 customer review)</p>
                     </div>
                     <p className="text">
                            Carrots from Tomissy Farm are one of the best on the market.
                            Tomisso and his family are giving a full love to his Bio products.
                            Tomisso’s carrots are growing on the fields naturally.
                     </p>
                     <div className="flex">
                            <div className="flex">
                                   <div className="category">
                                          <p>SKU:</p>
                                          <p>Category:</p>
                                          <p>Stock:</p>
                                          <p>Farm</p>
                                   </div>
                                   <div className="sku">
                                          <p className="skuP">{info.sku}</p>
                                          <p className="categoryP">{info.category}</p>
                                          <p className="stock">{info.stock}</p>
                                          <p className="farm">{info.farm}</p>
                                   </div>
                            </div>
                            <div className="flex">
                                   <div className="category categoryTwo">
                                          <p>Freshness:</p>
                                          <p>Buy by:</p>
                                          <p>Delivery:</p>
                                          <p>Delivery area</p>
                                   </div>
                                   <div className="freshness">
                                          <p>{info.freshness}</p>
                                          <p>{info.buyBy}</p>
                                          <p>{info.delivery}</p>
                                          <p>{info.deliveryArea}</p>
                                   </div>
                            </div>
                     </div>
                     <div className="CarrotsPrise">
                            <div className="prise">
                                   <p className="newPrise">{info.discount}</p>
                                   <p className="oldPrise">{info.oldPrise}</p>
                            </div>
                            <div className="PcsDiv">
                                   <p className="number">1</p>
                                   <div className="height"></div>
                                   <p className="Pcs">Pcs</p>
                                   <ToDown />
                            </div>
                            <div className="AddToCart">
                                   <button className="button">
                                          <p className="plus">+</p>
                                          Add to cart
                                   </button>
                            </div>
                     </div>
                     <div className="AddList">
                            <HeartRed /><p className="addListP">Add to my wish list</p>
                            <Compar /><p className="compareP">Compare</p>
                     </div>
                     <div className="Cook">
                            <p className="p first">Description</p>
                            <p className="p">Reviews</p>
                            <p className="infoNum three">{info.reviewsNum}</p>
                            <p className="p">Questions</p>
                            <p className="infoNum">{info.questionsNum}</p>
                     </div>
                     <div className="lineDiv">
                            <div className="lineGreen"></div>
                            <div className="lineGray"></div>
                     </div>
                     <div className="cookInfo">
                            <h4>Origins</h4>
                            <p>{info.origins}</p>
                            <h4 className="title">How to cook</h4>
                            <p>{info.howToCook}</p>
                     </div>
                     <h4 className="fullofVitamins">Full of Vitamins!</h4>
                     <div className="lineWidth"></div>
                     <table>
                            <tr>
                                   <th>  Vitamins  </th>
                                   <th>  Quantity  </th>
                                   <th>  % DV  </th>
                            </tr>
                            {
                                   info.vitamins.map(item => {
                                          return (
                                                 <tr>
                                                        <td>{item.vitaminsName}</td>
                                                        <td>{item.quantity}</td>
                                                        <td>{item.dv}</td>
                                                 </tr>
                                          )
                                   })
                            }
                     </table>
              </div>
       )
}
export default DetailsPage
