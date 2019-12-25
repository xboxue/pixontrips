interface Props {
  children: React.ReactNode;
  condition: boolean;
  wrap: (children: React.ReactNode) => React.ReactNode;
}

export const ConditionalWrap = ({ children, condition, wrap }: Props) =>
  condition ? <>{wrap(children)}</> : <>{children}</>;
