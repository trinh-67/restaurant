import React from 'react'
import { Route } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Loading from '../Components/Loading/Loading';

export default function HomeTemplate(props) {
    let {Component,...restRoute} = props;
    return <Route {...restRoute} render = {(propsRoute) => {
        return (
            <div>
                <Loading/>
                <Header/>
                <Component {...propsRoute} />
                <Footer/>
            </div>
        )
    }}/>
}
