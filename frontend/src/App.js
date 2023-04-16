// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/HomePage'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import Recommender from './pages/Recommend'
import Header from './components/Header'
import Shop from './pages/Shop'
import Checkout from './pages/Checkout'
import SignupForm from './pages/SignupForm'
import SellnowPage from './pages/SellnowPage'
function App() {
  return (
    <div className="App">
      
      <Router>
        <AuthProvider>
         
          <PrivateRoute component={Home} path="/" exact/>
          <Route component={LoginPage} path="/login"/>
          <Route component={SignupForm} path="/register"/>
          <Route component={SellnowPage} path="/sellnow"/>
          <Route component={Shop} path="/shop"/>
          <Route component={Checkout} path="/checkout"/>
          <Route component={Recommender} path="/recommend"/>
          {/* <Route path="/shop" element={<Shop />}></Route> */}
          {/* <Route path="/checkout" element={<Checkout/>}></Route> */}
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
