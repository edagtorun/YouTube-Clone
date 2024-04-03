import { createContext, useEffect, useState } from "react";
import { categories } from "../constant";
import api from "../utils/api";

//1. Context temelini olustur
export const VideoContext = createContext();

//2. Saglayici bilesenini olsutur

export const VideoProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [videos, setVideos] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // secilen type'i belirle
    const type = selectedCategory.type;

    //secilen kategorinin type'i menu ise fonksiyonu durdur
    if (type === "menu") return;
    //yuklenmeyi true'ya cek
    setIsLoading(true);

    // istek atilacak url'i belirle
    const url =
      type === "home"
        ? "/home"
        : type === "trendig"
        ? "/trending"
        : type === "category"
        ? `/search?query=${selectedCategory.name}`
        : "";
    // api istegi at ve durumu state aktar
    api
      .get(url)
      .then((res) => setVideos(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [selectedCategory]);

  return (
    <VideoContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        videos,
        error,
        isLoading,
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};
