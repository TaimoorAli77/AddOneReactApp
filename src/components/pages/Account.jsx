import { AuthData } from "../../auth/AuthWrapper";
const Account = () => {
    const { user } = AuthData();
  return (
    <div>
      <h1>Account of {user.name} </h1>
    </div>
  );
}

export default Account;
