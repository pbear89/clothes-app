
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/ProductScreen";



function App() {
  return (
    <Router>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Clothes
          </a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main> 
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/product/:id" component={ProductScreen} ></Route>
        
      </main>
      
      <footer className="row center">All right reserved</footer>
    </div>
    </Router>
  );
}

export default App;
