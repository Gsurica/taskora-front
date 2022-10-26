import { QueryKey } from "react-query";

export const loggedUserKey = (userId: string): QueryKey => ["loggedUser", userId]