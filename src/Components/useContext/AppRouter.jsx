import { Routes, Route } from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
    return (
        <div>   
            <NavBar />
            <Routes>
                <Route path="/about" element={ <AboutScreen /> } />
                <Route path="/login" element={ <LoginScreen /> } />
                <Route path="/" element={ <HomeScreen /> } />

                <Route path="*" element={ <HomeScreen /> } />
            </Routes>
        </div>
    )
}
