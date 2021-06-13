type ButtonConfigProps = {
  primary?: string;
  secondary?: string;
  info?: string;
  danger?: string;
  warning?: string;
};

type BaseConfigProps = {
  buttons: ButtonConfigProps;
};

export default BaseConfigProps;
