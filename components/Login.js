import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        {/* Logo */}
        <Image
          className="object-cover rounded-full hover:animate-spin"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ys-TUpZJZv_zzOwSYLfZRMwiswIITL-8BQ&usqp=CAU"
          height={200}
          width={200}
          /* Login Button */
        />
        <button
          onClick={authenticate}
          className="bg-orange-400 rounded-1g p-5 font-bold 
        animate-pulse rounded-lg 
        text-white"
        >
          Login to the Metateverse
        </button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
