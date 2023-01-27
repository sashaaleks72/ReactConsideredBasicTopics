import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyBtn from "../MyBtn/MyBtn";
import classes from "./MyNavbar.module.css";

const MyNavbar = ({ navElements }) => {
    const [currPath, setCurrPath] = useState(window.location.pathname);
    const { isAuth, setIsAuth } = useContext(AuthContext);

    return (
        <nav className={classes.navbar}>
            {navElements.map((navElement) => (
                <Link
                    key={navElement.title}
                    onClick={() => setCurrPath(navElement.path)}
                    className={
                        currPath !== navElement.path
                            ? classes.navbar__element
                            : [
                                  classes.navbar__element,
                                  classes.navbar__element_curr,
                              ].join(" ")
                    }
                    to={navElement.path}
                >
                    {navElement.title}
                </Link>
            ))}
            {isAuth && (
                <div className={classes.navbar__btn}>
                    <MyBtn
                        onClick={() => {
                            localStorage.removeItem("auth");
                            setIsAuth(false);
                        }}
                    >
                        Logout
                    </MyBtn>
                </div>
            )}
        </nav>
    );
};

export default MyNavbar;
