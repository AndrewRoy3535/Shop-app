import React, { Component } from "react";
import Menuitem from "../menu-item/Menuitem";
import SECTIONS from "./directory-data";

import "./directory.scss";

export class directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: SECTIONS,
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.section.map(({ title, imageUrl, id, size}) => (
          <Menuitem key={id} title={title} imageUrl={imageUrl} size={size}/>
        ))}
      </div>
    );
  }
}

export default directory;
