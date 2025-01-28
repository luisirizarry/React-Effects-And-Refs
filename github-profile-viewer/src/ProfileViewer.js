import React, { useState, useEffect } from "react";
import axios from "axios";

/** GitHub Profile Component --- shows info from GH API */

const ProfileViewer = ({ user="luisirizarry" }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadProfile(){
      
      const res = await axios.get(`https://api.github.com/users/${user}`);
      setData(res.data.name);
    }
    loadProfile();
  }, [user])

  return (
    <h3>{data ? data : 'Loading...'}</h3>
  )
}
// end

export default ProfileViewer;
