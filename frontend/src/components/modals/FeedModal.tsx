import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface videoProp{
    videosrc:string,
    onClose:()=>void;
}

const FeedModal: React.FC<videoProp> = ({videosrc,onClose}) => {
    return (
        <div className="fixed w-full h-full top-0 left-0 bg-black/95 z-[9999] flex items-center justify-center gap-2 flex-col">
            <div className="w-full px-4 lg:w-[80%] flex items-center justify-end ">
                <button
                onClick={onClose}
                className="flex items-center justify-center rounded-md p-1 text-white border-[2px] hover:border-red hover:text-red">
                    <FontAwesomeIcon icon={faXmark}/>
                </button>
            </div>
            <div className="w-full lg:w-[80%] lg:h-[80%] bg-black p-3 flex items-center justify-center">
                <video 
                className="w-full h-full bg-black"
                autoPlay
                controls
                >
                    <source src={videosrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};
export default FeedModal;