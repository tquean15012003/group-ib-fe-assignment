import TimeOutComponent from "../../../components/TimeOutComponent";
import useHomeInfo from "../hooks/useHomeInfo";

const containerStyle = {
    backgroundColor: "rgba(44, 49, 62, 0.4)",
    color: "white",
    padding: "1rem",
    borderRadius: "1rem",
    width: "450px",
    lineHeight: "1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
};

const closeIconStyle = {
    cursor: "pointer",
};

interface IProps {
    timeOut: number;
    message: string;
    msg_id: string;
}

const MessageBox = ({ timeOut, message, msg_id }: IProps) => {
    const { deleteMessage } = useHomeInfo();
    const callback = () => {
        deleteMessage(msg_id);
    };

    return (
        <TimeOutComponent timeOut={timeOut} callback={callback}>
            <div style={containerStyle}>
                <div>{message}</div>
                <div
                    style={closeIconStyle}
                    onClick={() => {
                        callback();
                    }}
                >
                    X
                </div>
            </div>
        </TimeOutComponent>
    );
};

export default MessageBox;
