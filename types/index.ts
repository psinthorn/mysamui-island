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