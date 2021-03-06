import {
  ITextConfigType,
  IColorConfigType,
  INumberConfigType,
  ISelectConfigType,
  TTextDefaultType,
  TColorDefaultType,
  TNumberDefaultType,
  TSelectDefaultType
} from 'core/type'

export type TTextSelectKeyType = 'left' | 'right' | 'center';

export interface ITextConfig {
  text: TTextDefaultType;
  color: TColorDefaultType;
  fontSize: TNumberDefaultType;
  textAlign: TSelectDefaultType<TTextSelectKeyType>;
  lineHeight: TNumberDefaultType;
}

export type TTextEditData = Array<
  ITextConfigType | IColorConfigType | INumberConfigType | ISelectConfigType<TTextSelectKeyType>
>;

export interface ITextSchema {
  editData: TTextEditData,
  config: ITextConfig
}

const Text: ITextSchema = {
  editData: [
    {
      key: 'text',
      name: '文字',
      type: 'Text'
    },
    {
      key: 'color',
      name: '文本颜色',
      type: 'Color'
    },
    {
      key: 'fontSize',
      name: '字体大小',
      type: 'Number'
    },
    {
      key: 'textAlign',
      name: '对齐方式',
      type: 'Select',
      items: [
        {
          key: 'left',
          text: '左对齐'
        },
        {
          key: 'center',
          text: '居中对齐'
        },
        {
          key: 'right',
          text: '右对齐'
        }
      ]
    },
    {
      key:'lineHeight',
      name:'行高',
      type:'Number'
    }
  ],
  config: {
    text: '文本组件',
    color: '#000000',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 2
  }
}

export default Text;