import { EditOutlined, PlayCircleOutlined, PieChartOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons'
import carouselImg from '../../../assets/images/carousel.png'
import formImg from '../../../assets/images/form.png'

interface ComponentConfig {
    img: string;
    text: string;
}

interface TabItem {
    title: string;
    iconComponent: React.ReactElement,
    components?: Array<ComponentConfig>
}

const tabList: Array<TabItem> = [
    {
        title: '基础',
        iconComponent: <EditOutlined />,
        components: [
            {
                img: carouselImg,
                text: '轮播图组件'
            },
            {
                img: formImg,
                text: '表单组件'
            }
        ]
    },
    {
        title: '媒体',
        iconComponent: <PlayCircleOutlined />,
        components: [
            {
                img: carouselImg,
                text: '轮播图组件'
            },
        ]
    },
    {
        title: '图表',
        iconComponent: <PieChartOutlined />,
        components: [
            {
                img: carouselImg,
                text: '轮播图组件'
            },
        ]
    },
    {
        title: '商品',
        iconComponent: <ShopOutlined />,
        components: [
            {
                img: carouselImg,
                text: '轮播图组件'
            },
        ]
    },
    {
        title: '我的',
        iconComponent: <UserOutlined />,
        components: [
            {
                img: carouselImg,
                text: '轮播图组件'
            },
        ]
    }
]

export { tabList }