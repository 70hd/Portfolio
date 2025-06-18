import { createContext, useState, useContext } from "react";

const isHoveringContext = createContext();

export const IsHoveringProvider = ({ children }) => {
    const [isHovering, setIsHovering] = useState("");
    return (
        <isHoveringContext.Provider value={{ isHovering, setIsHovering }}>
            {children}
        </isHoveringContext.Provider>
    );
};

export const useIsHoveringContext = () => useContext(isHoveringContext);
