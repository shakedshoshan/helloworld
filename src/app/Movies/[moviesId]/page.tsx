"use client";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = { params: {
    moviesId: string;
}};
/*
export const generateMetadata = ({ params } : Props): Metadata =>{
    return{
        title: "Movie {params.moviesId}",
    };
}
*/

export default function MoviesDetails({params}: Props) {

  const router = useRouter();
  
  const handleClick = () =>{
    console.log("Watch the movie");
    router.push("/Movies");
  };

  return (
    <div>Movie detail {params.moviesId}
    
    <Link href='/Movies'>
        <button className="flex space-x-0 items-center p-2 border-gray-600
         border chatRow">
          Go to back Movies
        </button>
    </Link>


        <button onClick = {handleClick} className="flex space-x-0 items-center p-2 border-gray-600
         border chatRow">
          Go to back to Main Page
        </button>
    </div>
  );
}