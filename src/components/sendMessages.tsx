"use client"

import { triggerPusher } from "@/actions/pusher/pusherAction"
import { memo, useCallback, useRef } from "react"

function SendMessages({ roomId }: { roomId: string }) {
    const inputRef = useRef<HTMLInputElement>(null)

    const onClick = useCallback(() => {
        if (!inputRef.current) return;

        void triggerPusher({ message: inputRef.current.value, roomId }).then(() => {
            if (inputRef.current) {
                inputRef.current.value = ""
            }
        })
    }, []);


    return (
        <div>
            <input ref={inputRef} type="text" className="text-black" />
            <button onClick={onClick}>Send</button>
        </div>
    )
}

export default memo(SendMessages);