import './index.less';
import { Form } from 'antd';

interface WrapperProps<T> {
    item?: T;
    renderItem?: (item: T) => React.ReactNode;
}

const EditItem = <T extends {}>(props: React.PropsWithChildren<WrapperProps<T>>) => {
    return (
        <Form.Item label="width" labelCol={{ span: 6 }} wrapperCol={{span:16}} labelAlign="left" colon={false}>
            {props.children}
        </Form.Item>
    )
}

export default EditItem


