import React from "react";
import PropTypes from "prop-types";
import './YoutubeEmbed.css'

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
<iframe width="560" height="315" src="https://www.youtube.com/embed/IH4V_e08UhA?si=meuEZOOo_3seCLL6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;