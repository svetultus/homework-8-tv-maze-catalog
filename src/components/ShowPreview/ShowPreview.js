import React from 'react';

// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

export default props => {
  const { id, name, image, summary } = props;

  return (
    <div className="t-preview ShowPreview_container">
      <div>
        <a className="t-link" href={`/shows/${id}`}>
          {name}
        </a>
        {image && <img src={image} alt={name} />}
      </div>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
  );
};
