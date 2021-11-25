import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./style.css";
import PrivateRoute from "../Containers/PrivateRoute";
import ContextGroup from "../context";
import Layout from "../Containers/Layout";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import SearchPage from "../Pages/SearchPage";
import CharacterPage from "../Pages/CharacterPage";

function App() {
  return (
    <ContextGroup>
      <BrowserRouter>
        <Layout>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute
              exact
              path="/search/:keyword"
              component={SearchPage}
            />
            <PrivateRoute
              exact
              path="/character/:id"
              component={CharacterPage}
            />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ContextGroup>
  );
}

export default App;
