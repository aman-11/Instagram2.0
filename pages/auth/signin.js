import { getProviders, signIn as SignIntoProvider } from "next-auth/react";

//browser
function signIn({ providers }) {
  //{"id": { "google", "facebook" }}  <-- providers

  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => SignIntoProvider(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
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
