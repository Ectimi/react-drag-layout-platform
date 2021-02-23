import './index.less'
import { useState, useRef } from 'react'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'

export default function AttrPanel() {

    const [status, setStatus] = useState(false)
    const [translateX, setTranslateX] = useState(310)

    const switchHandler = () => {
        setStatus(!status)
        setTranslateX(status ? 310 : 0)
    }

    return (
        <div className="attrPanel" style={{ transform: `translateX(${translateX}px)` }}>
            <div className="colla" onClick={switchHandler}>
                {status ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
            </div>
        </div>
    )
}