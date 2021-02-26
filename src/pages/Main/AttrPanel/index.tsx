import './index.less'
import { useState } from 'react'
import { Form,Input } from 'antd'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'
import EditItem from './EditItem'

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
            <div className="panelTitle">属性设置</div>
            <Form>
                <EditItem children={<Input/>}/>
            </Form>
        </div>
    )
}