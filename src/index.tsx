import * as React from 'react'
import { useState } from 'react'
import { ReactFunction, checkTheElement } from './utils';

const useTouch = (element: JSX.Element | ReactFunction): [React.ReactElement<any>, boolean] => {
  const [touched, setTouched] = useState(false);

  const handleTouchStart = (handler: any) => (event: TouchEvent) => {
    if (handler && typeof handler === 'function') handler(event);
    
    setTouched(true);
  }

  const handleTouchEnd = (handler: any) => (event: TouchEvent) => {
    if (handler && typeof handler === 'function') handler(event);
    
    setTouched(false);
  }

  if (checkTheElement(element)) {
    element = element(touched)
  }

  const newElement  = React.cloneElement(element, {
    onTouchStart: handleTouchStart(element.props.onTouchStart),
    onTouchEnd: handleTouchEnd(element.props.onTouchEnd),
    onTouchCancel: handleTouchEnd(element.props.onTouchCancel)
  });

  return [newElement, touched];
}

export default useTouch