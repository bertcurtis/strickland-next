import Layout from '../components/CommonLayout.js';
import React, { Component } from 'react';
import Router from 'next/router';

export default class Redirect extends Component {
    componentDidMount() {
        setTimeout(Router.push('/home'), 3000)
    }
    render() {
        return (<div>
                        <iframe
              frameBorder='0'
              allowFullScreen
              width='100%'
              height='100%'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              src='https://www.youtube.com/embed/nvz8v2f99H8?autoplay=1&loop=1&rel=0&controls=0&showinfo=0&modestbranding=1&playlist=nvz8v2f99H8&fs=0&cc_load_policy=0&iv_load_policy=3&autohide=1&enablejsapi=1&origin=https%3A%2F%2Fstrickland-web.herokuapp.com/'
            ></iframe>
            <iframe
              frameBorder='0'
              allowFullScreen
              width='100%'
              height='100%'
              allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
              src='https://www.youtube.com/embed/nvz8v2f99H8?autoplay=1&loop=1&rel=0&controls=0&showinfo=0&modestbranding=1&playlist=nvz8v2f99H8&fs=0&cc_load_policy=0&iv_load_policy=3&autohide=1&enablejsapi=1&origin=https%3A%2F%2Fstrickland-web.herokuapp.com/'
            ></iframe>
      </div>)

    }
}