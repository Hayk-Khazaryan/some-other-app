import MenuDiv from "../../Components/MenuDiv/menuDiv"
import BestSelling from "../../Components/BestSelling/bestSelling"
import BestFarmers from "../../Components/BestFarmers/bestFarmers"
import OurCustomers from "../../Components/OurCustomers/ourCustomers"
import SpaceForCustomersDiv from "../../Components/SpaceForCustomersDiv/spaceForCustomersDiv"
import SectionHeadline from "../../Components/SectionHeadline/sectionHeadline"
import ProductDiv from "../../Components/ProductDiv/productDiv"
import ReadBlogPosts from "../../Components/ReadBlogPosts/readBlogPosts"
import DinnerTips from "../../Components/DinnerTips/dinnerTips"

function Home() {
       return (
              <main>
                     <MenuDiv />
                     <BestSelling />
                     <BestFarmers />
                     <OurCustomers title="Our customers says" button="Button" />
                     <SpaceForCustomersDiv />
                     <SectionHeadline title="Section Headline" button="Button" />
                     <ProductDiv />
                     <ReadBlogPosts title="Read our Blog posts" button="Go to Blog" />
                     <DinnerTips />
              </main>
       )
}

export default Home