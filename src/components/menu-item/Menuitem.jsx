import React from "react";

import { withRouter } from "react-router-dom";

import "./Menuitem.scss";

function Menuitem({ title, imageUrl, size, linkUrl, match, history }) {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div
        className='background-image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>shop now</span>
      </div>
    </div>
  );
}

export default withRouter(Menuitem);
