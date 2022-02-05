import { createContext, useState } from "react";

export const EntityContext = createContext();

export const EntityProvider = ({ children }) => {

    const [entity, setEntity] = useState(1);

    return (

        <EntityContext.Provider value={{ entity, setEntity }}>
            { children }
        </EntityContext.Provider>

    )
}

export default EntityContext;