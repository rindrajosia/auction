
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import LoginScreen from './screens/LoginScreen';
import ProductFormScreen from './screens/ProductFormScreen';
import FundFormScreen from './screens/FundFormScreen';
import UpProductScreen from './screens/UpProductScreen';
import DeleteProductScreen from './screens/DeleteProductScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container>
		  <Route path='/login' component={LoginScreen} exact />
		  <Route path='/fund' component={FundFormScreen} exact/>
		  <Route path='/product/:id' component={ProductScreen} exact/>
		  <Route path='/product/del/:id' component={DeleteProductScreen} exact/>
		  <Route path='/product/up/:id' component={UpProductScreen} exact/>
		  <Route path='/product' component={ProductFormScreen} exact/>
		  <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
    </Router>
  );
}

export default App;
