import { useContext } from "react";
import MyBtn from "../components/UI/MyBtn/MyBtn";
import MyInput from "../components/UI/MyInput/MyInput";
import { AuthContext } from "../context";

const Login = () => {
    const { setIsAuth } = useContext(AuthContext);

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                setIsAuth(true);
                localStorage.setItem("auth", true);
            }}
        >
            <MyInput type="text" />
            <MyInput type="text" />

            <MyBtn>Login</MyBtn>
        </form>
    );
};

export default Login;
