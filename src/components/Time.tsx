"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const extractTimeIST = (): string => {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const istOffset = 5.5 * 60 * 60000;
    const istTime = new Date(utc + istOffset);

    const hours = istTime.getHours().toString().padStart(2, "0");
    const minutes = istTime.getMinutes().toString().padStart(2, "0");
    const seconds = istTime.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds} IST`;
};

const Time: React.FC = () => {
    const [timeIST, setTimeIST] = useState(extractTimeIST());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeIST(extractTimeIST());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="">
            <hr
                className="mx-auto my-2 w-[71%] h-[0.650px] bg-[#343643] border-0"
            />
            <div className="w-[73%] mx-auto mt-2 mb-5 rounded-2xl transition-colors px-3 flex items-center justify-center">
                <div className="relative w-full flex items-center justify-between py-4">
                    <div className="text text-sm" style={{ color: "gray" }}>
                        © {new Date().getFullYear()} / Shorya Vardhan
                    </div>

                    <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                        <div className="w-[70%] h-[70%]">
                            <Image src="/star.svg" alt="star" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                        </div>
                    </div>

                    <div className="text-center text-sm font-[Satoshi] flex items-center gap-2" style={{ color: "gray" }}>
                        Patna, India
                        <div className="gap-3">{timeIST}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Time;
