import React from 'react';

import styles from './styles.module.css';


interface ILoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
}

const Loading: React.FC<ILoadingProps> = ({ isLoading, children }) => {
  return (
    <React.Fragment>
      {/* todo: replace text with a spinner */}
      {isLoading ? (
        <div className={styles.loading}>Loading plans ...</div>
      ) : (
        children
      )}
    </React.Fragment>
  );
};

export default Loading;
