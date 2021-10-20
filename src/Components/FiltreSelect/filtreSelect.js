import "../FiltreSelect/filtreSelect.css"
import GridList from "../GridList/gridList"
import ToDown from "../Icons/toDown"
import Clouse from "../Icons/clouse"
function FiltreSelect({ setIsGrid }) {
       return (
              <div className="FiltreSelect">
                     <div className="HomepageTo">
                            <p className="homepage">Homepage</p>
                            <p className="sign">/</p>
                            <p className="fruitAndVegetables">Fruit and vegetables</p>
                     </div>
                    <GridList setIsGrid={setIsGrid}/>
                     <div className="FiltreBoxes">
                            <div className="FiltreTextBox">
                                   <input className="input" type="radio" /><p className="p">Filtre text</p>
                                   <input className="input" type="radio" /><p className="p">Filtre text</p>
                            </div>
                            <div className="FiltreNBM">
                                   <input className="input1" type="checkbox" />
                                   <p className="p1">Filtre</p>
                                   <p className="p2">Nbm</p>
                            </div>
                            <div className="FiltreNBM">
                                   <input className="input1" type="checkbox" />
                                   <p className="p1">Filtre</p>
                                   <p className="p2">Nbm</p>
                            </div>
                            <div className="FiltreSelectBox">
                                   <input className="input1" type="checkbox" checked />
                                   <p className="p1">Filtre</p>
                                   <p className="p2">12</p>
                                   <div className="height"></div>
                                   <p className="p3">Select</p><ToDown />
                            </div>

                     </div>
                     <div className="AppliedFiltres">
                            <p className="p1">Applied filtres:</p>
                            <p className="p">Selected Filtre<Clouse /></p>
                            <p className="p">Selected Filtre<Clouse /></p>
                     </div>
              </div>
       )
}

export default FiltreSelect