type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="max-w-content mx-auto px-6">{children}</div>;
};

export default Container;
