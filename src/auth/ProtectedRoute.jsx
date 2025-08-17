import { useAuth } from "./AuthContext";
import { Navigate } from "react-router";

export default function ProtectedRoute({children}) {
    const {activeUser} = useAuth();

    if (!activeUser) return <Navigate to='/login' replace/>

    return (
        <>
        {children}
        </>
    )
}