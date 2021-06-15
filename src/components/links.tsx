/* link components */

import * as React from 'react';
import { useLinks } from '../hooks';
import { joinClassnames } from '../utils/classnames';

/**
 * Primary Button
 *
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props
 * @returns {JSX.Element}
 */
const LinkPrimary = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element => {
  const { primary } = useLinks();

  return (
    <a {...props} className={joinClassnames(primary, props.className)}>
      {props.children}
    </a>
  );
};

/**
 * Secondary Button
 *
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props
 * @returns {JSX.Element}
 */
const LinkSecondary = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element => {
  const { secondary } = useLinks();

  return (
    <a {...props} className={joinClassnames(secondary, props.className)}>
      {props.children}
    </a>
  );
};

/**
 * Info Button
 *
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props
 * @returns {JSX.Element}
 */
const LinkInfo = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element => {
  const { info } = useLinks();

  return (
    <a {...props} className={joinClassnames(info, props.className)}>
      {props.children}
    </a>
  );
};

/**
 * Warning Button
 *
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props
 * @returns {JSX.Element}
 */
const LinkWarning = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element => {
  const { warning } = useLinks();

  return (
    <a {...props} className={joinClassnames(warning, props.className)}>
      {props.children}
    </a>
  );
};

/**
 * Danger Button
 *
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props
 * @returns {JSX.Element}
 */
const LinkDanger = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>): JSX.Element => {
  const { danger } = useLinks();

  return (
    <a {...props} className={joinClassnames(danger, props.className)}>
      {props.children}
    </a>
  );
};

export { LinkPrimary, LinkSecondary, LinkInfo, LinkWarning, LinkDanger };
