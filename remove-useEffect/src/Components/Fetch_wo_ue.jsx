import { useState } from "react";

function getEmployeesData() {
  return fetch(
    "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001",
    {
      method: "GET",
    }
  ).then((response) => response.json());
}

export default function Fetch_wo_ue() {
  const [data, setData] = useState(() => {
    getEmployeesData().then((data) => setData(data));
    return null; // Initial data state
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      {data &&
        data?.map((item) => {
          return (
            <div
              style={{
                display: "flex",
                gap: "1rem",
                color: "white",
                border: "1px solid white",
                justifyContent: "space-evenly",
              }}
              key={item.id}
            >
              <p>{item.firstName}</p>
              <p>{item.lastName}</p>
              <p>{item.email}</p>
              <p>{item.phone}</p>
            </div>
          );
        })}
    </div>
  );
}
