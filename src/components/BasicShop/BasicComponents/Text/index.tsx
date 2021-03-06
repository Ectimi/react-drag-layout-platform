import './index.less'
import { ITextConfig } from './schema'

const defaultProps:ITextConfig = {
    text: '文本组件',
    color:'#000000',
    fontSize:14,
    textAlign:'center',
    lineHeight:2
}

export default function Text(props: React.PropsWithChildren<ITextConfig>) {
    const { text, fontSize, color, textAlign,lineHeight } = props;

    return (
        <div className="text" style={{ fontSize, color, textAlign,lineHeight }}>{text}</div>
    )
}

Text.defaultProps = defaultProps