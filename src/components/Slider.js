import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core';

function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={'00:00'}>
            {children}
        </Tooltip>
    );
}

ValueLabelComponent.propTypes = {
    children: PropTypes.element.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.number.isRequired,
};



const StyledSlide = withStyles({
    root: {
        color: '#FFF714',
        height: 8,
    },
    thumb: {
        // height: 24,
        // width: 24,
        // backgroundColor: '#fff',
        // border: '2px solid currentColor',
        // marginTop: -8,
        // marginLeft: -12,
        '&:hover,&$active': {
            boxShadow: '0px 0px 0px 8px rgba(255, 255, 255, 0.1)',
        },
    },
    // active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    // track: {
    //     height: 8,
    //     borderRadius: 4,
    // },
    // rail: {
    //     height: 8,
    //     borderRadius: 4,
    // },
})(Slider);


const MySlider = props => {
    const [sliderActivated, setSliderActivaded] = useState(false);
    const [value, setValue] = useState(0);
    // const [value, setValue] = useState(0);
    // if (props.currentTime.toFixed(2) !== value && !sliderActivated) {
    //     // console.log((props.currentTime * 100) / props.duration)
    //     setValue(2)
    //     // (props.currentTime * 100 )/ props.duration
    // }
    return (
        <StyledSlide value={sliderActivated ? value : props.currentTime * 100 / props.duration} onChange={(e, val) => {
            if (!sliderActivated) {

                setSliderActivaded(true)
            }
            console.log(val)
            setValue(val);

        }}
            onChangeCommitted={(e, val) => {
                console.log('commit ' + val)
                props.onChangeCommitted(value)
                setValue(val);

                setSliderActivaded(false)

            }}

            defaultValue={0} ValueLabelComponent={ValueLabelComponent} />

    )

    //     if (!sliderActivated){
    //         return (
    //             <StyledSlide value = {props.value} onChange={(e, value) => {
    //             setSliderActivaded(true);
    //         }}

    //             onChangeCommitted={(e, value) => {
    //                 setSliderActivaded(false)
    //                 props.onChangeCommitted(value)
    //             }} defaultValue={0} ValueLabelComponent={ValueLabelComponent} />
    //         )
    //     }
    //     return (
    //         <StyledSlide onChange={(e, value) => {
    //             setSliderActivaded(true);
    //     }}

    //         onChangeCommitted={(e, value) => {
    //             setSliderActivaded(false)
    //             props.onChangeCommitted(value)
    //         }} defaultValue={0} ValueLabelComponent={ValueLabelComponent} />
    // )


}


export default MySlider;