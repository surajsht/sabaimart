import { Link } from "react-router-dom";
import useBreadcrumb from "../hooks/useBreadcrumbs";

const Breadcrumb = () => {
  const breadcrumb = useBreadcrumb();

  return (
    <div className="py-6">
      <ul className="flex items-center gap-3">
        <li>
          <Link to="/" className="text-blue-500">
            Home
          </Link>
        </li>

        {breadcrumb.map((item) => {
          const { label, to, isLast } = item;

          return (
            <li key={label} className="flex items-center gap-3">
              <span>/</span>
              {isLast ? (
                <span className="text-gray-500"> {label} </span>
              ) : (
                <Link to={to} className="text-blue-500">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
