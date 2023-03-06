import React,{ useEffect, useState,useContext } from "react";
import useAxios from "./useAxios";
import AuthContext from "../context/AuthContext";
import UserInfo from "../components/UserInfo";

function User() {
  const [res, setRes] = useState("");
  const api = useAxios();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/test/");
        setRes(response.data.response);
      } catch {
        setRes("Something went wrong");
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <section>
        {user && <UserInfo user={user} />}
    </section>
    </div>
  );
}

export default User;