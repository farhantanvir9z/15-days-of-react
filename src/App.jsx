import Header from "./Header.jsx";
import { useState } from "react";

import SubHeader from "./SubHeader.jsx";
import UserList from "./UserList.jsx";

function App() {
  // Mock data
  const USERS = [
    {
      id: crypto.randomUUID(),
      name: "Farhan",
      age: 33,
      occupation: "Software Engineer"
    },
    {
      id: crypto.randomUUID(),
      name: "Ayesha",
      age: 28,
      occupation: "UI/UX Designer"
    },
    {
      id: crypto.randomUUID(),
      name: "Tanvir",
      age: 35,
      occupation: "Product Manager"
    },
    {
      id: crypto.randomUUID(),
      name: "Nusrat",
      age: 26,
      occupation: "Frontend Developer"
    },
    {
      id: crypto.randomUUID(),
      name: "Rahim",
      age: 41,
      occupation: "Data Scientist"
    }
  ];
  const testUser = [
    {
      id: crypto.randomUUID(),
      name: "Sadia",
      age: 30,
      occupation: "Marketing Specialist"
    },
    {
      id: crypto.randomUUID(),
      name: "Imran",
      age: 29,
      occupation: "DevOps Engineer"
    },
    {
      id: crypto.randomUUID(),
      name: "Mehnaz",
      age: 32,
      occupation: "QA Engineer"
    },
    {
      id: crypto.randomUUID(),
      name: "Shakil",
      age: 27,
      occupation: "Backend Developer"
    },
    {
      id: crypto.randomUUID(),
      name: "Tasnim",
      age: 34,
      occupation: "Business Analyst"
    }
  ];

  /* States */
  
  const [users, setUsers] = useState(USERS)
  const [userCount, setUserCount] = useState(5)

  function addUser() {
    const index = Math.floor((Math.random() * 5))
    const selectedUser = testUser[index]

    const updatedUsers = [...users, selectedUser]
    setUsers(updatedUsers)
  }
  
  return (
    <div className="p-5 space-y-4">
      <Header />
      <SubHeader userCount={userCount} onSettingUserCount={setUserCount} onAddingUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
