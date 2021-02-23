import React, { createRef } from 'react'
import './index.less'
import PubSub from 'pubsub-js'

import Canvas from '../Canvas'

interface IState {
    translateX: number,
    translateY: number,
}

export default class EditArea extends React.PureComponent<any, IState> {

    state: IState = {
        translateX: 0,
        translateY: 10,
    }

    token:string = ''; //保存订阅的token
    editAreaRef = createRef<HTMLDivElement>();
    canvasBoxRef = createRef<HTMLDivElement>();

    //居中画布
    centerCanvas(){
        let centerX = parseFloat(getComputedStyle(this.editAreaRef.current as HTMLDivElement).width) / 2 - parseFloat(getComputedStyle(this.canvasBoxRef.current as HTMLDivElement).width) / 2;
        this.setState({ translateX: centerX,translateY:10 })
    }


    bindMouseEvent() {
        let editAreaDom = (this.editAreaRef.current) as HTMLDivElement
        let canvasBoxDom = (this.canvasBoxRef.current) as HTMLDivElement

        let startX: number;
        let startY: number;
        let endX: number;
        let endY: number;
        let prevTranslateX:number;
        let prevTranslateY:number;

        let maxX = parseFloat(getComputedStyle(editAreaDom).width) - parseFloat(getComputedStyle(canvasBoxDom).width);
        let minX = 0;

        let mouseMoveHandler = (mouseMoveEvent: MouseEvent) => {
            mouseMoveEvent.preventDefault()
            endX = mouseMoveEvent.clientX;
            endY = mouseMoveEvent.clientY;
            
            let translateX = prevTranslateX + endX - startX;
            let translateY = prevTranslateY + endY - startY;
            translateX = translateX < minX ? 0 : translateX > maxX ? maxX : translateX;
            this.setState({ translateX, translateY })
        }

        editAreaDom.addEventListener('mousedown', (mouseDownEvent: MouseEvent) => {
            mouseDownEvent.preventDefault()
            let { target, clientX, clientY } = mouseDownEvent
            if ((target as HTMLElement).classList.contains('editArea')) {
                prevTranslateX = parseFloat(getComputedStyle(canvasBoxDom).transform.substring(6).split(',')[4])
                prevTranslateY = parseFloat(getComputedStyle(canvasBoxDom).transform.substring(6).split(',')[5])
                startX = clientX;
                startY = clientY;
                editAreaDom.style.cursor = 'move'
                editAreaDom?.addEventListener('mousemove', mouseMoveHandler)
            }
        })

        editAreaDom.addEventListener('mouseup', () => {
            editAreaDom.style.cursor = 'default';
            editAreaDom.removeEventListener('mousemove', mouseMoveHandler)
        })
    }

    componentDidMount() {
        this.centerCanvas()
        this.bindMouseEvent()
        this.token = PubSub.subscribe('centerCanvas',this.centerCanvas.bind(this))
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render() {
        let { translateX, translateY } = this.state;

        return (
            <div className="editArea" ref={this.editAreaRef}>
                <div className="canvasBox" ref={this.canvasBoxRef} style={{ transform: `translate(${translateX}px,${translateY}px) scale(1)` }}>
                    <Canvas />
                </div>
            </div>
        )
    }
}