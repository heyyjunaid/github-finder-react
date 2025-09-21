import PropTypes from "prop-types";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

const RepoItem = ({ repo }) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className="mb-2 rounded-md card bg-base-200 hover:bg-base-300 transition-colors duration-300">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={html_url} className="hover:underline">
            <FaLink className="inline mr-1" /> {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          <div className="badge badge-info badge-lg flex items-center gap-1">
            <FaEye /> {watchers_count}
          </div>
          <div className="badge badge-success badge-lg flex items-center gap-1">
            <FaStar /> {stargazers_count}
          </div>
          <div className="badge badge-error badge-lg flex items-center gap-1">
            <FaInfo /> {open_issues}
          </div>
          <div className="badge badge-warning badge-lg flex items-center gap-1">
            <FaUtensils /> {forks}
          </div>
        </div>
      </div>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
