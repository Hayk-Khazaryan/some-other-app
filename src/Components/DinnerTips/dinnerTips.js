import "../DinnerTips/dinnerTips.css"
import MustBePhoto from "../MustBePhoto/mustBePhoto"

function DinnerTips() {
       return (
              <div className="DinnerTips">
                     <MustBePhoto padding text1={"Dinner tips"} text2={"Our chef tips for a great and tasty dinner ready in 20 minutes"} data={"17. 6. 2020"} width={"469px"} height={"400px"} />
                     <div className="VegetableDiv">
                            <div className="grayBox"></div>
                            <p className="Vegetable">Vegetable</p>
                            <p className="forFamily">Which vegetable your family will love and want’s eat each day</p>
                            <div className="VegetableDivData">
                                   <p className="DataNumber1">Author</p><p>15. 6. 2020</p>
                            </div>
                     </div>

                     <div className="Tips">
                            <div className="TipsDiv">
                                   <div>
                                          <p className="TipsText">
                                                 Salat is kinda good start to your morning routines
                                          </p>
                                          <div className="VegetableDivData">
                                                 <p className="DataNumber1">Author</p><p>14. 1. 2020</p>
                                          </div>
                                   </div>
                                   <div>
                                          <div className="box"></div>
                                   </div>
                            </div>
                            <div className="TipsDiv TipsDivM">
                                   <div>
                                          <p className="TipsText">
                                                 Our chef tips for a great and healthy breakfast
                                          </p>
                                          <div className="VegetableDivData">
                                                 <p className="DataNumber1">Author</p><p>14. 1. 2020</p>
                                          </div>
                                   </div>
                                   <div>
                                          <div className="box"></div>
                                   </div>
                            </div>
                            <div className="TipsDiv TipsDivM">
                                   <div>
                                          <p className="TipsText">
                                                 Prepare a simple and delicious breads
                                          </p>
                                          <div className="VegetableDivData">
                                                 <p className="DataNumber1">Author</p><p>14. 1. 2020</p>
                                          </div>
                                   </div>
                                   <div>
                                          <div className="box"></div>
                                   </div>
                            </div>
                     </div>
              </div>
       )
}

export default DinnerTips