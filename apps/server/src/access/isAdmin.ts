import { Access, FieldAccess } from "payload/types";
import { User } from "../payload-types";

export const isStringArray = (value: unknown): value is string[] => {
    return (
        Array.isArray(value) && value.every((item) => typeof item === "string")
    );
};

export const isAdmin: Access<any, User> = ({ req: { user } }) => {
    // Return true or false based on if the user has an admin role
    if (isStringArray(user?.roles)) {
        return Boolean(user?.roles?.includes("admin"));
    }
    return false;
};

export const isAdminFieldLevel: FieldAccess<{ id: string }, unknown, User> = ({
    req: { user },
}) => {
    // Return true or false based on if the user has an admin role
    if (isStringArray(user?.roles)) {
        return Boolean(user?.roles?.includes("admin"));
    }
    return false;
};
