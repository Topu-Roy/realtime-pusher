"use client"

import { joinRoomAction } from "@/actions/pusher/pusherAction"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

export default function CreateRoom() {
    const router = useRouter()

    const handleClick = useCallback(() => {
        void joinRoomAction().then(res => {
            if (!res) {
                alert("Failed to create room.")
                return;
            }

            router.push(`/room/${res.roomId}`)
        }).catch((err) => {
            alert(err)
        })
    }, [])

    return (
        <button
            type="submit"
            className="bg-white text-black rounded-md px-4 py-3" onClick={handleClick}
        >
            Join
        </button>
    )
}