interface HeaderProps {
  title: string;
}
export const Header: React.FC<HeaderProps> = ({ title = "" }) => {
  return (
    <h1 className="mb-2 font-sans text-xl font-semibold text-white">{title}</h1>
  );
};

export default Header;
