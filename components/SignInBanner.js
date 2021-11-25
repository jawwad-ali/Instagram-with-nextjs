import { useSession, signIn } from "next-auth/react"

function SignInBanner() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen -mt-20 px-14">
            <img
                src="https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_960_720.png"
                className="w-80"
                alt="Instagram Logo"
            />
            <p>
                <em>Instagram Clone using Next.js and NextAuth</em>
            </p>
            <button className="p-3 mt-5 bg-black text-white  rounded-lg"
                onClick={() => signIn()}>
                Please Sign in to continue
            </button>
        </div>
    )
}

export default SignInBanner
