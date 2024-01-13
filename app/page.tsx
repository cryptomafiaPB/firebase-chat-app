import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto md:py-10 h-screen">
      <div className="h-full border rounded-md">
        <div className="h-20">
          <div className="p-5 border-b flex items-start justify-between">
            <div>
              <h1 className="text-xl font-bold">Majju Chat</h1>
              <div className="flex items-center gap-1">
                <div className="h-4 w-4 bg-green-500 rounded-full animate-pulse"></div>
                <h1 className="text-sm text-gray-400">Join Now</h1>
              </div>
            </div>
            <Image
              src="/Majju-removebg-preview.png"
              width={50}
              height={50}
              alt="Logo link"
            />
          </div>
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl text-primary font-extrabold sm:text-5xl">
                <span className="text-blue-500">Chat</span> and easily{" "}
                <span className="text-blue-500"> Share Media </span> with your
                Group of friends.
              </h1>

              <p className="mt-4 sm:text-xl/relaxed">
                Immerse in lively conversations! Join our chatrooms, share media
                effortlessly, and connect with a vibrant community. Experience
                the ultimate interactive platform now!
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="transition block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-black shadow hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  href="/Dashboard"
                >
                  Get Started
                </a>

                <a
                  className="bg-blue-600 block w-full rounded px-12 py-3 text-sm font-medium text-white-600 shadow hover:text-white-900 hover:bg-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto transition"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
