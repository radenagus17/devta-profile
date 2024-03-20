import { Image } from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
      <div>
        <div className="flex justify-center items-center mx-auto mt-6 mb-8">
          <Image src="/images/404-illustration.svg" alt="" className="w-full" />
        </div>
        <h2 className="font-medium mb-3 text-3xl text-center">
          Oops! Something went wrong.
        </h2>
        <p className="text-center font-light">
          The page that you requested doesn&apos;t
          <br />
          exist at this moment
        </p>
        <div className="mb-4 mt-6">
          <div className="mb-3">
            <Link
              href={"/"}
              className="block w-full bg-warning hover:bg-primary text-white font-semibold px-6 py-4 text-lg rounded-full text-center transition-all duration-300"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
