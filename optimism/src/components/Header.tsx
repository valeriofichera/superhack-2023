import logo from '../assets/header_logo.svg';
import { WalletBtn } from './WalletBtn';

function Header() {

  return (

    <div className='grid grid-cols-12 gap-4 justify-center items-center pt-5'>

        <div className='col-start-1 col-span-3'>
          <div className="flex flex-col-reverse items-center justify-center gap-2 w-52 ">
            <img src={logo} alt="" />
            </div>
        </div>

      
     
        
{/* 
        <div className="col-start-7 col-span-3 p-1 m-1 bg-black rounded-xl text-sm font-bold text-white">
          DEMO: Lending & Borrowing Mock App
        </div> */}

        <div className="col-start-8 col-span-5 p-2 m-5">
          <WalletBtn />
        </div>


    </div>

  );
}

export default Header;