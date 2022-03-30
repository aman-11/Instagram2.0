import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";

export default function Home() {
  return (
    <div className="bg-gray-80 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instragram 2.0</title>
      </Head>

      {/* Hader */}
      {/* Hader */}
      <Header />

      {/* feed */}
      <Feed />

      {/* modal */}
      <Modal />
    </div>
  );
}
