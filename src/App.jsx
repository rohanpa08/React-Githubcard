import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./component/UserList";
import SearchBar from "./component/SearchBar";
import './index.css';

const GITHUB_API_URL = "https://api.github.com/users";

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setError("Please enter a username.");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(`${GITHUB_API_URL}/${query}`);
      
      setUsers([response.data]); // Store the user in an array for mapping

    } catch (error) {
      setError("Error fetching data. User not found.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center vh-100">
  <h1 className="text-primary">Github Card</h1>
  <SearchBar handleSearch={handleSearch} />

  {loading && (
    <div className="text-center my-3">
      <div className="spinner-border" role="status"></div>
    </div>
  )}

  {error && <div className="alert alert-danger">{error}</div>}

  <UserList users={users} />
</div>

  );
}

export default App;
