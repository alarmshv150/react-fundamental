import { AppContext } from "../../../context";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

export const Navbar = () => {
  const { setIsAuth } = AppContext();

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className="navbar">
      <Button onClick={logout}>Выйти</Button>
      <div className="navbar__links">
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
};
