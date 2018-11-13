import * as React from 'react';
import { useState } from 'react';
import { checkTheElement } from './utils';
const useTouch = (element) => {
    const [touched, changeTouch] = useState(false);
    const handleTouchStart = (handler) => (event) => {
        if (handler && typeof handler === 'function')
            handler(event);
        changeTouch(true);
    };
    const handleTouchEnd = (handler) => (event) => {
        if (handler && typeof handler === 'function')
            handler(event);
        changeTouch(false);
    };
    if (checkTheElement(element)) {
        element = element(touched);
    }
    const newElement = React.cloneElement(element, {
        onTouchStart: handleTouchStart(element.props.onMouseEnter),
        onMouseEnter: handleTouchStart(element.props.onMouseEnter),
        onMouseLeave: handleTouchEnd(element.props.onMouseLeave),
        onTouchEnd: handleTouchEnd(element.props.onMouseLeave),
        onTouchCancel: handleTouchEnd(element.props.onTouchCancel),
        onTouchMove: handleTouchStart(element.props.onTouchMove)
    });
    return [newElement, touched];
};
export default useTouch;
