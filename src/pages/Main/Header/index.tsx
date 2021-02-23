import React, { PureComponent } from 'react'
import './index.less'
import PubSub from 'pubsub-js'

import {
    SaveOutlined,
    UploadOutlined,
    FileAddOutlined,
    DownloadOutlined,
    UndoOutlined,
    RedoOutlined,
    PicCenterOutlined
} from '@ant-design/icons'
import { Button, Tooltip } from 'antd';

export default class Header extends PureComponent {

    render() {
        return (
            <div className="header">
                <Tooltip title="save">
                    <Button icon={<SaveOutlined />} />
                </Tooltip>
                <Tooltip title="upload json file">
                    <Button icon={<UploadOutlined />} />
                </Tooltip>
                <Tooltip title="new">
                    <Button icon={<FileAddOutlined />} />
                </Tooltip>
                <Tooltip title="download">
                    <Button icon={<DownloadOutlined />} />
                </Tooltip>
                <Tooltip title="undo">
                    <Button icon={<UndoOutlined />} />
                </Tooltip>
                <Tooltip title="redo">
                    <Button icon={<RedoOutlined />} />
                </Tooltip>
                <Tooltip title="center">
                    <Button icon={<PicCenterOutlined />} onClick={() => PubSub.publish('centerCanvas')} />
                </Tooltip>
            </div>
        )
    }
}