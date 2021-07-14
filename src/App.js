import { Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ProductPage from './components/page/ProductPage';
import CategoryPage from './components/page/CategoryPage';
import ProductPageDetails from './components/page/ProductPageDetails';
import CategoryDetailPage from './components/page/CategoryDetailPage';
import CartPage from './components/page/CartPage';
import All_users from './components/data/allUser';
import Signin from './components/authentication/Signin2';
import Login from './components/page/Login';
import About from './components/page/About';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/"><ProductPage /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/signin"><Signin /></Route>
        <Route exact path="/category"><CategoryPage /></Route>
        <Route path="/cart"><CartPage /></Route>
        <Route exact path="/product"><ProductPage /></Route>
        <Route path="/alluser"><All_users /></Route>
        <Route path="/product/:productId"><ProductPageDetails /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/category/:categoryId"><CategoryDetailPage /></Route>
        <Route path="/:id">
          <h1>404 PAGE NOT FOUND</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
