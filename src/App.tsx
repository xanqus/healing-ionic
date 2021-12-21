import {Redirect, Route, BrowserRouter, Switch, Link} from 'react-router-dom';
import {IonApp} from '@ionic/react';
import Home from './pages/Home';
import Login from './pages/Login';

import {useRecoilState} from 'recoil';
import {userLoginState} from './recoil/user';
import {signIn} from './auth/auth';
import AuthRoute from './auth/AuthRoute';
import Profile from './pages/Profile';
import Main from './pages/Main';
import HealingSounds from './pages/HealingSounds';
import SelfDiagnosis from './pages/SelfDiagnosis';
import HealingVideos from './pages/HealingVideos';
import HistoryManagement from './pages/HistoryManagement';
import QR from './pages/QR';
import Controller from './pages/Controller';
import DiagnosisTest from './pages/DiagnosisTest';
import SelfDiagnosisResult from './pages/SelfDiagnosisResult';
import HealingVideoPlayer from './pages/HealingVideoPlayer';
import NotFound from './pages/NotFound';
import ControllerSelectMenu from './pages/ControllerSelectMenu';
import HealingContents from './pages/HealingContents';
import ExposureContents from './pages/ExposureContents';
import SignalMeasurement from './pages/SignalMeasurement';
import RecentHistory from './pages/RecentHistory';
import ControllerHealingVideos from './pages/ControllerHealingVideos';
import ControllerHealingVideoDetail from './pages/ControllerHealingVideoDetail';
import ControllerSurvey from './pages/ControllerSurvey';
import ControllerExposure1 from './pages/ControllerExposure1';
import ControllerExposure2 from './pages/ControllerExposure2';
import ControllerExposure3 from './pages/ControllerExposure3';

//1vh = 12px

const App: React.FC = () => {
  const [user, setUser] = useRecoilState<any | null>(userLoginState);

  const authenticated = user != null;
  console.log('user', user);
  console.log('authenticated', authenticated);

  const login = async ({email, password}: any) => {
    const user = await signIn({email, password});
    setUser(user);
  };

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
                return <Profile user={user} {...props} authenticated={authenticated} logout={logout} />;
              }}
            />
            <AuthRoute
              authenticated={authenticated}
              path="/main"
              render={(props: any) => {
                return <Main user={user} {...props} authenticated={authenticated} logout={logout} />;
              }}
            />
            <Route path="/login" render={props => <Login authenticated={authenticated} login={login} {...props} />} />
            <Route path="/healingSounds" component={HealingSounds} />
            <Route path="/selfDiagnosis" component={SelfDiagnosis} />
            <Route path="/healingVideos" component={HealingVideos} />
            <Route path="/HistoryManagement" component={HistoryManagement} />
            <Route path="/QR" component={QR} />
            <Route path="/controller" component={Controller} exact />
            <Route path="/controller/select" component={ControllerSelectMenu} />
            <Route path="/controller/healing" component={HealingContents} />
            <Route path="/controller/signalMeasurement" component={SignalMeasurement} />
            <Route path="/controller/recentHistory" component={RecentHistory} />
            <Route path="/controller/healingVideos" component={ControllerHealingVideos} />
            <Route path="/controller/ControllerHealingVideoDetail" component={ControllerHealingVideoDetail}></Route>
            <Route path="/controller/ControllerSurvey" component={ControllerSurvey}></Route>
            <Route path="/controller/exposure" component={ExposureContents} />
            <Route path="/controller/exposure1" component={ControllerExposure1} />
            <Route path="/controller/exposure2" component={ControllerExposure2} />
            <Route path="/controller/exposure3" component={ControllerExposure3} />
            <Route path="/DiagnosisTest" component={DiagnosisTest} />
            <Route path="/selfDiagnosisResult" component={SelfDiagnosisResult} />
            <Route path="/healingVideoPlayer" component={HealingVideoPlayer} />

            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    </IonApp>
  );
};

export default App;
