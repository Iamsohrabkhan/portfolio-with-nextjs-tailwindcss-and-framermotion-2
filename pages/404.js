import Link from "next/link";
// import { motion } from "framer-motion";
import Head from "next/head";
export default function Error() {
  return (
    <>
      <Head>
        <title>Sohrab Khan || Page Not Found</title>
      </Head>
      <div
        className="grid h-screen place-content-center bg-white px-4"
        // variants={pageVariants}
        // initial="hidden"
        // animate="visible"
      >
        <div className="text-center">
          <h1 className="text-9xl font-black text-gray-200 font-Mania">404</h1>
          <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </p>
          <p className="mt-4 text-gray-500">We can&apos;t find that page.</p>
          <Link
            href="/"
            className="mt-6 inline-block rounded bg-teal-600 px-5 py-3 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </>
  );
}
