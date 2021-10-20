import "../Card/card.css"
import ToRightGreen from "../Icons/toRightGreen"
function Card(){
       return(
              <div className="CardDiv">
                     <p>Banner subfocus</p>
                     <strong>Space for heading</strong>
                     <button>Read recepies<ToRightGreen/></button>
              </div>
       )
}

export default Card