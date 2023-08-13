import Github from "./Github/Github";

function MainBox() {

  return (

    <div className='grid grid-cols-12  items-center justify-center text-center '>


    <div className='col-start-3 col-span-8 rounded-lg border border-gray-200 bg-white shadow-md p-5'>

    <div className='grid grid-cols-8'>

      <div className='col-start-1 col-span-8 p-5'>
        <div className="text-3xl font-extrabold text-black">Contribution Attestation Service</div>
        <div className="text-slate-500 font-bold text-lg">Attest to your Contribution & get rewarded when your PR closed the Issue</div>
      </div>

      <div className='p-5 col-start-3 col-span-4 gap-5 justify-center items-center '>

      <Github/>

      {/* <a href="/no-hack">
        <div className="p-3 m-1 bg-black rounded-xl font-lg text-white hover:bg-slate-500">
          Firewall-guarded Hack
        </div>
        </a> */}

      </div>

      </div>

      </div>

      <div className='col-start-4 col-span-6 text-center mt-12'>
        <div className="text-slate-500">
          <div className='font-bold'>built with ❤️ @ Superhack 2023 by ETHGlobal</div>
          <div className="font-base">
             _
          </div>
        </div>
      </div>
      <div className='col-start-4 col-span-6 text-center my-5'>
          <div className="text-slate-500">
            <div className='font-bold text-center'>integrated Sponsors</div>
          </div>
      </div>

      <div className='col-start-3 col-span-6 text-center'>
          <div className="flex flex-row gap-5">
             <img src="https://storage.googleapis.com/ethglobal-api-production/organizations%2Frmkrz%2Flogo%2F1664911760503_optimism.jpeg" alt="" className="w-24 rounded-full"/>
              <img src="https://storage.googleapis.com/ethglobal-api-production/organizations%2Fh5ps8%2Flogo%2F1678294488367_W-9qsu1e_400x400.jpeg" alt="" className="w-24 rounded-full"/>
              <img src="https://storage.googleapis.com/ethglobal-api-production/organizations%2Ff2so0%2Flogo%2F1690573556900_Zorb%20Core%20SVG.svg" alt="" className="w-24 rounded-full"/>
              <img src="https://storage.googleapis.com/ethglobal-api-production/organizations%2F0vx1d%2Flogo%2F1690900667299_%5B%20M%20%5D%20logo.svg" alt="" className="w-24 rounded-full"/>
              <img src="https://storage.googleapis.com/ethglobal-api-production/organizations%2Fpfyco%2Flogo%2F1663199654645_thegraph.jpeg" alt="" className="w-24 rounded-full"/>
              <img src="https://storage.googleapis.com/ethglobal-api-production/organizations%2Fdxcvz%2Flogo%2F1686343659783_eas-logo.png" alt="" className="w-24 rounded-full"/>
              <img src="https://storage.googleapis.com/ethglobal-api-production/organizations%2Ff7o0p%2Flogo%2F1664750251874_covalent.jpeg" alt="" className="w-24 rounded-full"/>
          </div>
      </div>


</div>

  );
}

export default MainBox;