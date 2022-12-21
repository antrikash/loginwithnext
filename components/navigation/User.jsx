/* eslint-disable react/react-in-jsx-scope */
import Link from 'next/link';

/* Components */
// import DarkModeToggle from "../DarkModeToggle";

const User = ({ props }) => {
  const { user } = props;

  return (
    <p className="account">
      {(user && <Link href="/user/logout">Logout</Link>) || (
        <Link href="/user/login">LogIn</Link>
      )}
    </p>
  );
};

export default User;
