import { useEffect } from "react";
import useHomeInfo from "./useHomeInfo";

export const useMessage = () => {
    const { setHomeInfo } = useHomeInfo();

    useEffect(() => {
        const eventSource = new EventSource("http://localhost:9000/events");

        eventSource.onmessage = function (event) {
            console.log("New message:", event.data);
            const data = JSON.parse(event.data);
            setHomeInfo((prev) => {
                return { ...prev, messages: [...prev.messages, data] };
            });
        };

        eventSource.onerror = function (error) {
            console.error("EventSource failed:", error);
            eventSource.close();
        };

        // Clean up the event source when the component unmounts
        return () => eventSource.close();
    }, []);
};
