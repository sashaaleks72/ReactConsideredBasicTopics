import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import MyNavbar from "./components/UI/MyNavbar/MyNavbar";
import { AuthContext } from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setIsAuth(true);
        }

        setIsLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
            <BrowserRouter>
                <MyNavbar
                    navElements={[
                        { path: "/posts", title: "Main" },
                        { path: "/about", title: "About" },
                    ]}
                />
                <div className="content">
                    <AppRouter isAuth />
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
