import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <h1>I am the login screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        {/* Logo */}
        <Image
          className="object-cover rounded-full"
          src="https://indigodergisi.com/wp-content/uploads/2021/11/web30.jpg"
          height={200}
          width={200}
          /* Login Button */
        />
        <button
          onClick={authenticate}
          className="bg-blue-500 rounded-1g p-5 font-bold 
        animate-pulse rounded-lg 
        text-white"
        >
          Login to the Metateverse
        </button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
