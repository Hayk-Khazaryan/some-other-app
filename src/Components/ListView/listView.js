import "../ListView/listView.css"
import Product from "../Product/product"

function ListView({list}) {
       return (
              <div className="ListView">
                     {
                            list.map((item)=><Product info={item}/>)
                     }
              </div>
       )
}

export default ListView