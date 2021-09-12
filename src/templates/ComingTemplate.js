import React from 'react'
import { Route } from 'react-router';
import Loading from '../Components/Loading/Loading';
export default function ComingTemplate(props) {
    let {Component,...restParam} = props;
   
    return <Route {...restParam} render={(propsRoute) => {
        return <div>
            <Loading/>
            <Component {...propsRoute} />
    </div>
    }} />
}
