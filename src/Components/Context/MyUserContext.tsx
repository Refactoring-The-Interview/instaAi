import { ReactNode, createContext, useState } from "react";
import robot from "../../Assets/Images/RoboProfilePic.jpeg";
import { UserProps } from "./types";

interface MyUserContextProperties {
    user: UserProps;
    setUser(user: UserProps): void;
}

const defaultUser = {
    userId: 0,
    name: "Sam Brandon",
    bio: "n/a",
    fallows: 300,
    creations: 12,
    favorites: [],
    image: robot,
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
