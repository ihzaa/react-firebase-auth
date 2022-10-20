import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../configs/firebase'
export default function ProtectedRoute({ children, loginOnly = true }) {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  if (!user && loginOnly) {
    navigate('login');
    return;
  }

  if (user && !loginOnly) {
    navigate('/')
    return;
  }

  return children;
}
