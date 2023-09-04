import axios from "axios";
import { useEffect, useState } from "react";


const useApi = (url: string): { data: any; isLoading: boolean; error: string | null } => {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(url);
          setData(response.data);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, [url]);
  
    return { data, isLoading, error };
  };

export default useApi;