import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function useHackerFetchAPI(initialUrl, initialData){
    const queryRef = useRef('');
    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const handleFetchData = useRef({});
    const [url, setUrl] = useState(
        initialUrl
      );
    handleFetchData.current = async () => {
        setLoading(true);
        try {
          const response = await axios.get(url);
            setData(response.data || []);
            setLoading(false);  
        } catch (error) {
          setLoading(false);
          setErrorMessage(`The error happend ${error}`);
        }
      };
      useEffect(() => {
        handleFetchData.current();
      }, [url]);
      return {
          data, loading, errorMessage, setUrl
      }
}