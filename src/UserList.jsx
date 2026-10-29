import UserCard from "./UserCard.jsx";
import { Fragment } from "react";

function UserList({ users }) {
  return (
    <section className="shadow-md p-4 rounded-md flex flex-col md:flex-row gap-5">
      {users.map(user => (
        <Fragment key={user.id}>
          <UserCard user={user} />
        </Fragment>
      ))}
    </section>
  );
}

export default UserList;
