import './index.less'

interface IProps{
    content:string | number,
    width:string | number,
    height:string | number,
}

const defaultProps = {
    content:'文本组件'
}

export default function Text(props:React.PropsWithChildren<IProps>){
    return (
        <div className="text">{props.content}</div>
    )
}

Text.defaultProps = defaultProps