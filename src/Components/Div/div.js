import { Link } from 'react-router-dom';
import "../Div/div.css"
function Div() {
       return (
              <div className="Div">
                     <Link className="link" to="/category/subCategory/categoryPage">Category Page</Link>
                     <Link className="link" to="/blog">Blog</Link>
              </div>
       )
}

export default Div