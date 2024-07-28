import { useState, useEffect } from 'react';
import axios from "axios";

function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);
  
    useEffect(() => {
      setLoading(true);
  
      axios
        .get<T>(url)
        .then((response) => {
            setData(response.data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err);
            setLoading(false);
        });
    }, [url]);
  
    return { data, loading, error };
  }
  

export default useFetch
