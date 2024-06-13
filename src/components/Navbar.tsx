import {cls, green, headerHeightPx, keyword, title} from "@/app/consts";
import src from "@/app/Octicons-mark-github.svg";
import Link from 'next/link'
import Image from 'next/image'

export const Navbar = () => {
  return (
    <>
      <header className="flex justify-between items-center px-4 sticky top-0 backdrop-blur-xl text-gray-700" style={{ height: headerHeightPx }}>
        <div>
          <h1 className="font-light text-md md:text-2xl">event-emitter.com <span className="text-xs md:text-sm text-gray-600">With great power comes great responsibility</span></h1>
        </div>
        <nav>
          <Link href="https://github.com/nulnow">
            <Image width={20} height={20} src={src} alt={"github logo"}></Image>
          </Link>
        </nav>
      </header>
      <div className="px-4 text-xs font-light">
        Fast copy&paste solutions
      </div>
      <section className="px-4 py-5">
        <nav className="flex gap-4">
          <Link href="/" className="text-blue-600">Event Emitter</Link>
          <Link href="/animations" className="text-blue-600">Animations</Link>
          <Link href="/react-state-manager" className="text-blue-600">React state manager</Link>
        </nav>
      </section>
    </>
  )
}