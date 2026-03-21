type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <img
        src={picture}
        className="w-6 h-6 rounded-full"
        alt={name}
      />
      <span className="font-mono text-xs text-muted">{name}</span>
    </div>
  );
};

export default Avatar;
