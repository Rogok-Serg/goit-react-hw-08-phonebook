import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/authentificated/authSelectors';
import { logoutUser } from 'redux/authentificated/operations';

const UserMenu = () => {
  const nameUser = useSelector(selectUserData);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <p>{nameUser.email}</p>
      <button onClick={handleLogout}>Logout</button>{' '}
    </div>
  );
};

export default UserMenu;
