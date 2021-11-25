import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

function MiniProfile() {
    const { data: session } = useSession()
    return (
        <div className="flex items-center justify-between mt-14 ml-5 w-[100%]">
            <img
                src={session?.user?.image}
                alt="dp"
                className="w-10 h-10 rounded-full border p-[2px]"
            />

            <div className="flex-1 mx-4">
                <h2 className="font-bold" style={{ textTransform: "capitalize" }}>{session?.user?.name}</h2>
                <h3 className="text-xs text-gray-400">aj99</h3>
            </div>
            <button onClick={() => signOut()} className="text-blue-400 text-sm font-semibold">Sign Out</button>
        </div>
    )
}

export default MiniProfile
