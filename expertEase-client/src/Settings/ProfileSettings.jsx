import NavBar from "./../components/NavBar";
import ProfileSetting from "../components/ProfileSetting";

function ProfileSettings() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen ">
        <ProfileSetting />
      </div>

    </>
  );
}

export default ProfileSettings;
