import './index.less'
import {ITextConfig} from '../../../../core/type'

const defaultProps = {
    text:'文本组件'
}

export default function Text(props:React.PropsWithChildren<ITextConfig>){
    return (
        <div className="text">{props.text}</div>
    )
}

Text.defaultProps = defaultProps