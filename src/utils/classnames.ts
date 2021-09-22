// joinClassnames just addes the classnames together and add a space in between
export const joinClassnames = (baseClasses: string | undefined, classnames: string | undefined) => {
  const base = baseClasses ? baseClasses.trim() : '';
  const classes = classnames ? classnames.trim() : '';

  return `${base} ${classes}`.trim();
};
