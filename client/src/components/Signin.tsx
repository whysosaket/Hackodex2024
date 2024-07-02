import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const ClientId = import.meta.env.VITE_CLIENT_ID;
const redirect_uri = import.meta.env.VITE_CLIENT_URL;

const Signin = () => {
  const handleGithubLogin = () => {
    // Redirect the user to GitHub OAuth flow
    let url = `https://github.com/login/oauth/authorize?client_id=${ClientId}&redirect_uri=${redirect_uri}/midsign`;
    window.location.href = url;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="my-auto bg-[#1D2038]/70 rounded-lg w-[32rem] mx-4"
    >
      <div className="text-center py-20 px-8">
        <h1 className="text-3xl font-semibold">SIGN IN</h1>
        <div className="mt-8 text-sm">
          <h1>WE CARE ABOUT YOUR PRIVACY</h1>
          <h1>ONLY YOUR EMAIL AND PROFILE PICTURE WILL BE STORED.</h1>
        </div>
      </div>
      <div className="bg-[#2E303C] px-8 py-6 flex justify-center rounded-b-lg">

        {/* login button */}
        {<button
          className="bg-[#4760FF] hover:bg-[#4730FF] text-white rounded-md px-4 py-2 flex"
          onClick={handleGithubLogin}
        >
          <FaGithub className="w-6 h-6 mr-2" />
          <span>Sign in with GitHub</span>
        </button>}
      </div>
    </motion.div>
  );
};

export default Signin;
