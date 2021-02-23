import { useState, useRef } from 'react'
import './index.less'
import { Button, Tabs } from 'antd'
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons'
import { tabList } from './config'

export default function Slider() {
    const { TabPane } = Tabs;
    const sliderEl = useRef<HTMLDivElement>(null)
    const [status, setStatus] = useState(true)

    const switchHandler = () => {
        setStatus(!status)
        sliderEl.current && (sliderEl.current.style.width = status ? '76px' : '400px')
    }

    const switchButton = (
        <Button icon={status ? <DoubleLeftOutlined /> : <DoubleRightOutlined />} onClick={switchHandler}></Button>
    )

    return (
        <div className="slider" ref={sliderEl}>
            <Tabs tabPosition="left" tabBarExtraContent={switchButton} onTabClick={()=>!status && switchHandler()}>
                {
                    tabList.map((tabItem, index) => {
                        const tabContent = (
                            <>
                                {tabItem.iconComponent}
                                <div>{tabItem.title}</div>
                            </>
                        )

                        return (
                            <TabPane tab={tabContent} key={index}>
                                <div className="title">{tabItem.title + '组件'}</div>
                                <div className="listWrap">
                                    {
                                        tabItem.components!.map((component, index) => (
                                            <div className="componentItem" key={component.text + index}>
                                                <div className="imgBox" key={component.text + index}>
                                                    <img src={component.img} alt="" />
                                                </div>
                                                <div className="text">{component.text}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </TabPane>
                        )
                    })
                }
            </Tabs>
        </div>
    )
}