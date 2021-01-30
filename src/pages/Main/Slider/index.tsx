import './index.less'
import { Tabs } from 'antd'
import {tabList} from './config'

const { TabPane } = Tabs;

export default function Slider() {

    return (
        <div className="slider">
            <Tabs tabPosition="left">
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