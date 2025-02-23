import ProfilePage from './ProfilePage';
import UserDetails from './components/UserDetails';
import UserInfo from './components/UserInfo';
import UserContext from './UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );

  
    
};

export default App;