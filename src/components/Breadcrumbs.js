import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import cn from 'classnames';

export default function Breadcrumbs(props) {
  let res = "";
  const crumbs = props.url
    .split("/")
    .map((item) => {
      return `/${item}`;
    })
    .map((crumb, i) => {
      if (i === 0) {
        return "/";
      } else {
        res = `${res}${crumb}`;
        return res;
      }
    });

  if (props.url.includes("success")) {
    return (
      <Link className="breadcrumbs" to={crumbs[crumbs.length - 4]}>
        Вернуться к описанию
      </Link>
    );
  } else if (props.url.includes("mesto")) {
    return (
      <Link className="breadcrumbs" to={crumbs[crumbs.length - 3]}>
        Вернуться к описанию
      </Link>
    );
  } else if (props.url.includes("result")) {
    return (
      <Link className="breadcrumbs" to="/">
        Вернуться на главную
      </Link>
    );
  } else {
    return crumbs.map((url, i) => (
      <Link
        className={cn('breadcrumbs', {'breadcrumbs_active': i === crumbs.length - 1}, {'breadcrumbs_inactive': i !== crumbs.length - 1})}
        key={uuidv4()}
        to={url}
      >
        {props.title[i]}
      </Link>
    ))
  }
}
