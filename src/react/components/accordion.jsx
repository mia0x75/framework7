import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { classNames, getExtraAttrs } from '../shared/utils';
import { colorClasses } from '../shared/mixins';

/* dts-props
  id: string | number;
  className: string;
  style: React.CSSProperties;
  accordionOpposite: boolean;
  COLOR_PROPS
*/

const Accordion = forwardRef((props, ref) => {
  const { className, id, style, accordionOpposite, children } = props;
  const elRef = useRef(null);
  useImperativeHandle(ref, () => ({
    el: elRef.current,
  }));
  const dataAttrs = getExtraAttrs(props);
  const classes = classNames(
    className,
    'accordion-list',
    accordionOpposite && 'accordion-opposite',
    colorClasses(props),
  );
  return (
    <div id={id} style={style} className={classes} ref={elRef} {...dataAttrs}>
      {children}
    </div>
  );
});
Accordion.displayName = 'f7-accordion';

export default Accordion;