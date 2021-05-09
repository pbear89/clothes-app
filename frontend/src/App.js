
import {Route, BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/ProductScreen";



function App() {
  return (
    <Router>
    <div className="grid-container">
      <Header/>
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
