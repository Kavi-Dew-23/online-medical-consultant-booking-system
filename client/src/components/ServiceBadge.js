import React from 'react';
import "../styles/LayoutStyles.css";

function ServiceBadge(props) {
    const imgUrl = props.url;
    const title = props.title;

  return (
    <div>
        <img src={imgUrl} alt='eye'/>
        <h1 className='title'>{title}</h1>
    </div>
  )
}

export default ServiceBadge;