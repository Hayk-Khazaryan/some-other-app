import "../ShowMoreProducts/showMoreProducts.css"
import ToDownWhite from "../Icons/toDownWhite"
function ShowMoreProducts() {
       return (
              <div className="ShowMoreProducts">
                     <div className="numbers">
                            <p className="page">Page:</p>
                            <p className="p">1</p>
                            <p className="p">2</p>
                            <p className="thre">3</p>
                            <p className="p">4</p>
                     </div>
                     <button>Show more products<ToDownWhite /></button>
                     <div className="productsCount">
                            <p className="p1">336</p>
                            <p className="p2">Products</p>
                     </div>
              </div>
       )
}

export default ShowMoreProducts