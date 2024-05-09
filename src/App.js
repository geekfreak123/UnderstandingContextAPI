import "./styles.css";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";
import Login from "./components/Login";

export default function App() {
  return (
    <UserContextProvider>
      <h1>Let's Learn Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}
