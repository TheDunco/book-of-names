import { Access } from 'payload/config';
import { hasBearerAuthHeader } from './hasBearerAuthHeader';

export const isAdminOrSelf: Access = ({ req }) => {
    const { user } = req;
    // Need to be logged in
    if (user) {
        // If user has role of 'admin'
        if (user.roles?.includes('admin')) {
            return true;
        }

        // If any other type of user, only provide access to themselves
        return {
            id: {
                equals: user.id,
            },
        };
    }

    if (hasBearerAuthHeader({ req })) {
        return true;
    }

    // Reject everyone else
    return false;
};
