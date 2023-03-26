import { Access } from 'payload/types';

export const hasBearerAuthHeader: Access = ({ req }) => {
    console.log('TEST');
    return req.headers['authorization'] === `Bearer ${process.env.PAYLOAD_API_KEY}`;
};
