import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigateTo = useNavigate();

  function handleLogout() {
    sessionStorage.clear();
    console.log(sessionStorage);
    navigateTo("/");
  }
  return (
    <>
      {sessionStorage.user && 
      (
        <button onClick={handleLogout}>
          <img src="src/assets/logout.png" alt="" />
        </button>
      )}
    </>
  );
}
