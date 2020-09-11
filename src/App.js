import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import {ThemeProvider} from '@material-ui/core/styles';
import Home from './Home/Home';
import theme from './theme';
import Article from './Article/Article';
import Footer from './Footer/Footer';

const App = () => {
  return(
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <ThemeProvider theme={theme}>
        <Route exact path="/article" component={Article} />
        </ThemeProvider>
        <Redirect to="/" />
        <Home />
      </Switch>
      <Footer />
    </>
  )
}

export default App;