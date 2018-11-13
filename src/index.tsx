import * as React from 'react'
import { useState } from 'react'
import { ReactFunction, checkTheElement } from './utils';

const useTouch = (element: JSX.Element | ReactFunction): [React.ReactElement<any>, boolean] => {
  const [touched, changeTouch] = useState(false);

  const handleTouchStart = (handler: any) => (event: TouchEvent) => {
    if (handler && typeof handler === 'function') handler(event);
    
    changeTouch(true);
  }

  const handleTouchEnd = (handler: any) => (event: TouchEvent) => {
    if (handler && typeof handler === 'function') handler(event);
    
    changeTouch(false);
  }

  if (checkTheElement(element)) {
    element = element(touched)
  }

  const newElement  = React.cloneElement(element, {
    onTouchStart: handleTouchStart(element.props.onMouseEnter),
    onTouchEnd: handleTouchEnd(element.props.onMouseLeave),
    onTouchCancel: handleTouchEnd(element.props.onTouchCancel),
    onTouchMove: handleTouchStart(element.props.onTouchMove)
  });

  return [newElement, touched];
}

export default useTouch