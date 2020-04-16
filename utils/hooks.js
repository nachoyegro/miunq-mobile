import { useState, useEffect } from "react";
import * as rssParser from 'react-native-rss-parser';

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);  
    async function fetchUrl() {
      const response = await fetch(url);
      const json = await response.json();    
      setData(json);
      setLoading(false);
    }  useEffect(() => {
      fetchUrl();
    }, []);
    return [data, loading];
  }

function useRSSFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);  
  async function fetchUrl(){
    const response = await fetch(url);
    const text = await  response.text();
    const rss = rssParser.parse(text);
    setData(rss);
    setLoading(false);
  } useEffect(() => {
    fetchUrl();
    }, []);
  return [data, loading]

}

export { useFetch, useRSSFetch };