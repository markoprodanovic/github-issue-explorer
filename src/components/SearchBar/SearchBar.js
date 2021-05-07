import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './SearchBar.module.css';

function SearchBar() {
    const [githubUrl, setGithubUrl] = useState('');
    const history = useHistory();

    const placeholderText = 'Paste a link to a GitHub repo!';

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push({
            pathname: '/results',
            state: {
                url: githubUrl
            }
        });
    };
    return (
        <form className={styles.searchBar} onSubmit={handleSubmit}>
            <i className="fas fa-search" />
            <input
                type="url"
                placeholder={placeholderText}
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
            />
        </form>
    );
}

export default SearchBar;
