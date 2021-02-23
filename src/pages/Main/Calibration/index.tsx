import { ReactElement } from 'react';
import './index.less';

interface ICalibrationProps {
    length: number,
    type: 'horizontal' | 'vertical',
}

export default function Calibration(props: ICalibrationProps): ReactElement {
    let { length, type } = props;
    let calibrationLineCounts = length / 5 + 1;
    let calibrationLines = []
    let horizontalStyle: React.CSSProperties = {
        width: length + 'px',
        height: '50px',
        marginLeft:'5px',
        display: 'flex',
        flexShrink:0,
        justifyContent: 'space-between',
        zIndex:1
    }

    let verticalStyle: React.CSSProperties = {
        width: '50px',
        height: length + 'px',
        marginTop:'44px',
        display: 'flex',
        flexShrink:0,
        flexDirection: 'column',
        justifyContent: 'space-between',
        zIndex:1    
    }

    for (let i = 0; i < calibrationLineCounts; i++) {
        let lineStyle = type === 'horizontal' ?
            { ...i % 10 === 0 ? { height: '12px' } : { height: '6px' }, width: '1px' } :
            { ...i % 10 === 0 ? { width: '12px' } : { width: '6px' }, height: '1px' }

        let numberStyle = type === 'horizontal' ?
            { transform: 'translate3d(-2px, 16px, 0px) scale(1.1)' } :
            { transform: 'translate3d(16px, -8px, 0px) scale(1.1)' }

        calibrationLines.push(
            <div className="calibrationLine" key={'h_line' + i} style={lineStyle}>
                {
                    i % 10 === 0 ? <span className="calibrationNumber" style={numberStyle}>{5 * i}</span> : ''
                }
            </div>
        )
    }

    return (
        <div className="calibration" style={type === 'horizontal' ? horizontalStyle : verticalStyle}>
            {calibrationLines}
        </div>
    )
}

Calibration.defaultProps = {
    length: 2450,
    type: 'horizontal'
}