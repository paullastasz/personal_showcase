
type NameProps = {
  name: string;
  lastName: string;
};

function Name({ name, lastName: lastName }: NameProps) {
  return (
    <h1 className="header-1">
      {name} {lastName}
    </h1>
  );
}

export default Name;