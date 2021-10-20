import "../Links/link.css"

function Links({ title, list }) {
       
       return (
              <div className="Links">
                     <p className="linksTitle">{title}</p>
                     {
                            list.map((item) => {
                                   return (
                                          <p className="linksText">{item}</p>
                                   )
                            })
                     }
              </div>
       )
}

export default Links