import { DragEvent } from 'react';
import './index.less'

interface IProps {
    componentName:string,
    text: string,
    img: string,
}

const Thumbnail = (props: React.PropsWithChildren<IProps>) => {
    const { componentName,text, img } = props;
    const dragStartHandler = (e: DragEvent, componentName: string) => {
        e.dataTransfer.setData('componentName', componentName)
    }

    return (
        <div className="thumbnail componentItem" draggable onDragStart={e => { dragStartHandler(e, componentName) }}>
            <div className="imgBox">
                <img src={img} alt=""/>
            </div>
            <div className="text">{text}</div>
        </div>
    )
}

export default Thumbnail;