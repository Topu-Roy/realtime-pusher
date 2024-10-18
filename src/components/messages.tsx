"use client"

import { pusherClient } from "@/lib/pusher/client"
import { memo, useEffect, useState } from "react"

function Messages({ roomId }: { roomId: string }) {
    const [incomingMessages, setIncomingMessages] = useState<string[]>([])

    useEffect(() => {
        pusherClient.subscribe(roomId)

        pusherClient.bind('incoming-message', ({ message }: { message: string }) => {
            setIncomingMessages((prev) => [...prev, message])
        })

        return () => {
            pusherClient.unbind('incoming-message')
            pusherClient.unsubscribe(roomId)
        }
    }, [])

    return (
        <div>
            <h2 className="pt-4">Messages</h2>
            <div className="flex flex-col gap-3">
                {incomingMessages.map((item, ix) => (
                    <p key={ix}>{item}</p>
                ))}
            </div>
        </div>
    )
}

export default memo(Messages);