"use client"

import { pusherClient } from "@/lib/pusher/pusherConf"
import { memo, useEffect, useState } from "react"

type Props = {
    roomId: string
}

function Messages({ roomId }: Props) {
    const [incomingMessages, setIncomingMessages] = useState<string[]>([])

    useEffect(() => {
        pusherClient.subscribe(roomId)

        pusherClient.bind('incoming-message', ({ message }: { message: string }) => {
            setIncomingMessages((prev) => [...prev, message])
        })

        return () => {
            pusherClient.unsubscribe(roomId)
        }
    }, [roomId])


    useEffect(() => {
        console.log(incomingMessages)
    }, [incomingMessages])

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