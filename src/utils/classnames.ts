// joinClassnames just addes the classnames together and add a space in between
export const joinClassnames = (baseClasses: string | undefined, classnames: string | undefined) => {
  const base = baseClasses ? baseClasses.trim() : '';
  const classes = classnames ? classnames.trim() : '';

  // this prevents unnecesary spaces in between, even though it wouldn't matter at all
  return `${base} + ' ' + ${classes}`.trim();
};
