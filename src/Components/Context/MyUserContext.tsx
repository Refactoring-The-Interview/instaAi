import { ReactNode, createContext, useState } from "react";
import robot from "../../Assets/Images/RoboProfilePic.jpeg";
import { UserProps } from "./types";

interface MyUserContextProperties {
    user: UserProps;
    setUser(user: UserProps): void;
}

export const defaultUser = {
    userId: 0,
    name: "Sam Brandon",
    bio: "Frontend Engineer with a desire for creating modern user experiences, with the ability to design and develop JavaScript-based web applications. Currently seeking a position that allows meaningful contributions and opportunities for growth.",
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
