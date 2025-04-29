import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Profile = () => {

    const {user} = use(AuthContext)
    return (
        <div>

           <div className='text-3xl text-center'>
              My Profile

              <div >
                {user.email}
              </div>
           </div>
           
        </div>
    );
};

export default Profile;