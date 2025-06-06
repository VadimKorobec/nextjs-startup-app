"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <header className=" px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className=" flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>
        <div className=" flex items-center gap-5">
          {session && session?.user ? (
            <div>
              <Link href="/startup/create">
                <span>Create</span>
              </Link>
              <button onClick={() => signOut()}>
                <span>Logout</span>
              </button>
              <Link href={`/user/${session?.user?.id}`}>
                <span>{session?.user?.name}</span>
              </Link>
            </div>
          ) : (
            <button onClick={() => signIn("github")}>
              <span>Login</span>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
