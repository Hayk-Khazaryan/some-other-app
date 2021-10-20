import "../SpaceForYourHeading/spaceForYourHeading.css"
import { Link } from "react-router-dom"
function SpaceForYourHeading({item}) {
       return (
              <Link to="/blog/:postId" className="SpaceForYourHeading">
                     <div className="img"></div>
                     <p className="p1">{item.text1}</p>
                     <p className="p2">{item.text2}</p>
                     <div className="Author">
                            <p>Author</p>
                            <p>{item.data}</p>
                     </div>
              </Link>
       )
}

export default SpaceForYourHeading