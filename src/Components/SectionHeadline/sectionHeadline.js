import "../SectionHeadline/sectionHeadline.css"
import ToRightGreen from "../Icons/toRightGreen"
function SectionHeadlineDiv({title,button}){
       return(
              <div className="SectionHeadlineDiv">
                     <strong>{title}</strong>
                     <button>{button}<ToRightGreen/></button>
              </div>
       )
}

export default SectionHeadlineDiv