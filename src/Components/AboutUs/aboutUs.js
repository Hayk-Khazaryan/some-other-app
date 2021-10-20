import "../AboutUs/aboutUs.css"
import Links from "../Links/link"
function AboutUs() {
       const list1 = [
              "About Us",
              "Careers",
              "Press Releases",
              "Blog"
       ]
       const list2 = [
              "Facebook",
              "Twitter",
              "Instagram",
              "Youtube",
              "LinkedIn"
       ]
       const list3 = [
              "Become an Affiliate",
              "Advertise your product",
              "Sell on Market"
       ]
       const list4 = [
              "Your account",
              "Returns Centre",
              "100 % purchase protection",
              "Chat with us",
              "Help"
       ]
       return (

              <div className="AboutUs">
                     <Links title={"Get in touch"} list={list1} />
                     <Links title={"Connections"} list={list2} />
                     <Links title={"Earnings"} list={list3} />
                     <Links title={"Account"} list={list4} />
              </div>
       )
}

export default AboutUs