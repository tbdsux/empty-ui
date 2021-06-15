/* headings component */

import React, { HTMLAttributes } from 'react';
import { useHeading } from '../hooks';
import { joinClassnames } from '../utils/classnames';

type HeadingASProps = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as: HeadingASProps;
}

/**
 * Heading
 *
 * @param {HeadingProps} props
 * @returns {JSX.Element}
 */
const Heading = (props: HeadingProps) => {
  const { className, as } = props;
  const headings = useHeading();

  if (as == 'h1')
    return (
      <h1 {...props} className={joinClassnames(headings.h1, className)}>
        {props.children}
      </h1>
    );

  if (as == 'h2')
    return (
      <h2 {...props} className={joinClassnames(headings.h2, className)}>
        {props.children}
      </h2>
    );

  if (as == 'h3')
    return (
      <h3 {...props} className={joinClassnames(headings.h3, className)}>
        {props.children}
      </h3>
    );

  if (as == 'h4')
    return (
      <h4 {...props} className={joinClassnames(headings.h1, className)}>
        {props.children}
      </h4>
    );

  if (as == 'h5')
    return (
      <h5 {...props} className={joinClassnames(headings.h1, className)}>
        {props.children}
      </h5>
    );

  if (as == 'h6')
    return (
      <h6 {...props} className={joinClassnames(headings.h1, className)}>
        {props.children}
      </h6>
    );

  return <></>;
};

export { Heading };
