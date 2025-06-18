import { createContext, useState, useContext, useEffect } from "react";

const isHoveringContext = createContext();

export const IsHoveringProvider = ({ children }) => {
    const [isHovering, setIsHovering] = useState("");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const onResize = () => setIsMobile(window.innerWidth < 640);
      onResize();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        <isHoveringContext.Provider
          value={
            isMobile
              ? { isHovering: false, setIsHovering: () => {} }
              : { isHovering, setIsHovering }
          }
        >
            {children}
        </isHoveringContext.Provider>
    );
};

export const useIsHoveringContext = () => useContext(isHoveringContext);
