import "./index.css"
import Back from "../Icons/back"
import Facebook from "../Icons/facebook"
import Pinterest from "../Icons/pinterest"
import Twitter from "../Icons/twitter"
import LinkedIn from "../Icons/linkedIn"
import RelatedTopics from "../RelatedTopics/relatedTopics"
import SpaceForYourHeading from "../SpaceForYourHeading/spaceForYourHeading"
function BlogPost({ item, item2 }) {
       return (
              <div className="BlogPost">
                     <div className="HomepageTo">
                            <p className="homepage">Homepage</p>
                            <p className="sign">/</p>
                            <p className="fruitAndVegetables2">Fruit and vegetables</p>
                            <p className="sign">/</p>
                            <p className="productTittle">Product title</p>
                     </div>
                     <div className="listSpace">
                            <div className="info1">
                                   <p>Date:</p>
                                   <p className="p">Category:</p>
                                   <p className="p">Author:</p>
                            </div>
                            <div className="info2">
                                   <p >{item.date}</p>
                                   <p className="p">{item.category}</p>
                                   <p className="p">{item.author}</p>
                            </div>
                            <p className="info3">{item.heading}</p>
                     </div>

                     <div className="TagsBlock">
                            <div className="TagDiv">
                                   <p className="title">Tags</p>
                                   <div className="Tags">
                                          {item.tags.map(product =>
                                                 <p className="products">{product}</p>
                                          )}
                                   </div>
                                   <div className="backToBlog"><Back /><p>Back to Blog</p></div>
                            </div>
                            <div className="fromList">
                                   <p className="text1">{item.text1}</p>
                                   <p className="data">{item.data1}</p>
                                   <p className="text2">{item.text2}</p>
                                   <p className="data">{item.data2}</p>
                                   <p className="text3">{item.text3}</p>
                                   <p className="text4">{item.text4}</p>
                                   <p className="data">{item.data3}</p>
                                   <p className="text5">{item.text5}</p>
                                   <div className="icons">
                                          <p className="shareIcon">Share</p>
                                          <Facebook /><Pinterest /><Twitter /><LinkedIn />
                                   </div>
                                   <div className="YourAnswer">
                                          <p className="leaveReply">Leave a reply</p>
                                          <p className="p">
                                                 Allrady have an account?
                                                 <p className="signIn">Sign in</p>
                                                 to leave a reply.
                                          </p>
                                          <div className="NameEmail">
                                                 <div className="inputCalm">
                                                        <p>Name</p>
                                                        <input className="input" type="text" placeholder="Name" />
                                                 </div>
                                                 <div className="inputCalm">
                                                        <p>Email address</p>
                                                        <input className="input" type="text" placeholder="Email address" />
                                                 </div>
                                          </div>
                                          <div className="SaveMyName">
                                                 <input type="checkbox" />
                                                 <p>Save my name and email in this browser for a next time comment.</p>
                                          </div>
                                          <div className="Comment">
                                                 <p>Comment</p>
                                                 <textarea placeholder="Space for your comments"></textarea>
                                          </div>
                                          <button className="SendComment">Send a comment</button>
                                          <p className="TitleComents">Comments</p>
                                          <div className="AuthorAdmin">
                                                 <div className="information">
                                                        <div className="flex">
                                                               <div className="roundGrayy"></div>
                                                               <div className="infoUser">
                                                                      <p className="author">Author</p>
                                                                      <p className="admin">Admin</p>
                                                                      <p className="dataNumber">22. 6. 2020</p>
                                                               </div>
                                                        </div>
                                                        <p className="Post1">
                                                               {item.text6}<br></br>
                                                               {item.text7}
                                                        </p>
                                                 </div>
                                          </div>
                                          <div className="UserCoustomer">
                                                 <div className="information">
                                                        <div className="flex">
                                                               <div className="roundGrayy"></div>
                                                               <div className="infoUser">
                                                                      <p className="user">User</p>
                                                                      <p className="customer">Customer</p>
                                                                      <p className="dataNumber">22. 6. 2020</p>
                                                               </div>
                                                        </div>
                                                        <p className="Post2">
                                                              {item.text8}<br></br>
                                                        </p>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                     </div>
                     <RelatedTopics title="Related topics" button="Button" />
                     <div className="flexSpace">
                            {
                                   item2.map(item => <SpaceForYourHeading item={item} />)
                            }
                     </div>
              </div>
       )
}

export default BlogPost