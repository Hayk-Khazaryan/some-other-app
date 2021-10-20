import "./index.css"
import DetailsPage from "../../Components/DetailsPage"
import RelatedProducts from "../../Components/RelatedProducts/relatedProducts"
import Product from "../../Components/Product/product"
const info = {
       sku: "76645",
       category: "Vegetables",
       stock: "In Stock",
       farm: "Grocery Tarm Fields",
       freshness: "1 days old",
       buyBy: "pcs, kgs, box, pack",
       delivery: "in 2 days",
       deliveryArea: "Czech republic",
       discount: "36.23 USD",
       oldPrise: "48.56 USD",
       reviewsNum: "18",
       questionsNum: "4",
       origins: "We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.",
       howToCook: "From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.",
       vitamins: [
              {
                     vitaminsName: "Vitamin A equiv.",
                     quantity: "735 μg",
                     dv: "104 %"
              }, {
                     vitaminsName: "Thiamine (B1)",
                     quantity: "0.066 mg",
                     dv: "6 %"
              }, {
                     vitaminsName: "Niacin (B3)",
                     quantity: "0.983 mg",
                     dv: "7 %"
              }, {
                     vitaminsName: "Folate (Bg)",
                     quantity: "19 μg",
                     dv: "5 %"
              }, {
                     vitaminsName: "Vitamin C",
                     quantity: "5.9 mg",
                     dv: "7 %"
              }, {
                     vitaminsName: "Vitamin E",
                     quantity: "0.66 mg",
                     dv: "4 %"
              }, {
                     vitaminsName: "Vitamin K",
                     quantity: "13.2",
                     dv: "13 %"
              }
       ]
}
function ProductDetailsPage() {
       return (
              <div className="ProductDetailsPage">
                     <div className="homepageDiv">
                            <p>Homepage</p><p>/</p><p>Fruit and vegetables</p><p>/</p><p className="carrots">Carrots from Tomissy Farm</p>
                     </div>
                     <div className="CardAndPhoto">
                            <div className="MustBePhoto">
                                   <div className="photo firstPhoto">
                                          <p className="discount">- 36 %</p>
                                          <p className="freeshipping">Free shipping</p>
                                   </div>
                                   <div className="photo"></div>
                                   <div className="photo"></div>
                            </div>
                            <DetailsPage info={info} />
                     </div>
                     <RelatedProducts title={"Related products"} button={"More products"} />
                     <div className="flexProduct">
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                     </div>
              </div>
       )
}

export default ProductDetailsPage