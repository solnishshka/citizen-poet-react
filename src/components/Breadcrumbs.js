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

  return (
    <>
      {crumbs.map((url, i) => (
        <Link className={i === crumbs.length - 1 ? "categories__link categories__link_active" : "categories__link"} key={i} to={url}>
          {props.title[i]}
        </Link>
      ))}
    </>
  );
}
