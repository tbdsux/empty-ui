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
  const button = useButton();

  return (
    <button {...props} type="button" className={joinClassnames(button?.primary, props.className)}>
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
  const button = useButton();

  return (
    <button {...props} type="button" className={joinClassnames(button?.secondary, props.className)}>
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
  const button = useButton();

  return (
    <button {...props} type="button" className={joinClassnames(button?.info, props.className)}>
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
  const button = useButton();

  return (
    <button {...props} type="button" className={joinClassnames(button?.warning, props.className)}>
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
  const button = useButton();

  return (
    <button {...props} type="button" className={joinClassnames(button?.danger, props.className)}>
      {props.children}
    </button>
  );
};

export { BtnPrimary, BtnSecondary, BtnInfo, BtnWarning, BtnDanger };
