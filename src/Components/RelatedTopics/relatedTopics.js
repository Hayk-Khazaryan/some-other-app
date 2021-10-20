import "../RelatedTopics/relatedTopics.css"
import ToRightGreen from "../Icons/toRightGreen"
function RelatedTopics({title,button}){
       return(
              <div className="RelatedTopicsDiv">
                     <strong>{title}</strong>
                     <button>{button}<ToRightGreen/></button>
              </div>
       )
}

export default RelatedTopics