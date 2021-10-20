import "./index.css"
import GridList from "../../Components/GridList/gridList"
import MustBePhoto from "../../Components/MustBePhoto/mustBePhoto"
import SpaceForYourHeading from "../../Components/SpaceForYourHeading/spaceForYourHeading"
import NextPage from "../../Components/NextPage/nextPage"

const list = [
       {
              text1: "Tag",
              text2: "Space for your heding is here, write what you need",
              data: "15. 6. 2020"
       },
       {
              text1: "Tag",
              text2: "Space for your heding is here, write what you need",
              data: "15. 6. 2020"
       }, {
              text1: "Tag",
              text2: "Space for your heding is here, write what you need",
              data: "15. 6. 2020"
       }, {
              text1: "Tag",
              text2: "Space for your heding is here, write what you need",
              data: "15. 6. 2020"
       }, {
              text1: "Tag",
              text2: "Space for your heding is here, write what you need",
              data: "15. 6. 2020"
       },
       {
              text1: "Tag",
              text2: "Space for your heding is here, write what you need",
              data: "15. 6. 2020"
       }, {
              text1: "Tag",
              text2: "Space for your heding is here, write what you need",
              data: "15. 6. 2020"
       }, {
              text1: "Tag",
              text2: "Space for your heding is here, write what you need",
              data: "15. 6. 2020"
       }
]
function BlogPage() {
       return (
              <div className="BlogPage">
                     <GridList />
                     <div className="mustBePhotoFlex">
                            <MustBePhoto text1="Tag" text2="This is a space for your blog headline, it can be long don’t worry about that" data="17. 6. 2020" />
                            <MustBePhoto text1="Tag" text2="This is a space for your blog headline, it can be long don’t worry about that" data="17. 6. 2020" />
                     </div>
                     <div className="flex">
                            <div className="JoinOurList">
                                   <div className="Archives">
                                          <p className="title">Archives</p>
                                          <p className="data">March 2020</p>
                                          <p className="data">February 2020</p>
                                          <p className="data">January 2020</p>
                                          <p className="data">November 2019</p>
                                          <p className="data">December 2019</p>
                                   </div>
                                   <div className="Category">
                                          <p className="title">Category</p>
                                          <p className="data">Food</p>
                                          <p className="data">Chefs specialities</p>
                                          <p className="data">Vegetable</p>
                                          <p className="data">Meat</p>
                                          <p className="data">Recommendations</p>
                                   </div>
                                   <div className="joinOurList">
                                          <p className="title">Category</p>
                                          <p className="data">
                                                 Signup to be the first to
                                                 hear about exclusive deals,
                                                 special offers,
                                                 recepies from our masters and others.
                                          </p>
                                   </div>
                                   <div className="Subscribe">
                                          <p className="p1">Your email address</p>
                                          <p className="p2">Subscribe</p>
                                   </div>
                            </div>
                            <div className="SpaceForHeadingDiv">
                                   {
                                          list.map(item => <SpaceForYourHeading item={item} />)
                                   }
                            </div>
                     </div>
                     <NextPage />
              </div>
       )
}

export default BlogPage