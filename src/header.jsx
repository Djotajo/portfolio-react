import ProfilePicture from "./profilePicture";
import ProfileDescription from "./profileDescription";

function Header() {
  return (
    <>
      <span className="triangle"></span>
      <ProfilePicture />
      <ProfileDescription />
    </>
  );
}

export default Header;
