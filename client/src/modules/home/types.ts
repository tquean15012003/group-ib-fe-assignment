import { Notification } from "../../types";

export const positionValues = ["1", "2", "3", "4"] as const;
export type TPosition = (typeof positionValues)[number];

export interface HomeInformationProps {
    notiCount: number;
    notiTime: number;
    position: TPosition;
    messages: Notification[];
}
