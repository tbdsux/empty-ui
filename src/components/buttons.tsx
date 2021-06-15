/* button components */

import * as React from 'react';
import { useButton } from '../hooks';
import { joinClassnames } from '../utils/classnames';

/**
 * Primary Button
 *
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props
 * @returns {JSX.Element}
 */
const BtnPrimary = (props: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  const { primary } = useButton();

  return (
    <button {...props} className={joinClassnames(primary, props.className)}>
      {props.children}
    </button>
  );
};

/**
 * Secondary Button
 *
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props
 * @returns {JSX.Element}
 */
const BtnSecondary = (props: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  const { secondary } = useButton();

  return (
    <button {...props} className={joinClassnames(secondary, props.className)}>
      {props.children}
    </button>
  );
};

/**
 * Info Button
 *
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props
 * @returns {JSX.Element}
 */
const BtnInfo = (props: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  const { info } = useButton();

  return (
    <button {...props} className={joinClassnames(info, props.className)}>
      {props.children}
    </button>
  );
};

/**
 * Warning Button
 *
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props
 * @returns {JSX.Element}
 */
const BtnWarning = (props: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  const { warning } = useButton();

  return (
    <button {...props} className={joinClassnames(warning, props.className)}>
      {props.children}
    </button>
  );
};

/**
 * Danger Button
 *
 * @param {React.ButtonHTMLAttributes<HTMLButtonElement>} props
 * @returns {JSX.Element}
 */
const BtnDanger = (props: React.ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element => {
  const { danger } = useButton();

  return (
    <button {...props} className={joinClassnames(danger, props.className)}>
      {props.children}
    </button>
  );
};

export { BtnPrimary, BtnSecondary, BtnInfo, BtnWarning, BtnDanger };
