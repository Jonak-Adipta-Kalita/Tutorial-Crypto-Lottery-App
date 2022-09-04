interface Props {
  title: string;
  isActive?: boolean;
}

const NavButton = ({ title, isActive }: Props) => {
  return (
    <button
      className={`${
        isActive && "bg-[#036756]"
      } text-white py-2 px-4 rounded hover:bg-[#036756] font-bold`}
    >
      {title}
    </button>
  );
};

export default NavButton;
