import Link from "next/link";
import BasicTextFields from "../../components/BasicTextFields";


export default function HomePage() {
  
  return (
    <main>
      <div className="flex flex-col z-10 max-w-5xl items-center justify-between font-extrabold text-sm lg:flex">
        <h1>Main page</h1>
        <h2>Welcome</h2>
        <BasicTextFields />
        
        {/*<div className="flex-1"><InputBox /></div>*/}
        
        <Link href='/Movies'>
        <button className="flex space-x-0 items-center p-2 border-gray-600
         border chatRow">
          Go to Movies
        </button>
        </Link>
      </div>
    </main>
  );
}
