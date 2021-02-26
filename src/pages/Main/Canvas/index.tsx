import { DragEvent,useState } from 'react'
import './index.less'
import TabComponents from '../../../components/BasicShop'

import {nanoid} from 'nanoid'

export default function Canvas() {
    const [componentsList, setComponentsList] = useState<Array<React.ReactElement>>([])

    const dragOverHandler = (e: DragEvent) => {
        e.preventDefault()
    }

    const dropHandler = (e: DragEvent) => {
        let componentName = e.dataTransfer?.getData('componentName')
        let Com = TabComponents[componentName]
        setComponentsList(prevList => [...prevList,<Com key={nanoid()}/> ])
    }

    return (
        <div className="canvas" onDragOver={dragOverHandler} onDrop={dropHandler}>
           {componentsList}
        </div>
    )
}