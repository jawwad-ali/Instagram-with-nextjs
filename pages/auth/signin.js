import { getProviders, signIn as SignIntoProvider } from "next-auth/react"

function signIn({ providers }) {
    console.log("PP", providers)
    return (
        <>
            I am signin
            {/* {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => SignIntoProvider(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))} */}
        </>
    )
}

export async function getServerSideProps(context) {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}

export default signIn
