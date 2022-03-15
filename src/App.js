import './reset.css';
import './App.scss';
import HeaderPage from './components/HeaderPage/HeaderPage.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <HeaderPage />
            <Switch>
              <Route path="/" exact component={HomePage}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

