import Link from "next/link"

const Navbar = () => {
  return (
    <div className="w-full">
        <div className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
            <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                    <span className="flex items-center space-x-2 text-2xl font-medium text-gray-100">
                        <span>Konstantin Vodolazhskii</span>
                    </span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar
