import Image from "next/image";
import LongContainer from "components/longcontain"
import WhiteContainer from "components/midcontain"
import SmallContainer from "components/smallcontain"
export default function Home() {
  return (<>
          <h1 className="base mainTitle">Hyena's Cave</h1>
	  <h1 className="base text-3xl pt-6 pl-2 pb-6">Welcome!!!</h1>
	  <LongContainer extraClassName="place-content-center place-self-center">
	     <div className="flex-row w-full h-full">
		<a href="/tasks"><WhiteContainer extraClassName="h-1/2 w-1/4 place-content-center" >
			<h1 className="text-3xl pt-20">Tasks</h1>
		</WhiteContainer></a>
		<WhiteContainer extraClassName="h-1/2 w-1/4">
		</WhiteContainer>
	     </div>
	     <div className="flex-row w-full h-full">
		<WhiteContainer extraClassName="h-1/2 w-1/4" >
		</WhiteContainer>
		<WhiteContainer extraClassName="h-1/2 w-1/4">
		</WhiteContainer>
	     </div>
	  </LongContainer>
	  </>
  );
}
