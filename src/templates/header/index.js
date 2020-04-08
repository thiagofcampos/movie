import React from 'react';
import TopMenu from '../../organisms/topmenu';

const logo = "https://66.media.tumblr.com/252c56cff8c1bc0e68091e0f1fabfada/tumblr_nnxqrckW2i1r3ykgdo1_500.png";

function header() {
  return (
    <div>
      <TopMenu
        logo={logo}
      />
    </div>
  );
}

export default header
