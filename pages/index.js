import Feed from "../components/Feed";
import Header from "../components/Header";
import Head from "next/head"

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram Using Next js</title>
        <link />
      </Head>

      
      <Header />
      <Feed />
    </div>
  )
}
// 2.21.11