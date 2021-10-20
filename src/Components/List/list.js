import "../List/list.css"
import SmallGreenDown from "../Icons/smallGreenDown"
import { Link } from 'react-router-dom';

function List() {
       const list = [
              {
                     title: "Bakery",
                     to: 'bakery'
              }, {
                     title: "Fruit and vegetables",
                     to: 'fruitAndVegetables'
              }
              , {
                     title: "Meat and fish",
                     to: 'meatAndFish'
              },
              {
                     title: "Drinks",
                     to: 'drinks'
              }, {
                     title: "Kitchen",
                     to: 'kitchen'
              }, {
                     title: "Special nutrition",
                     to: 'specialNutrition'
              }, {
                     title: "Baby",
                     to: 'baby'
              }, {
                     title: "Pharmacy",
                     to: 'pharmacy'
              }]

       return (
              <div className="listDiv">
                     {
                            list.map((item) => {
                                   return (
                                          <Link className="listP" to={`/category/${item.to}`}>
                                                 {item.title}
                                                 <SmallGreenDown />
                                          </Link>
                                   )
                            })
                     }
              </div>
       )
}

export default List