import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
    const token = localStorage.getItem("token");
    const user = useSelector((state) => state.Reducer.user);

    return token && user.role == "admin" ? (
        children
    ) : (
        <Navigate to="/signUp"></Navigate>
    );
}
export default AdminRoute;