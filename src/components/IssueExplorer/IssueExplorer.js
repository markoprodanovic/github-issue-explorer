import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/core';

import IssueCard from '../IssueCard/IssueCard';

import styles from './IssueExplorer.module.css';

// state can be: "all", "open", "closed", or "pullRequest"

function IssueExplorer({ githubUrl, filter }) {
    const [issues, setIssues] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const token = process.env.REACT_APP_ACCESS_KEY;
        const octokit = new Octokit({ auth: token });

        const [, , server, owner, repo] = githubUrl.split('/');

        if (server !== 'github.com') {
            setError(
                '😅 Whoops! Please make sure your url begins with "https://github.com/"'
            );
            return;
        }

        // this will only grab the first 100 results
        // in a more complete implementation we'd make call for the next page every time the user
        // either goes to the next page or scrolls to the bottom of the page (infinate scroll)
        setLoaded(false);
        octokit
            .request(`GET /repos/${owner}/${repo}/issues`, {
                per_page: 100,
                page: 1,
                state: filter === 'pullRequest' ? 'all' : filter
            })
            .then((res) => {
                // if selected filter is PR then filter ALL to just those with pull_request key
                if (filter === 'pullRequest') {
                    return res.data.filter((issue) => issue.pull_request);
                }
                return res.data;
            })
            .then((filteredData) => {
                if (filteredData.length === 0) {
                    setError('👀 No issues to see here');
                    return;
                }
                setIssues(filteredData);
                setLoaded(true);
            })
            .catch((err) => {
                setError(
                    `😅 Whoops! There was a problem fetching issues from: ${githubUrl} -- response came back with status=${err.status}`
                );
            });
    }, [githubUrl, filter]);

    const issueCards = issues.map((i) => (
        <IssueCard
            key={i.id}
            title={i.title}
            body={i.body}
            labels={i.labels}
            state={i.pull_request ? 'pr' : i.state}
        />
    ));

    // holds the content that will get displayed if we haven't had an API error
    const content = loaded ? (
        <div className={styles.grid}>{issueCards}</div>
    ) : (
        <div className={styles.message}>Loading ...</div>
    );

    return (
        <div className={styles.container}>
            {error ? <div className={styles.message}>{error}</div> : content}
        </div>
    );
}

export default IssueExplorer;
