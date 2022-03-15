import './reset.css';
import './App.scss';
// import HeaderPage from './components/HeaderPage/HeaderPage.jsx';
// import HomePage from './pages/HomePage/HomePage.jsx';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import WarehouseDetailsPage from './pages/WarehouseDetailsPage/WarehouseDetailsPage.jsx'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
          {/* <HeaderPage /> */}
          {console.log('test')}
            <Switch>
              {/* <Route path="/" exact component={HomePage}/> */}
              <Route path="/warehouses" exact component={WarehouseDetailsPage}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

