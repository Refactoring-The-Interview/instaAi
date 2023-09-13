import { Children, ReactNode, createContext, useState } from "react";
import { UserProps } from "./types";

interface MyUserContextProperties {
    user: UserProps;
    setUser(user: UserProps): void;
}

const defaultUser = {
    userId: 0,
    name: "",
    bio: "",
    fallows: 0,
    creations: 0,
    favorites: [],
};

export const MyUserContext = createContext<MyUserContextProperties>({
    user: defaultUser,
    setUser: () => {},
});

interface UserContextProviderProps {
    children: ReactNode;
}

export const MyUserContextProvider = ({
    children,
}: UserContextProviderProps) => {
    const [user, setUser] = useState<UserProps>(defaultUser);

    return (
        <MyUserContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            {children}
        </MyUserContext.Provider>
    );
};
