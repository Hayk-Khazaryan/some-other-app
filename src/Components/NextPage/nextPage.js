import "../NextPage/nextPage.css"
import ToRightWhite from "../Icons/toRightWhite"
function NextPage() {
       return (
              <div className="NextPage">
                     <div className="numbers">
                            <p className="page">Page:</p>
                            <p className="p one">1</p>
                            <p className="p">2</p>
                            <p className="p">3</p>
                            <p className="p">4</p>
                     </div>
                     <button>Next page<ToRightWhite /></button>
                     <div className="productsCount">
                            <p className="p1">198</p>
                            <p className="p2">articles</p>
                     </div>
              </div>
       )
}

export default NextPage