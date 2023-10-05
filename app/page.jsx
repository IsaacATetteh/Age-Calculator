import Image from "next/image";
import "./styles.css";

export default function Home() {
  return (
    <div className="w-full h-full justify-center items-center flex bg-[#F0F0F0]">
      <div className="w-[600px] h-[500px] bg-[#ffffff] rounded-lg rounded-br-[175px]">
        <div>
          <p className="text-xl sans font">hello world</p>
        </div>
      </div>
    </div>
  );
}
