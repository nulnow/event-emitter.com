import {headerHeightPx} from "@/app/consts";
import src from "@/app/Octicons-mark-github.svg";
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <>
      <header className="flex justify-between items-center px-4 sticky top-0 backdrop-blur-xl text-gray-700" style={{ height: headerHeightPx }}>
        <div>
          <Link href="/" className="flex gap-2">
            <Image src="/android-chrome-192x192.png" className="block" height={25} width={25} style={{ minHeight: 25, maxHeight: 25 }} alt={"kangaroo cartoon"} />
            <h1 className="font-bold md:font-light text-md md:text-2xl" style={{ lineHeight: '100%' }}>
              event-emitter.com
              <br className="block md:hidden" />
              {' '}
              <span
                className="text-xs md:text-sm text-gray-600 font-light"
                style={{ lineHeight: '100%' }}
              >With great power comes great responsibility</span>
            </h1>
          </Link>
        </div>
        <nav>
          <a href="https://github.com/nulnow/event-emitter-typescript" target="_blank" className="flex justify-center items-center gap-2 font-base text-sm">
            <span>GitHub</span>
            <Image width={20} height={20} src={src} alt={"github logo"} className="inline-block"></Image>
          </a>
        </nav>
      </header>
      <div className="px-4 text-xs font-light mt-4">
        Fast copy&paste solutions
      </div>
      <section className="px-4 py-5">
        <nav className="flex gap-4">
          <Link href="/" className="text-xs md:text-base text-blue-600">Event Emitter</Link>
          <Link href="/animations" className="text-xs md:text-base text-blue-600">Animations</Link>
          <Link href="/react-state-manager" className="text-xs md:text-base text-blue-600">React state manager</Link>
        </nav>
      </section>
    </>
  )
}