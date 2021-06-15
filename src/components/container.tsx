/* container component */

import * as React from 'react';
import { useContainer } from '../hooks';
import { joinClassnames } from '../utils/classnames';

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Container
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props
 * @returns {JSX.Element}
 */
const Container = (props: ContainerProps) => {
  const container = useContainer();

  return (
    <div {...props} className={joinClassnames(container, props.className)}>
      {props.children}
    </div>
  );
};

export { Container };
