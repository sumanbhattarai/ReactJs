import React from 'react';
import './App.css';
import Layout from './components/Layouts/Layout' ;
import BurgerBuilder from './containers/BurgerBuiler/BurgerBuilder' ;

export default class App extends React.Component{
  render(){
    return(
      <Layout>
        <BurgerBuilder/>
      </Layout>
    )
  }
}
