import Image from "next/image";
import Bloglink from "@/components/Bloglink";
export default function Home() {
  return (
    <>
      <div className="w-full px-6 flex flex-col items-center pt-10">
        <h1>
          YC Tech Academy <span className="color-effect">학습 블로그</span>
        </h1>
        <h2>Group 9</h2>
      </div>
      <div className="h-[5px] w-[80%] mx-auto rounded-lg mt-5 prime_gradient"></div>
      <div className="w-[60%] flex flex-col mx-auto mt-10">
        <Bloglink />
      </div>
    </>
  );
}
