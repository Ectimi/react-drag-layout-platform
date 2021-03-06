/**
 * config interface
 */
export interface ITextConfigType {
    key: string;
    name: string;
    type: 'Text';
}

export interface INumberConfigType {
    key: string;
    name: string;
    type: 'Number';
    range?: [number, number];
    step?: number;
}

export interface IColorConfigType {
    key: string;
    name: string;
    type: 'Color';
}

export interface ISelectConfigType<KeyType> {
    key: string;
    name: string;
    type: 'Select';
    items: Array<{
        key: KeyType;
        text: string;
    }>;
}

/**
 * default type
 */
 export type TTextDefaultType = string;

 export type TColorDefaultType = string;

 export type TNumberDefaultType = number;

 export type TSelectDefaultType<KeyType> = KeyType;