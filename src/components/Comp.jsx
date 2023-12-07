import React, { useRef } from 'react'
import useIsVisible from './IsVisible';

const Comp = ({children}) => {
  const elemRef = useRef();
  const isVisible = useIsVisible(elemRef);
  return <div ref={elemRef}>{isVisible && children}</div>;
}

export default Comp