import "./App.css";
import { getProductList } from "./redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import HomePage from "./HomePage";
import { Route, Switch } from "react-router-dom";
import PageArticle from "./components/PageArticle";
import Confime from "./components/Confime";
import Loader from "react-loader-spinner";
import { addToCard } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  const product = useSelector((state) => state.productReducer.product) || [];
  console.log("prod",product)
  const cards = useSelector((state) => state.cardReducer.card) || [];
  


  useEffect(() => {
     dispatch(addToCard(JSON.parse(localStorage.getItem("card"))));
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(cards));
  }, [cards])


  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <main>
              {product.length === 0 ? (
                <Loader
                  type="TailSpin"
                  color="#00BFFF"
                  height={100}
                  width={100}
                  style={{ position: "absolute", top: "30%", right: "50%" }}
                />
              ) : (
                <HomePage product={product} />
              )}
            </main>
          )}
        />
        <Route exact path="/article/:_id" component={PageArticle} />
        <Route exact path="/confirme" component={Confime} />
      </Switch>
    </div>
  );
}

export default App;
