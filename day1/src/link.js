'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import './style.less';
import logo from './images/logo.png'

class Link extends React.Component {
    render() {
        return <div className="text">今日兮何夕aadasd<img src={logo} alt=""/></div>;
    }
}

ReactDom.render(
    <Link/>,
    document.getElementById('root')
)