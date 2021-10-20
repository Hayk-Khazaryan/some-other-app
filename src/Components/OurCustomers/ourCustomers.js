import "../OurCustomers/ourCustomers.css"
import ToRightGreen from "../Icons/toRightGreen"
function OurCustomers({title,button}){
       return(
              <div className="OurCustomersDiv">
                     <strong className="OurCustomersTitle">{title}</strong>
                     <button className="OurCustomersButton">{button}<ToRightGreen/></button>
              </div>
       )
}

export default OurCustomers