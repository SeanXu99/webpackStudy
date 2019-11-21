'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import './index.less';
import logo from './search/images/logo.png'

class Index extends React.Component {
    render() {
        return <div className="text">今日兮何夕<img src={logo} alt=""/></div>;
    }
}

ReactDom.render(
    <Index/>,
    document.getElementById('root')
)