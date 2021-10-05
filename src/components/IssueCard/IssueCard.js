import React from 'react';

import styles from './IssueCard.module.css';

/* eslint-disable-next-line */
function IssueCard({ title, body, labels, state }) {
    const displayLabels = labels.map((label) => <li>{`● ${label.name}`}</li>);

    let displayBody = 'No description provided';

    if (body == null) {
        displayBody = '';
    } else if (body.length > 0 && body.length < 101) {
        displayBody = body;
    } else if (body.length >= 100) {
        displayBody = `${body.substring(0, 100)}...`;
    }

    let stateIcon;
    if (state === 'closed') {
        stateIcon = (
            <img
                src={`${process.env.PUBLIC_URL}/icons/issue-closed.svg`}
                alt="Issue Closed"
            />
        );
    } else if (state === 'pr') {
        stateIcon = (
            <img
                src={`${process.env.PUBLIC_URL}/icons/pull-request.svg`}
                alt="Pull Request"
            />
        );
    } else {
        stateIcon = null;
    }

    return (
        <div className={styles.issueCard}>
            <div className={styles.issueHeader}>
                <h2>{title}</h2>
                {stateIcon}
            </div>
            <div className={styles.issueContents}>
                <p>{displayBody}</p>
                <ul>{displayLabels}</ul>
            </div>
        </div>
    );
}

export default IssueCard;
