import React, { createContext, useState, useCallback } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { api } from '../config/api'


const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {
    
    const [storageId, setStorageId, removeStorageId] = useLocalStorage('@authApp: id');
    const [storageNivel, setStorageNivel, removeStorageNivel] = useLocalStorage('@authApp: nivel');

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    const signIn = useCallback( async (nome, senha) => {

        setLoading(true);
        const response = await api.post('/Login', {
            nome: nome,
            password: senha,
        });
        setStorageId(response.data.id);
        setUser(response.data);
        setStorageNivel(response.data.nivelAcesso)
        setLoading(false);
        
    }, [setStorageId, setStorageNivel]);

    
    const signOut = useCallback( () => {
    
        setLoading(true);
        removeStorageId();
        removeStorageNivel();
        setUser({});
        setLoading(false);
    }, [removeStorageId, removeStorageNivel]);

    
    return (

        <AuthContext.Provider value={{ 
            signed: (storageId && storageNivel) ? true : false, 
            user, 
            signIn, 
            signOut, 
            loading 
        }}>
            { children }
        </AuthContext.Provider>
    )
}


export default AuthContext;