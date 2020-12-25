import { Link } from "react-router-dom";

export default function Breadcrumbs(props) {
  let res = "";
  const crumbs = props.url
    .split("/")
    .map((item) => {
      return "/" + item;
    })
    .map((crumb, i) => {
      if (i === 0) {
        return "/";
      } else if (i === 1) {
        res += crumb;
        return res;
      } else {
        res += crumb;
        return res;
      }
    });

  if (props.url.includes("success")) {
    return (
      <Link className="breadcrumbs" to={crumbs[crumbs.length - 3]}>
        Вернуться к описанию
      </Link>
    );
  } else if (props.url.includes("mesto")) {
    return (
      <Link className="breadcrumbs" to={crumbs[crumbs.length - 2]}>
        Вернуться к описанию
      </Link>
    );
  } else {
    return (
      <>
        {crumbs.map((url, i) => (
          <Link
            className={
              i === crumbs.length - 1
                ? "breadcrumbs breadcrumbs_active"
                : "breadcrumbs breadcrumbs_inactive"
            }
            key={i}
            to={url}
          >
            {props.title[i]}
          </Link>
        ))}
      </>
    );
  }
}
