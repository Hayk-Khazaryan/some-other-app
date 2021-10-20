import "../GridList/gridList.css"
import Grid from "../Icons/grid"
import List from "../Icons/list"
function GridList({setIsGrid}) {
       return (
              <div className="GridList">
                     <p className="title">Fruit and vegetables</p>
                     <div className="icons">
                            <Grid /><p className="iconGrid" onClick={() => {
                                   setIsGrid?.(true)
                            }}>Grid view</p>
                            <List /><p className="iconList" onClick={() => {
                                   setIsGrid?.(false)
                            }}>List view</p>
                            <p className="number">117</p><p className="products">Products</p>
                     </div>
              </div>
       )
}
export default GridList