import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";
import { useContext, useState } from "react";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      setAlert("Please enter something", "error");
    } else {
      dispatch({ type: "SET_LOADING" });
      const users = await searchUsers(text);
      dispatch({
        type: "GET_USERS",
        payload: users,
      });
      setText("");
    }
  };

  return (
    <div className="flex flex-col xl:flex-row items-center gap-6 mb-10">
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="w-full flex items-center gap-3">
        <input
          type="text"
          className="input input-bordered input-lg w-full placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="🔍 Search GitHub username..."
          value={text}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="btn btn-primary btn-lg px-8 shadow-md hover:scale-105 transition-transform"
        >
          Go
        </button>
      </form>

      {/* Clear Button */}
      {users.length > 0 && (
        <button
          className="btn btn-outline btn-error btn-lg shadow hover:scale-105 transition-transform"
          onClick={() => dispatch({ type: "CLEAR_USERS" })}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default UserSearch;
