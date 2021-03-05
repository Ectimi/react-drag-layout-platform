import './index.less'
import examleImage from '@/assets/images/example.jpg'
import { ImageProps } from 'antd/lib/image'
import { Image } from 'antd';

const defaultProps = {
    src:examleImage,
    width:50,
    height:50
}

export default function AntdImage(props:React.PropsWithChildren<ImageProps>){
    return (
        <Image preview={false} {...props}/>
    )
}

AntdImage.defaultProps = defaultProps