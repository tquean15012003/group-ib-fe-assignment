import useHomeInfo from "../hooks/useHomeInfo";
import MessageBox from "../components/MessageBox";

const notificationPageStyle = {
    display: "flex",
    gap: "1rem",
    height: "100%",
    padding: "1rem 0",
};

const NotificationPage = () => {
    const {
        homeInfo: { notiTime, position, messages, notiCount },
    } = useHomeInfo();

    const getNotificationPostionStyle = () => {
        let justifyContent = "";
        let alignItems = "";

        switch (position) {
            case "1":
                break;
            case "2":
                alignItems = "end";
                break;
            case "3":
                justifyContent = "end";
                break;
            case "4":
                justifyContent = "end";
                alignItems = "end";
                break;
            default:
                break;
        }
        return {
            justifyContent,
            alignItems,
        };
    };

    const renderMessages = () => {
        return messages.slice(-notiCount).map(({ msg, msg_id }) => {
            return (
                <MessageBox
                    key={msg_id}
                    timeOut={notiTime * 1000}
                    message={msg}
                    msg_id={msg_id}
                />
            );
        });
    };

    return (
        <div
            style={{
                ...notificationPageStyle,
                ...getNotificationPostionStyle(),
                flexDirection: "column",
            }}
        >
            {renderMessages()}
        </div>
    );
};

export default NotificationPage;
