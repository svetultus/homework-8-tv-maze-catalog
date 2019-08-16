import React from 'react';
import styles from './ShowPreview.module.css';

// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

export default props => {
  const { id, name, image, summary } = props;

  return (
    <div className={styles.container + ' t-preview'}>
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
