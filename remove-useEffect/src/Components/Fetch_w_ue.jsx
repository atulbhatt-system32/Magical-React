import { useEffect, useState } from "react";

export default function Fetch_w_ue() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
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
