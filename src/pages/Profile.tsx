import React from "react";
import LogoutButton from "../components/LogoutButton";
import { Link } from "react-router-dom";

type ProfileProps = {
  user: {
    email: string;
    password: string;
    name: string;
  };
  authenticated: any;
  logout: any;
};

const Profile: React.FC<ProfileProps> = ({ user, authenticated, logout }) => {
  const { email, password, name } = user || {};
  return (
    <>
      <h1>Profile</h1>
      <dt>Email</dt>
      <dd>{email}</dd>
      <dt>Password</dt>
      <dd>{password}</dd>
      <dt>Name</dt>
      <dd>{name}</dd>
      {authenticated ? (
        <LogoutButton logout={logout} />
      ) : (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
    </>
  );
};

export default Profile;
