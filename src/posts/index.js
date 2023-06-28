import React, { useState } from "react";
import { getDetails } from "../actions/userAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const PostUser = () => {
  const [postDeatails, setPostDeatails] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetails());
  }, []);

  const profileData = useSelector((state) => state.profile.profileData);

  useEffect(() => {
    if (profileData && profileData?.length) {
      setPostDeatails(profileData);
    }
  }, [profileData]);
  const header = ["NAME", "EMAIL", "Action"];

  return (
    <div>
      <table>
        <thead>
          <tr>
            {header.map((data) => {
              return <th>{data}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {postDeatails.map((data) => {
            return (
              <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default PostUser;
