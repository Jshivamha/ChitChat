import React , {createContext, useContext, useState}from 'react'
import Cookies from 'js-cookie';
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const intitalState = Cookies.get('jwt') || localStorage.getItem('messanger');

    const [authUser, setauthUser] = useState(intitalState? JSON.parse(intitalState) : undefined);
    return (
    <div>
        <AuthContext.Provider value={{authUser, setauthUser}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export const useAuth = () => useContext(AuthContext);
