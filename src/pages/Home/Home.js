import React from 'react';

import SearchBar from '../../components/SearchBar/SearchBar';

import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.homepage}>
            <div className={styles.container}>
                <p className={styles.logo}>🧭</p>
                <h1>GITHUB ISSUE EXPLORER</h1>
                <SearchBar />
            </div>
        </div>
    );
}

export default Home;
