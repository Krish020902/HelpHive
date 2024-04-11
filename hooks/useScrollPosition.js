// useScrollPosition.js
import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

const useScrollPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollY(event.nativeEvent.contentOffset.y);
    };
    console.log(scrollY);

    const subscription = Dimensions.addEventListener("change", handleScroll);

    return () => {
      subscription.remove();
    };
  }, []);

  return { scrollY };
};

export default useScrollPosition;
