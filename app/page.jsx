import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full justify-center items-center flex bg-[#F0F0F0]">
      <div className="w-[600px] h-[500px] bg-[#ffffff] rounded-lg rounded-br-[175px]">
        <div className="outerlabeldiv h-[100px] w-[65%] mt-[60px] ml-[50px] border-0 border-black grid gap-4 grid-cols-3">
          <div>
            <label className="block" htmlFor="textarea1">
              <p className="tracking-widest text-xs text-gray-500 pb-1">DAY</p>
            </label>
            <textarea
              className="textarea1 w-full h-12 text-lg font-bold border-grey border-2 resize-none rounded-lg pt-[6.5px] pl-[10px]"
              name=""
              id=""
              cols="4"
              rows="1"
            ></textarea>
          </div>
          <div>
            <label className="block" htmlFor="textarea1">
              <p className="tracking-widest text-xs text-gray-500 pb-1">
                MONTH
              </p>
            </label>
            <textarea
              className="textarea1 w-full h-12 text-lg font-bold border-grey border-2 resize-none rounded-lg pt-[6.5px] pl-[10px]"
              name=""
              id=""
              cols="4"
              rows="1"
            ></textarea>
          </div>
          <div>
            <label className="block" htmlFor="textarea1">
              <p className="tracking-widest text-xs text-gray-500 pb-1">YEAR</p>
            </label>
            <textarea
              className="textarea1 w-full h-12 text-lg font-bold border-grey border-2 resize-none rounded-lg pt-[6.5px] pl-[10px]"
              name=""
              id=""
              cols="4"
              rows="1"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
