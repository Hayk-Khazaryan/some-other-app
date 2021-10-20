import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from "./Components/Header/header";
import AboutUs from "./Components/AboutUs/aboutUs"
import ProductTags from './Components/ProductTags/productTags';
import List from './Components/List/list';
import Home from "./Pages/Home";
import CategoryPage from './Pages/CategoryPage';
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import BlogPage from "./Pages/BlogPage";
import BlogPost from "./Components/BlogPost";
const list1 = [
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
  }]
const list = {
  date: "22. 6. 2020",
  category: "Dinner",
  author: "Admin",
  heading: "Space for your heading, can be larger so don’t worry - large heading looks better",
  tags: [
    "Food",
    "Recepies",
    "Fresh",
    "Vegetable"
  ],
  text1: "There’s nothing like a warm cup of tea to start your morning—or maybe you’re all about an iced hibiscus on a sunny Saturday afternoon. Whether you’re just craving chamomile or are looking to ditch your coffee dependency, here’s our go-to guide on incorporating a few new teas into your daily routine! ",
  data1: "Morning Ritual // 9:00 AM",
  text2: "Want that extra morning energy without the caffeine jitters? Switch out your morning mug of coffee for a warm, energizing cup of earl grey. Serve as is or stir in some milk and honey for extra coziness. If you want to spice things up, try chai tea instead! The combination of cinnamon, cardamom, and ginger smells amazing and gives you that nice little flavor kick to start your day off right.",
  data2: "Mid-day Boost // 2:00 PM",
  text3: "If you’re feeling a little sluggish post-lunch, beat the afternoon slump with some lemon ginger green tea. Green tea can be a great alternative to coffee in the afternoon when you want that little boost of energy. An added benefit: lemon and ginger work together to aid digestion which is especially helpful after lunch. ",
  data3: "Evening Calm // 8:00 PM",
  text4: "If you’re not into hot drinks, opt-in for a fruity iced green tea instead. Steep some honeydew or peach green tea in hot water for a few minutes and then pour over ice until it’s nice and cool. Enjoy with a slice of lemon, and you’ll feel refreshed and ready to tackle any task. ",
  text5: "Slip on some fuzzy socks, light your favorite candles, and fire up the kettle—it’s time to wind down after a long day. Grab yourself a soothing cup of lavender chamomile tea and indulge in some well-deserved self-love. ",
  text6: "Hi everyone,",
  text7: " we have been working hard with the team bringing a new articles. It has passed a few months till we released it in case of traveling and shooting, hopefully you’ll love it.",
  text8: "Don’t worry about that, we are happy to read a new stories. The time we had to wait was crazy, but the results are awesome! You did an epic job. Now I just need to a buy one."
}
function App() {
  return (
    <div className="App" id="app">
      <Header />
      <List />
      <Switch>
        <Route path="/category/:subCategory/:productId">
          <ProductDetailsPage />
        </Route>
        <Route path="/category/:subCategory">
          <CategoryPage />
        </Route>
        <Route path="/blog/:postId">
          <BlogPost item={list} item2={list1} />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <AboutUs />
      <ProductTags />
    </div>
  );
}

export default App;
