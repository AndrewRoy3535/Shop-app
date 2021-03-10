import React from "react";
import Menuitem from "../menu-item/Menuitem";
import { connect } from "react-redux";

import "./directory.scss";
import { selectDirectorySection } from "../../redux/directory/directory-selector";
import { createStructuredSelector } from "reselect";

const Directory = ({ section }) => {
  return (
    <div className='directory-menu'>
      {section.map(({ title, imageUrl, id, size }) => (
        <Menuitem key={id} title={title} imageUrl={imageUrl} size={size} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  section: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
