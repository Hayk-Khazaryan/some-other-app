import "../ProductTags/productTags.css"

function ProductTags() {
       const product = [
              "Beans",
              "Carrots",
              "Apples",
              "Garlic",
              "Mushrooms",
              "Tomatoes",
              "Chilli peppers",
              "Broccoli",
              "Watermelons",
              "Oranges",
              "Bananas",
              "Grapes",
              "Cherries",
              "Meat",
              "Seo tag",
              "Fish",
              "Seo tag",
              "Fresh food",
              "Lemons"
       ]
       return (
              <div className="ProductTags">
                     <p className="ProductTagsTitle">Product Tegs</p>
                     <div className="ProductText">
                            {
                                   product.map((item) => {
                                          return (
                                                 <p className="VegetableTextes">{item}</p>
                                          )
                                   })
                            }
                     </div>
                     <p className="Copyright">Copyright © 2020 petrbilek.com</p>
              </div>
       )
}

export default ProductTags