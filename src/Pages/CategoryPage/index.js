import "./index.css"
import ProductInfo from "../../Components/ProductInfo/productInfo"
import FiltreSelect from "../../Components/FiltreSelect/filtreSelect"
import Div from "../../Components/Div/div"
import ShowMoreProducts from "../../Components/ShowMoreProducts/showMoreProducts"
import ListView from "../../Components/ListView/listView"
import { useState } from "react"
const list = [
       {
              title: "Product title",
              description: "Space for a small product description",
              freshenessType: "New",
              fresheness: " (Extra fresh)",
              farm: "Grocery Tarm Fields",
              delivery: "Europe",
              stock: "320",
              price: "36.99",
              currency: "USD",
              oldPrice: "48.56",
              deliveryDays: "1",
       },
       {
              title: "Product title",
              description: "Space for a small product description",
              freshenessType: "New",
              fresheness: " (Extra fresh)",
              farm: "Grocery Tarm Fields",
              delivery: "Europe",
              stock: "320",
              price: "36.99",
              currency: "USD",
              oldPrice: "48.56",
              deliveryDays: "1"
       },
       {
              title: "Product title",
              description: "Space for a small product description",
              freshenessType: "New",
              fresheness: " (Extra fresh)",
              farm: "Grocery Tarm Fields",
              delivery: "Europe",
              stock: "320",
              price: "36.99",
              currency: "USD",
              oldPrice: "48.56",
              deliveryDays: "1"
       },
       {
              title: "Product title",
              description: "Space for a small product description",
              freshenessType: "New",
              fresheness: " (Extra fresh)",
              farm: "Grocery Tarm Fields",
              delivery: "Europe",
              stock: "320",
              price: "36.99",
              currency: "USD",
              oldPrice: "48.56",
              deliveryDays: "1"
       },
       {
              title: "Product title",
              description: "Space for a small product description",
              freshenessType: "New",
              fresheness: " (Extra fresh)",
              farm: "Grocery Tarm Fields",
              delivery: "Europe",
              stock: "320",
              price: "36.99",
              currency: "USD",
              oldPrice: "48.56",
              deliveryDays: "1",
              stars: true
       }
]
function CategoryPage() {
       const [isGrid, setIsGrid] = useState(true)
       return (
              <div className="CategoryPage">
                     <FiltreSelect setIsGrid={setIsGrid} />

                     <div className="wrap">
                            <Div />
                            <div className="ProductInfoDiv">
                                   {
                                          isGrid ? <ListView list={list} /> :
                                                 list.map(item => <ProductInfo info={item} />)
                                   }

                            </div>
                     </div>
                     <ShowMoreProducts />
              </div>
       )
}

export default CategoryPage