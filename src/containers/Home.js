import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../configs/firebase';

export default function Home() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <p>AWEE</p>
      <p>{user.email}</p>
    </div>
  )
}
