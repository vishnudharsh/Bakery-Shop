import { useAuth } from "../../components/context/auth";
import UserMenu from "./usermenu";

function Dashboard() {
    const [auth] = useAuth();
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-lg-3">
                        <UserMenu />
                    </div>
                    <div className="col-md-8">
                        <div className="card w-75 p-3">
                            <h3>User Name: {auth?.user?.name}</h3>
                            <h3>User Email: {auth?.user?.email}</h3>
                            <h3>User Address: {auth?.user?.address}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard;