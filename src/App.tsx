import { Redirect, Route, BrowserRouter, Switch, Link } from "react-router-dom";
import { IonApp } from "@ionic/react";
import Home from "./pages/Home";
import Login from "./pages/Login";

import { useRecoilState } from "recoil";
import { userLoginState } from "./recoil/user";
import { signIn } from "./auth/auth";
import AuthRoute from "./auth/AuthRoute";
import Profile from "./pages/Profile";
import Main from "./pages/Main";
import HealingSounds from "./pages/HealingSounds";
import SelfDiagnosis from "./pages/SelfDiagnosis";
import HealingVideos from "./pages/HealingVideos";
import HistoryManagement from "./pages/HistoryManagement";
import QR from "./pages/QR";
import Controller from "./pages/Controller";
import DiagnosisTest from "./pages/DiagnosisTest";
import NotFound from "./pages/NotFound";
import SelfDiagnosisResult from "./pages/SelfDiagnosisResult";

//1vh = 12px

const App: React.FC = () => {
  const [user, setUser] = useRecoilState<any | null>(userLoginState);

  const { innerWidth: width, innerHeight: height } = window;
  console.log(width, height);

  const authenticated = user != null;
  console.log("user", user);
  console.log("authenticated", authenticated);

  const login = ({ email, password }: any) =>
    setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  return (
    <IonApp>
      <BrowserRouter>
        <header></header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <AuthRoute
              authenticated={authenticated}
              path="/profile"
              render={(props: any) => {
                return (
                  <Profile
                    user={user}
                    {...props}
                    authenticated={authenticated}
                    logout={logout}
                  />
                );
              }}
            />
            <AuthRoute
              authenticated={authenticated}
              path="/main"
              render={(props: any) => {
                return (
                  <Main
                    user={user}
                    {...props}
                    authenticated={authenticated}
                    logout={logout}
                  />
                );
              }}
            />
            <Route
              path="/login"
              render={(props) => (
                <Login authenticated={authenticated} login={login} {...props} />
              )}
            />
            <Route path="/healingSounds" component={HealingSounds} />
            <Route path="/selfDiagnosis" component={SelfDiagnosis} />
            <Route path="/healingVideos" component={HealingVideos} />
            <Route path="/HistoryManagement" component={HistoryManagement} />
            <Route path="/QR" component={QR} />
            <Route path="/Controller" component={Controller} />
            <Route path="/DiagnosisTest" component={DiagnosisTest} />
            <Route
              path="/selfDiagnosisResult"
              component={SelfDiagnosisResult}
            />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    </IonApp>
  );
};

export default App;
