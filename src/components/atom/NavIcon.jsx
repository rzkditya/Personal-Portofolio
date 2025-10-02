import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavIcon = () => {
  return (
    <div className="absolute flex justify-center items-center top-0 right-0 w-10 h-10 bg-accent-blue">
      <FontAwesomeIcon
        icon="fa-solid fa-bars"
        style={{ color: "#ffffff" }}
        size="xl"
      />
    </div>
  );
};

export default NavIcon;
