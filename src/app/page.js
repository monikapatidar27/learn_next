'use client';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const handlClick = () => {
    alert("click me")
  }
  const router = useRouter()
  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        <h1>Home page</h1>
        <button onClick={handlClick}>click me</button>
        <Link href='/login'>Go to login page</Link>
        <button onClick={()=>router.push('/signup')}>Go to signup page</button>
      </main>
      
    </div>
  );
}
