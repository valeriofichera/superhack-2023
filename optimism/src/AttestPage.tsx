

 import Header from "./components/Header";
 import { Attestooooooor } from "./components";
import Covalent from "./components/Covalent";
//  import Subgraph from "./components/Subgraph";


function AttestPage() {

//       /**
//    * Wagmi hook for getting account information
//    * @see https://wagmi.sh/docs/hooks/useAccount
//    */
//   const { isConnected } = useAccount();

    return (
  
  <>
    <Header/>

    <div className='grid grid-cols-12  items-center justify-center text-center '>


<div className='col-start-3 col-span-8 rounded-lg border border-gray-200 bg-white shadow-md p-5'>

<div className='grid grid-cols-8'>

  <div className='col-start-1 col-span-8 p-5'>
    <div className="text-3xl font-extrabold text-black">Create an Attestation</div>
    <div className="text-slate-500 font-bold text-lg">Create an Attestation that is linked to your Github Profile</div>
  </div>

  <div className='col-start-1 col-span-8 p-1 flex justify-center'>
  <div className="flex flex-row gap-5 items-center">
    <div className="text-green-500 font-bold text-lg">linked to</div>
    <div className="flex flex-row items-center gap-1">
      <img src="https://avatars.githubusercontent.com/u/78494380?v=4" alt="" className="w-12 rounded-full" />
      <div className="text-slate-500 font-bold text-lg">
        <a href="https://github.com/valeriofichera" target="_blank" rel="noopener noreferrer">
          valeriofichera
        </a>
      </div>
    </div>
  </div>
</div>




  <div className='p-5 col-start-3 col-span-4 gap-5 justify-center items-center '>

<Attestooooooor/>

  {/* <a href="/no-hack">
    <div className="p-3 m-1 bg-black rounded-xl font-lg text-white hover:bg-slate-500">
      Firewall-guarded Hack
    </div>
    </a> */}

  </div>

  </div>

  </div>

  <div className='col-start-4 col-span-6 text-left mt-12'>
    <div className="text-slate-500">
      <div className='font-bold'>Attestation Insights</div>
      <div className="font-base">
          powered by Covalent API
      </div>
      {/* <Subgraph/> */}
      <Covalent/>
    </div>
  </div>


</div>



  </>
  
    );
  }
  
  export default AttestPage;