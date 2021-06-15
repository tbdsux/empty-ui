type ButtonConfigProps = {
  primary?: string;
  secondary?: string;
  info?: string;
  danger?: string;
  warning?: string;
};
type ContainerConfigProps = string;
type HeadingProps = {
  h1?: string;
  h2?: string;
  h3?: string;
  h4?: string;
  h5?: string;
  h6?: string;
};

type BaseConfigProps = {
  buttons: ButtonConfigProps;
  container?: ContainerConfigProps;
  headings: HeadingProps;
};

export { ButtonConfigProps };
export default BaseConfigProps;
