import { createContext } from "react";

export const Context = createContext({
    fullname: "",
    setFullname: () => {},
    email: "",
    setEmail: () => {},
    password: "",
    setPassword: () => {},
    confirmPassword: "",
    setConfirmPassword: () => {},
    validator: null,
    handleLogin: () => {},
    handleRegister: () => {},
});
