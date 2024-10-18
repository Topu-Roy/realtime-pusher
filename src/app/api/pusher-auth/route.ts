import { pusherServer } from "@/lib/pusher/client"

export async function POST(req: Request) {
    const data = await req.text()
    const [socketId, channelName] = data.split('&').map((str) => str.split('=')[1])

    const id = crypto.randomUUID()

    const presenceData = {
        user_id: id,
        user_data: { user_id: id },
    }

    console.log(socketId, channelName, presenceData);

    const auth = pusherServer.authorizeChannel(
        socketId ?? "",
        channelName ?? "",
        presenceData ?? ""
    )

    return new Response(JSON.stringify(auth))
}