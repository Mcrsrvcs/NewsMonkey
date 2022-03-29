import React from "react";

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date ,source} = props;
    let string = date;
    let d = new Date(string);
    return (
      <div>
        <div className="card rounded">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body bg-light rounded">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
              {source.name}
              <span className="visually-hidden">unread messages</span>
            </span>
            <p className="text-card">
              <small className="text-muted">
                {" "}
                {author ? "By " + author : ""} on {d.toUTCString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

  export default NewsItem
