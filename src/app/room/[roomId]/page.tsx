import Messages from "@/components/messages"
import SendMessages from "@/components/sendMessages"

export default function Room({ params }: { params: { roomId: string } }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <Messages roomId={params.roomId} />
                <SendMessages roomId={params.roomId} />
            </div>
        </main>
    )
}