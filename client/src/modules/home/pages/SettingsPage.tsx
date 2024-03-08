import useHomeInfo from "../hooks/useHomeInfo";
import { TPosition, positionValues } from "../types";

const containerStyle = {
    display: "grid",
    gridTemplateColumns: "20% 80%",
    alignItems: "center",
    background: "rgba(44, 49, 62, 0.4)",
    padding: "1rem 2rem",
    borderRadius: "1rem",
    color: "white",
    fontSize: "1.5rem",
};

const labelStyle = {
    justifySelf: "start",
};

const countStyle = {
    justifySelf: "start",
    background: "transparent",
    borderColor: "transparent",
    color: "white",
    fontSize: "1.5rem",
    width: "3rem",
};

const radioLabelStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
};

const radioWrapperStyle = {
    display: "flex",
    gap: "2rem",
};

const SettingsPage = () => {
    const {
        homeInfo: { notiCount, position, notiTime },
        setHomeInfo,
    } = useHomeInfo();

    return (
        <>
            <div style={containerStyle}>
                <label style={labelStyle}>Notification count</label>
                <input
                    type="number"
                    value={notiCount}
                    style={countStyle}
                    onChange={(e) => {
                        const newNotiCount = parseInt(e.target.value);
                        if (!isNaN(newNotiCount)) {
                            setHomeInfo((prev) => {
                                return { ...prev, notiCount: newNotiCount };
                            });
                        }
                    }}
                />
            </div>
            <div style={containerStyle}>
                <label style={labelStyle}>Notification Position</label>
                <div style={radioWrapperStyle}>
                    {positionValues.map((pos) => (
                        <label key={pos} style={radioLabelStyle}>
                            <div>Position {pos}</div>
                            <input
                                type="radio"
                                checked={position === pos}
                                onChange={() => {
                                    const newNotiCount = pos as TPosition;
                                    setHomeInfo((prev) => {
                                        return {
                                            ...prev,
                                            position: newNotiCount,
                                        };
                                    });
                                }}
                            />
                        </label>
                    ))}
                </div>
            </div>
            <div style={containerStyle}>
                <label style={labelStyle}>Notification disappear time</label>
                <input
                    type="number"
                    value={notiTime}
                    style={countStyle}
                    onChange={(e) => {
                        const newNotiTime = parseInt(e.target.value);
                        if (!isNaN(newNotiTime)) {
                            setHomeInfo((prev) => {
                                return { ...prev, notiTime: newNotiTime };
                            });
                        }
                    }}
                />
            </div>
        </>
    );
};

export default SettingsPage;
