import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
function AuthProvider(props) {
  const [user, setUser] = useState({
    userId: 1,
    fullname: "Sonnlh",
    email: "sonnlh57@gmail.com",
    avatar: "https://images.unsplash.com/photo-1646233627510-cee637f88cfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
  });
  const value = {user, setUser};
  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>;
}
function useAuth(){
    const context = useContext(AuthContext);
    if(typeof context === "undefined") throw new Error("useAuth must be used whithin a AuthProvider")
    return context;
}
export {useAuth, AuthProvider}

