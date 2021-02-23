import React from 'react';
import './index.less'

import Header from './Header'
import Slider from './Slider'
import Calibration from './Calibration';
import EditArea from './EditArea'
import AttrPanel from './AttrPanel'

const Main: React.FunctionComponent = () => {
    return (
        <div className="MainPage">
            <Header />
            <div className="container">
                <div className="sliderBox">
                    <Slider />
                </div>
                <Calibration type="vertical" />
                <div className="right">
                    <Calibration />
                    <EditArea />
                </div>
                <AttrPanel/>
            </div>
        </div>
    )
}

export default Main;