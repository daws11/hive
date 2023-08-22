import "./DropdownProfile.css";
const DropdownProfile = ({ onClose }) => {
  return (
    <div className="dropdown-profile">
      <img className="dropdown-profile-child" alt="" src="/polygon-1.svg" />
      <div className="button-parent2">
        <div className="button30">
          <div className="default3">Profile</div>
        </div>
        <div className="button31">
          <div className="default3">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default DropdownProfile;
