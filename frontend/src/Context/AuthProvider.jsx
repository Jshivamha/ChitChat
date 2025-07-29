import React , {createContext, useContext, useEffect, useState}from 'react'
import Cookies from 'js-cookie';
export const AuthContext = createContext();
import api from '../utils/axios';
export const AuthProvider = ({children}) => {
    const intitalState = Cookies.get('jwt') || localStorage.getItem('messanger');

    const [authUser, setauthUser] = useState(intitalState? JSON.parse(intitalState) : undefined);
    const [registeredUser, setRegisteredUser] = useState([]);

    if (intitalState) {
        console.log(JSON.parse(intitalState));
    } 
    try {
        useEffect(() => {
            const allRegisteredUser = async () => {
                const res = await api.get("/user/getalluser");
                const registeredUserData = res.data;
                
                const currentUserEmail = authUser?.user?.email; 
                const filteredUsers = registeredUserData.filter(user => user.email !== currentUserEmail);
                setRegisteredUser(filteredUsers);
                console.log("All registered users:", filteredUsers);
            }
            allRegisteredUser();
        }, []);

    } catch (error) {
        
    }

    
    return (
    <div>
        <AuthContext.Provider value={{authUser, setauthUser}}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export const useAuth = () => useContext(AuthContext);
