import { useLocation } from "react-router-dom";

const useBreadcrumbs = () => {
  const location = useLocation();

  const pathName = location.pathname.split("/").filter((x) => x);

  const breadcrumb = pathName.map((value, index) => {
    const to = `/${pathName.slice(0, index + 1).join("/")}`;

    return {
      label: value.charAt(0).toUpperCase() + value.slice(1),
      to,
      isLast: index === pathName.length - 1,
    };
  });

  return breadcrumb;
};

export default useBreadcrumbs;
