import { CollectionConfig } from 'payload/types';
import React from 'react';
import { customConfig } from '../payload.config';

interface DashboardProps {
    collections: CollectionConfig[];
}

export const DashboardCard: React.FC<CollectionConfig> = (props) => {
    const { labels, slug } = props;
    return (
        <div className="card card-home-pages card--has-onclick" id="card-home-pages" style={{ width: '100%' }}>
            <h5>{labels.plural as string}</h5>
            <div className="card__actions">
                <a
                    type="button"
                    className="btn btn--style-icon-label btn--icon btn--icon-style-with-border btn--icon-only btn--round btn--size-medium btn--icon-position-right"
                    href={`/admin/collections/${slug}/create`}
                >
                    <span className="btn__content">
                        <span className="btn__icon">
                            <svg className="icon icon--plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
                                <line x1="12.4589" y1="16.9175" x2="12.4589" y2="8.50115" className="stroke"></line>
                                <line x1="8.05164" y1="12.594" x2="16.468" y2="12.594" className="stroke"></line>
                            </svg>
                        </span>
                    </span>
                </a>
            </div>
            <a
                type="button"
                className="btn card__click btn--style-none btn--icon-style-without-border btn--size-medium btn--icon-position-right"
                href={`/admin/collections/${slug}`}
            >
                <span className="btn__content"></span>
            </a>
        </div>
    );
};

const CHARACTER_SHEETS = ['fifth-edition-character', 'kids-on-brooms-character'];
const CAMPAIGNS = ['campaigns', 'notes'];

const cardSectionWrapperStyles = {
    display: 'grid',
    width: '100%',
    gap: '2rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
};
const cardSectionHeaderStyles = {
    marginBottom: '-1rem',
};

export const Dashboard: React.FC<DashboardProps> = ({ collections }) => {
    const characterSheets: CollectionConfig[] = [],
        campaigns: CollectionConfig[] = [],
        others: CollectionConfig[] = [];

    collections.forEach((collection) => {
        if (CHARACTER_SHEETS.includes(collection.slug)) {
            characterSheets.push(collection);
        } else if (CAMPAIGNS.includes(collection.slug)) {
            campaigns.push(collection);
        } else {
            others.push(collection);
        }
    });

    return (
        <div className="template-default__wrap">
            <div className="dashboard">
                <div className="eyebrow">
                    <div className="gutter--left gutter--right eyebrow__wrap">
                        <nav className="step-nav">
                            <span>Book of Names</span>
                        </nav>
                    </div>
                </div>
                <div
                    className="gutter--left gutter--right"
                    style={{
                        display: 'flex',
                        gap: '3rem',
                        flexDirection: 'column',
                        marginBottom: '10rem',
                    }}
                >
                    <h2 style={cardSectionHeaderStyles}>Character Sheets</h2>
                    <span style={cardSectionWrapperStyles}>
                        {characterSheets.map((collection) => (
                            <DashboardCard {...collection} key={collection.slug} />
                        ))}
                    </span>

                    <h2 style={cardSectionHeaderStyles}>Campaigns</h2>
                    <span style={cardSectionWrapperStyles}>
                        {campaigns.map((collection) => (
                            <DashboardCard {...collection} key={collection.slug} />
                        ))}
                    </span>

                    <h2 style={cardSectionHeaderStyles}>Other</h2>
                    <span style={cardSectionWrapperStyles}>
                        {others.map((collection) => (
                            <DashboardCard {...collection} key={collection.slug} />
                        ))}
                    </span>
                </div>
            </div>
            <div className="gutter--left gutter--right" style={{ width: '100%', textAlign: 'right' }}>
                <small style={{ width: '100%', textAlign: 'right' }}>
                    <i>v{customConfig.appVersion}</i>
                </small>
            </div>
        </div>
    );
};
