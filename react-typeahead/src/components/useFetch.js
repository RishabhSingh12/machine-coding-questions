import { useEffect } from "react";

const useFetch = (value) => {
  const fetchData = async () => {
    const response = await fetch(
      `https://swapi.dev/api/people/?search=${value}`
    );
    try {
      if (!response.ok) throw new Error(response.statusText);
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [value]);

  return [];
};

export { useFetch };
