import { Redirect, Route, BrowserRouter, Switch } from "react-router-dom";
import { IonApp } from "@ionic/react";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App: React.FC = () => (
  <IonApp>
    <BrowserRouter>
      <header></header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  </IonApp>
);

export default App;
