import './App.css';
import { getProductList } from "./redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from './Header';
import HomePage from './HomePage';
import { Route, Switch } from 'react-router-dom';
import PageArticle from './components/PageArticle';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductList())
  }, [dispatch])

  const product = useSelector((state) => state.productReducer.product) || [];
  console.log('my all prod',product);
  return (
    <div className="App">
      <header className="App-header">
       <Header  />
      </header>
       <Switch>
          <Route exact path="/" render={() => <main>
          {product.length === 0? <p>wait</p>:  <HomePage product={product}/> }
        </main> }/> 
        <Route  exact path="/article/:_id" component={PageArticle} />
      </Switch>
     

        
    </div>
  );
}

export default App;
