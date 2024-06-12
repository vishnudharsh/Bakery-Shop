import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinners from './spinner';
import { useAuth } from "../context/auth";

export default function AdminRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();

    useEffect(() => {
        const authCheck = async () => {
            const url = "http://localhost:9000/api/v1/auth/admin-auth";
            const res = await axios.get(url);
            if (res.data.ok) {
                setOk(true);
            } else {
                setOk(false);
            }
        }
        if (auth?.token) authCheck();
    }, [auth?.token]);

    return ok ? <Outlet /> : <Spinners path="" />;
}