import React from 'react';

import styles from './styles.module.css';

interface IErrorProps {
  isError: boolean;
  children: React.ReactNode;
}

const Error: React.FC<IErrorProps> = ({ isError, children }) => {
  // todo: replace text with an error page containing some meaningful advice
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
