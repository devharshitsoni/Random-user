import Button from "./Components/Button";
import "./App.css";
import TextField from "./Components/TextField";
import User from "./Components/User";
import { useRef, useState } from "react";

function App() {
  const maxUsers = 100; // Set a maximum number of users for better UI handling
  const count = useRef(0);
  const [users, setUsers] = useState([]);

  const submit = () => {
    // Limit the count to a reasonable maximum
    const requestedUsers = Math.min(count.current, maxUsers);
    let url = `https://randomuser.me/api?results=${requestedUsers}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data["results"]))
      .catch((error) => {
        console.error("Error fetching random users:", error);
        setUsers([]); // Clear users in case of an error
      });
  };

  const handleOnChange = (e) => {
    const inputValue = parseInt(e.target.value);
    count.current = inputValue;
  };

  return (
    <div className="page-wrapper">
      <div className="hero-card">
        <h1 className="text-5xl mb-6">Get random users</h1>
        <div className="flex flex-col items-center">
          <TextField
            type="text"
            placeholder="Enter the number of users"
            className="h-12 px-5 rounded-md border border-white focus:outline-none focus:border-gray-500 text-lg text-black decoration-transparent overflow-hidden"
            onChange={handleOnChange}
          />
          <Button
            buttonName="Get random users"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
            handleClick={submit}
          />  
        </div>
      </div>
      <div className="users ">
        {users.map((user, key) => (
          <User key={key} {...user} />
        ))}
      </div>
    </div>
  );
}

export default App;
