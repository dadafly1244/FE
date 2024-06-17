import { FC, FormEvent, useState } from "react";
import axios, { AxiosError } from "axios";

const Login: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios({
        baseURL: "http://localhost:5000",
        method: "POST",
        url: "/login",
        auth: {
          username,
          password,
        },
        headers: {
          "Content-Type": ["application/json", "text/xml", "application/xml"],
        },
        withCredentials: true,
      });
      console.log(response.data);
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.error(axiosError.response.data);
      } else {
        console.error(axiosError.message);
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
