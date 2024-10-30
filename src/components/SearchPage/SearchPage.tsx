import React from 'react';
import styles from './SearchPage.module.css';
import Typeahead from "../Typeahead/Typeahead";

const SearchPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Smart Search</h1>
                <p className={styles.subtitle}>Start typing to search...</p>
                <Typeahead />
            </div>
        </div>
    );
};

export default SearchPage;