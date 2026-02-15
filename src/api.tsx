import { useEffect, useState } from "react";

export function ShowData() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setResponse(data));
  }, [response]);

  return (
    <div>
      <div>{response ? <pre>{JSON.stringify(response, null, 2)}</pre> : "Loading..."}</div>
    </div>
  );
}
