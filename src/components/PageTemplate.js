import { Link } from "react-router-dom";

export default function PageTemplate(props) {
    return(
        <div className="page-container">
            <Link className="page-container__link" to={props.navLink}>{props.navLinkText}</Link>
            <h1 className="page-container__title">{props.title}</h1>
            <img className="page-container__progress-bar" src={props.progressBar} alt="" />
        </div>
    ); 
} 