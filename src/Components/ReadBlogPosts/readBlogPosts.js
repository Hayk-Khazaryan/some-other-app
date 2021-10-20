import "../ReadBlogPosts/readBlogPosts.css"
import ToRightGreen from "../Icons/toRightGreen"
function ReadBlogPosts({title,button}){
       return(
              <div className="ReadBlogPostsDiv">
                     <strong>{title}</strong>
                     <button>{button}<ToRightGreen/></button>
              </div>
       )
}

export default ReadBlogPosts