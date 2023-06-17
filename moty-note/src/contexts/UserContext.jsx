import { createContext } from 'react';


export const c_userInfo = {
    name: '',
    gender: ''
}

const UserContext = createContext();
export default UserContext;