import { MouseEventHandler } from "react";

export interface CustomeButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType: "button" | "submit";

}

export interface HeroProps {
    title: string;
    subTitle: string;
    // image: string;
}

export interface BookingProps {
    firstName: string;
    lastName: string;
    hotelName: string;
    roomNo: string;
    email: string;
    whatsapp: string;
    phone: string;
    remarkNote: string;
}