import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <div className="text-6xl animate-bounce mb-40 text-white font-semibold">
          <h1>HODL HODL HODL</h1>
        </div>

        {/* Logo */}
        <Image
          className="object-cover rounded-full"
          src="https://lh3.googleusercontent.com/Fv3W-rbsaS230hfYxTwI1CLzL_L3lZXil9rrge6Mb2lFmSpNFTf_jzA35L7sT-A2xmXM_8t_hUaVvInXxxeRCf51=w600"
          height={200}
          width={200}
          /* Login Button */
        />
        <button
          onClick={authenticate}
          className="bg-cyan-600 rounded-1g p-5 font-bold 
        animate-pulse rounded-lg 
        text-white text-lg"
        >
          Login to the MetaVerse
        </button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://wallpaperaccess.com/full/3648367.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
