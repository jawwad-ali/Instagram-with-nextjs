import Feed from "../components/Feed";
import Header from "../components/Header";
import Head from "next/head"
import { useSession } from "next-auth/react"
import Modal from "../components/Modal"

export default function Home() {

  const { data: session } = useSession()

  if (!session) {
    return <>
      <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
        <Head>
          <title>Instagram Using Next js</title>
          <link />
        </Head>
        <Header />
      </div>
    </>
  }
  else {
    return <>
      <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
        <Head>
          <title>Instagram Using Next js</title>
          <link />
        </Head>

        <Modal />
        <Header />
        <Feed />
      </div>
    </>
  }
}
// 4.53.35