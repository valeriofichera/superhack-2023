import { useState } from "react";
import { useAccount, useNetwork, useWaitForTransaction } from "wagmi";
import {
  parseString,
  stringifyAttestationBytes,
  encodeRawKey,
} from "@eth-optimism/atst";

/**
 * These react hooks are generated with the wagmi cli via `wagmi generate`
 * @see ROOT/wagmi.config.ts
 */
import {
  useAttestationStationAttest,
  usePrepareAttestationStationAttest,
  useAttestationStationAttestations,
} from "../generated";

/**
 * An example component using the attestation station
 */
export function Attestooooooor() {
  /**
   * @see https://wagmi.sh/docs/hooks/useAccount
   */
  const { address } = useAccount();
  /**
   * @see https://reactjs.org/docs/hooks-state.html
   */
  const [value, setValue] = useState("valeriofichera");

  /**
   * The key of the attestation
   * @see https://www.npmjs.com/package/@eth-optimism/atst
   */
  const key = encodeRawKey("hello-world");
  /**
   * Value of the attestation
   * @see https://www.npmjs.com/package/@eth-optimism/atst
   */
  const newAttestation = stringifyAttestationBytes(value);

  /**
   * Automatically generated hook to prepare the transaction
   * @see https://wagmi.sh/react/prepare-hooks/usePrepareContractWrite
   */
  const { config } = usePrepareAttestationStationAttest({
    args: [address!, key, newAttestation],
  });

  /**
   * Automatically generated hook to execute the transaction
   * @see https://wagmi.sh/react/execute-hooks/useContractWrite
   */
  const { data, write } = useAttestationStationAttest({
    ...config,
    onSuccess: () => setValue(""),
  });

  /**
   * Automatically generated hook to read the attestation
   * @see https://wagmi.sh/react/execute-hooks/useContractRead
   */
  const { refetch, data: attestation } = useAttestationStationAttestations({
    args: [address!, address!, key],
  });

  /**
   * Wagmi hook to wait for the transaction to be complete
   * @see https://wagmi.sh/docs/hooks/useWaitForTransaction
   */
  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess: () => refetch(),
  });

  return (
    <div>
      {/* <input
        disabled={isLoading}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      /> */}


      <div className='flex justify-center'>
  <a disabled={!write || isLoading} onClick={() => write?.()}>
    <div className="w-fit justify-center items-center gap-2 flex flex-row p-3 m-1 bg-slate-800 rounded-xl font-lg text-white hover:bg-slate-500 cursor-pointer">
      <img src="https://storage.googleapis.com/ethglobal-api-production/organizations%2Fdxcvz%2Flogo%2F1686343659783_eas-logo.png" alt="" className="w-12 rounded-full"/>
      <div>Create Attestation</div>
    </div>
  </a>
</div>

      {isLoading && <ProcessingMessage hash={data?.hash} />}
      <div>
       ⛽️ Gas fee: <span>{config.request?.gas?.toString()}</span>
      </div>

      <div>
        last person attesting: {attestation ? parseString(attestation) : "none"}
      </div>

    </div>
  );
}

function ProcessingMessage({ hash }: { hash?: `0x${string}` }) {
  const { chain } = useNetwork();
  const etherscan = chain?.blockExplorers?.etherscan;
  return (
    <span>
      Processing transaction...{" "}
      {etherscan && (
        <a href={`${etherscan.url}/tx/${hash}`}>{etherscan.name}</a>
      )}
    </span>
  );
}
