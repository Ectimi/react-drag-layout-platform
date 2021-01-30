import React from 'react';
import './index.less'

import Header from './Header'
import Slider from './Slider'

const Main: React.FunctionComponent = () => {
    return (
        <div className="MainPage">
            <Header />
            <Slider />
        </div>
    )
}

export default Main;