import { User } from '@prisma/client';
import Ad from '../Ad';
import Birthdays from './Birthdays';
import UserMediaCard from './UserMediaCard';
import { Suspense } from 'react';
import UserInfoCard from './UserInfoCard';
import FriendRequests from './FriendRequests';

const RightMenu = ({ user }: { user?: User }) => {
  console.log('PPPPPPPPPPPPP', user);
  return (
    <div className='flex flex-col gap-6'>
      {user ? (
        <>
          <Suspense fallback='loading...'>
            <UserInfoCard user={user} />
          </Suspense>
          <Suspense fallback='loading...'>
            <UserMediaCard user={user} />
          </Suspense>
        </>
      ) : null}
      <FriendRequests />
      <Birthdays />
      <Ad size='md' />
    </div>
  );
};

export default RightMenu;
