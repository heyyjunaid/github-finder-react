import { searchUsers } from "../../context/github/GithubActions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setSearchText,
  setUsers,
} from "../../Store/modules/Github";
import { setAlert } from "../../Store/modules/Alert";

const UserSearch = () => {
  const [text, setText] = useState(
    useSelector((state) => state?.github?.searchText || "")
  );
  const users = useSelector((state) => state?.github?.users || []);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("3###");
    if (text.trim() === "") {
      console.log("came here ");
      dispatch(setAlert({ msg: "Please enter something", type: "error" }));
      setTimeout(() => {
        dispatch(setAlert({ msg: "", type: "" }));
      }, 1000);
    } else {
      dispatch(setLoading(true));
      const users = await searchUsers(text);
      dispatch(setSearchText(text));
      dispatch(setUsers(users));
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
          onClick={() => {
            dispatch(setUsers([]));
          }}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default UserSearch;
