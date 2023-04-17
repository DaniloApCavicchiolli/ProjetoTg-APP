import { useContext } from "react";

import { AuthContext } from "../contexts/authContexts";

export const useAuth = () => useContext(AuthContext);