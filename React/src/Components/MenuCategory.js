
import { useState } from "react";
import AccBody from "./AccBody";
import { CDN_URL } from "../utils/links";


const MenuCategory = ({ data, showitems, setShowIndex }) => {




    const handelclick = () => {
        setShowIndex()

    }
    return (
        <>
            <div >
                <div className="" onClick={handelclick}  >
                    <div>
                        <h1 className="text-slate-200 bg-zinc-800 border-b flex justify-center w-1/2 m-auto h-16 px-4 text-2xl py-2  cursor-pointer">
                            {data.title}
                        </h1>

                    </div>
                </div>
                {showitems && <AccBody items={data.itemCards} />}
            </div>
        </>

    )
}

export default MenuCategory;