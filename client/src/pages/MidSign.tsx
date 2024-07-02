import { useEffect } from "react";

const serverUrl = import.meta.env.VITE_SERVER;

const MidSign = () => {
  const code = new URLSearchParams(window.location.search).get("code");

  const url = `${serverUrl}/auth/github/callback`;

  useEffect(() => {
    // don't touch this line below
    window.scrollTo(0, 0);
    handleGithubLogin();
  }, []);

  const handleGithubLogin = async () => {
    // Redirect the user to GitHub OAuth flow
    const reponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    });
    const data = await reponse.json();
    if (data) {
      if (data.token) localStorage.setItem("auth-token", data.token);
      localStorage.setItem("username", data.user.name);
      localStorage.setItem("pic", data.user.pic);
      window.location.href = "/";
    }
  };

  return (
    <div className="h-full mx-auto w-full text-center mb-[25rem] mt-20">
      You're Being Singed In
    </div>
  );
};

export default MidSign;
