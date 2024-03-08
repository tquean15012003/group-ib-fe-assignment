import { Fragment, useEffect, useState } from "react";

interface IProps {
    timeOut: number;
    children: React.ReactNode;
    callback: () => void;
}

const TimeOutComponent = ({ children, timeOut, callback }: IProps) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShow(false);
            callback();
        }, timeOut);
    }, []);

    if (!show) return null;

    return <Fragment>{children}</Fragment>;
};

export default TimeOutComponent;
