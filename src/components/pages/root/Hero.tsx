import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <article className="relative mx-auto flex max-w-sm flex-col items-center gap-6">
        {/* animations */}
        <div className=" absolute left-4 top-6 z-0 h-52 w-52 animate-blob rounded-full bg-sky-200 opacity-60 mix-blend-multiply blur-2xl filter dark:hidden"></div>

        <div className=" animation-delay-2000 absolute right-4 top-6 z-0 h-52 w-52 animate-blob rounded-full bg-emerald-200 opacity-50 mix-blend-multiply blur-2xl filter dark:hidden"></div>

        <div className="animation-delay-4000 absolute bottom-4 left-16 z-0 h-52 w-52 animate-blob rounded-full bg-cadet_gray-800 opacity-80 mix-blend-multiply blur-2xl filter dark:hidden"></div>

        <div className="mx-auto space-y-8 py-16">
          <h1 className="text-center font-Quicksand text-5xl font-black text-eerie_black dark:text-timberwolf">
            E-Tracker App
          </h1>
          <p className="text-center font-Quicksand text-xl font-medium text-eerie_black-500 dark:text-timberwolf-300">
            Manage and track your expenses with ease.
          </p>
        </div>

        <div>
          <Link
            href={'/sign-in'}
            className="rounded-md bg-dark_slate_teal px-8 py-2 text-center font-Quicksand text-lg font-bold text-timberwolf shadow-md"
          >
            Sign in
          </Link>
          {/* <Link></Link> */}
        </div>
      </article>
    </>
  )
}

export default Hero
