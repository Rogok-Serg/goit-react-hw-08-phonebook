import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/authentificated/authSelectors';
import { logoutUser } from 'redux/authentificated/operations';
import { StyledUserMenu } from './UserMenu.styled';

const UserMenu = () => {
  const nameUser = useSelector(selectUserData);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <StyledUserMenu>
      <p>{nameUser.email}</p>
      <button onClick={handleLogout}>Logout</button>{' '}
    </StyledUserMenu>
  );
};

export default UserMenu;
