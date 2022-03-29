/* eslint-disable @next/next/no-img-element */
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header";

//browser
function signIn({ providers }) {
  //{"id": { "google", "facebook" }}  <-- providers

  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center min-h-screen py-2 -mt-40 px-14 text-center ">
        <img className="w-80" src="https://links.papareact.com/ocw" alt="" />

        <p className="font-xs italic">
          This is not a real app, it build for learning purposes only
        </p>

        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className=" p-3 bg-blue-500 rounded-lg text-white"
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

//server
export async function getServerSideProps() {
  //the getProviders() method returns the list of providers currently configured for sign in. Eg: facebook, Google ...
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
