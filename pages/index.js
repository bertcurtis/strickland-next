import Layout from '../components/CommonLayout.js';
import React, { Component } from 'react';
import Router from 'next/router';
import Home from './home.js'

export default class Index extends Component {
    /*componentDidMount() {
        Router.push('/redirect')
    }*/
    render() {
        return (<div>
          <Home />
      </div>)

    }
}