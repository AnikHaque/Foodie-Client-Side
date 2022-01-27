import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import PrivateRoute from './components/login/privateroute/PrivateRoute';
import About from './components/about/About';
import AddMenu from './components/addmenu/AddMenu';
import Menu from './components/menu/Menu';
import Login from './components/login/Login';
import Registration from './components/login/Registration';
import AuthProvider from './context/authprovider/AuthProvider';
import Register from './components/login/Registration';
import MakeAdmin from './components/makeadmin/MakeAdmin';
import MenuDetails from './components/menudetails/MenuDetails';
import MyOrder from './components/myorders/MyOrder';
import Orders from './components/orders/Orders';
import AddReview from './components/addreview/AddReview';
import Footer from './components/footer/Footer';
import BookTable from './components/booktable/BookTable';
import Gallary from './components/gallary/Gallary';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
       <AuthProvider>
       <BrowserRouter>
      <Navigation></Navigation>
      <Switch>
        <Route exact path="/">
           <Home></Home>
        </Route>
        <Route exact path="/home">
           <Home></Home>
        </Route>
         <Route exact path="/about">
           <About></About>
        </Route> 
        <Route exact path="/addmenu">
           <AddMenu></AddMenu>
        </Route>
        <Route exact path="/menu">
           <Menu></Menu>
        </Route>
        <Route exact path="/contact">
           <Contact></Contact>
        </Route>
        <Route exact path="/reservation">
           <BookTable></BookTable>
        </Route>
        <Route exact path="/gallary">
          <Gallary></Gallary>
        </Route>
       
        <PrivateRoute exact path="/menudetails/:id">
          <MenuDetails></MenuDetails>
        </PrivateRoute>
        <PrivateRoute exact path="/orders">
           <Orders></Orders>
        </PrivateRoute>
        <PrivateRoute exact path="/myorders">
           <MyOrder></MyOrder>
        </PrivateRoute>
        <PrivateRoute exact path="/addreviews">
       <AddReview></AddReview>
        </PrivateRoute>
        <Route exact path="/login">
           <Login></Login>
        </Route>
        <Route exact path="/register">
           <Registration></Registration>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
        <Route exact path="/makeadmin">
          <MakeAdmin></MakeAdmin>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
