'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import './search.less';
import logo from './images/logo.png'

class Search extends React.Component {
    render() {
        return <div className="text">今日兮何夕<img src={logo} alt=""/></div>;
    }
}

ReactDom.render(
    <Search/>,
    document.getElementById('root')
)