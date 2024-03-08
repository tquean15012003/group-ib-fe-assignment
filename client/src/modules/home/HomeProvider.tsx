import React, {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    createContext,
    useMemo,
    useState,
} from "react";
import { HomeInformationProps } from "./types";

const DEFAULT_HOME_INFO: HomeInformationProps = {
    notiCount: 3,
    notiTime: 5,
    position: "1",
    messages: [],
};

interface HomeContextProps {
    homeInfo: HomeInformationProps;
    setHomeInfo: Dispatch<SetStateAction<HomeInformationProps>>;
    deleteMessage: (msg_id: string) => void;
}

export const HomeContext = createContext<HomeContextProps>({
    homeInfo: DEFAULT_HOME_INFO,
    deleteMessage: () => {
        return;
    },
    setHomeInfo: () => {
        return;
    },
});

export const HomeProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [homeInfo, setHomeInfo] =
        useState<HomeInformationProps>(DEFAULT_HOME_INFO);

    const deleteMessage = (msg_id: string) => {
        setHomeInfo((prev) => {
            const messages = prev.messages.filter(
                (message) => message.msg_id !== msg_id
            );
            return { ...prev, messages: [...messages] };
        });
    };

    const value: HomeContextProps = useMemo(
        () => ({
            homeInfo,
            deleteMessage,
            setHomeInfo,
        }),
        [homeInfo]
    );
    return (
        <HomeContext.Provider value={value}>{children}</HomeContext.Provider>
    );
};
