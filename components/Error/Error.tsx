import React from 'react';

import styles from './styles.module.css';

interface IErrorProps {
  isError: boolean;
  children: React.ReactNode;
}

const Error: React.FC<IErrorProps> = ({ isError, children }) => {
  return (
    <React.Fragment>
      {isError ? (
        <div className={styles.error}>
          Something went wrong.
        </div>
      ) : (
        children
      )}
    </React.Fragment>
  );
};

export default Error;
