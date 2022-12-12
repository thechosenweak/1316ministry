import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserData } from '../Redux/reducer/User';

export default function AppProvider({children}) {

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.userData);

    React.useEffect(() => {
        //dispatch(setUserData({fname: 'Xanctus', lname: 'Dri', status: 'Active'}))
    },[])

    return (
        <>
            {children}
        </>
    )
}
