import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function UserDetails() {
  const [employees, setEmployees] = useState({});
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("userId");
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((response) => response.text())
      .then((data) => setEmployees(JSON.parse(data)));
  }, [id]);
  console.log(employees, userId);
  return (
    <div>
      <li>{employees?.name}</li>
    </div>
  );
}
