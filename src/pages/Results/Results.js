import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import IssueExplorer from '../../components/IssueExplorer/IssueExplorer';

import styles from './Results.module.css';

function Results() {
    const location = useLocation();
    const githubUrl = location.state ? location.state.url : null;
    const [selectedFilter, setSelectedFilter] = useState('all');

    return (
        <div className={styles.resultsPage}>
            <header className={styles.resultsHeader}>
                <h1>GitHub Issue Explorer</h1>
                <p>{githubUrl || 'No URL Provided'}</p>
            </header>
            <Link className={styles.closeButton} to="/">
                <i className="fa fa-chevron-left" aria-hidden="true" />
            </Link>
            <div className={styles.filterButtons}>
                <input
                    type="button"
                    value="All Issues"
                    className={
                        selectedFilter === 'all'
                            ? styles.activeButton
                            : styles.filterButton
                    }
                    onClick={() => setSelectedFilter('all')}
                />
                <input
                    type="button"
                    value="Open Issues"
                    className={
                        selectedFilter === 'open'
                            ? styles.activeButton
                            : styles.filterButton
                    }
                    onClick={() => setSelectedFilter('open')}
                />
                <input
                    type="button"
                    value="Closed Issues"
                    className={
                        selectedFilter === 'closed'
                            ? styles.activeButton
                            : styles.filterButton
                    }
                    onClick={() => setSelectedFilter('closed')}
                />
                <input
                    type="button"
                    value="Pull Requests"
                    className={
                        selectedFilter === 'pullRequest'
                            ? styles.activeButton
                            : styles.filterButton
                    }
                    onClick={() => setSelectedFilter('pullRequest')}
                />
            </div>
            <IssueExplorer githubUrl={githubUrl} filter={selectedFilter} />
        </div>
    );
}
export default Results;
