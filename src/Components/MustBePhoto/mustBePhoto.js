import "../MustBePhoto/mustBePhoto.css"

function MustBePhoto({ text1, text2, data, width, height, padding }) {
       return (
              <div className="mustBePhoto" style={{ width, height }}>
                     <p className="DinnerTipsP1">{text1}</p>
                     <div className="DinnerTipsDiv">
                            <p className={`${padding && "padding"} DinnerTipsDivP2`}>{text2} </p>
                            <div className="DinnerTipsDivData">
                                   <div className="whiteRound"></div>
                                   <p className="dataNumber1">Author</p>
                                   <p className="dataNumber2">{data}</p>
                            </div>
                     </div>
              </div>
       )
}

export default MustBePhoto