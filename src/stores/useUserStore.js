import {create} from 'zustand'

const USER_STORAGE_KEY = 'userdetails'

const getUserFromLS = () => {
    try {
        const user = localStorage.getItem(USER_STORAGE_KEY);
        return user? JSON.parse(user) : null;
    } catch (error) {
        console.log('error fetching user from ls', error )
    }
}

const useUserStore  = create((set)=> ({
    userDetails: getUserFromLS() ||  {},

    saveIdName : (id,name) => set((state) =>  {

        let updated ;

        if (Object.keys(state.userDetails).length>0) {
            updated = {...state.userDetails, id, name};
        }
        else {
            updated = { id, name}

        }
      
        console.log("details saved", updated)

        try {
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updated) );
        }
        catch(err) {
            console.log('error setting user to ls', err )
        }

        return {userDetails : updated }
    } ),

    saveOtherDetails: (newObj) => set((state) => {
       
        let updated ;

        if (Object.keys(state.userDetails).length>0) {
            updated = {...state.userDetails, ...newObj};
        }
        else {
            updated = {...newObj};
        }

        console.log("details saved", updated);

        try {
            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(updated) );
        }
        catch(err) {
            console.log('error setting user to ls', err )
        }
        
        return {userDetails: updated};
        
    } )


}))

export default useUserStore;