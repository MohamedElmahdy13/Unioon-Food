import { useEffect, useRef, useState } from "react";

const useShowSlider = (items) => {
  const [useSlider, setUseSlider] = useState(false);
  const containerRef = useRef(null);
  const checkSpaceAvailability = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      const itemWidth = 150; // Approximate width of each card item (adjust as needed)
      const totalItemsWidth = itemWidth * items.length; // Calculate width based on item count

      // Debugging output
      console.log("Container Width:", containerWidth);
      console.log("Total Items Width:", totalItemsWidth);

      // Set useSlider based on available space
      setUseSlider(totalItemsWidth > containerWidth);
    }
  };

  useEffect(() => {
    // Initial check on mount
    checkSpaceAvailability();

    // Resize event listener
    const handleResize = () => {
      checkSpaceAvailability();
    };
    window.addEventListener("resize", handleResize);

    // Clean up listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [items.length]); // Re-run effect if items change
  return { useSlider, containerRef, checkSpaceAvailability };
};

export default useShowSlider;
