import Head from "next/head";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

import Link from "next/link";

export default function FAq() {
  return (
    <>
      <Head>
        <title>ENSTogether</title>
      </Head>

      <div className="w-full px-4 py-24 min-h-screen flex mx-auto justify-center items-center ">
        <div className="w-full max-w-2xl p-2 mx-auto bg-rose-50 rounded-2xl">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium text-left text-rose-600 bg-rose-100 rounded-lg hover:bg-rose-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                  <span>What&apos;s ENSTogether?</span>
                  <ChevronDownIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-rose-600`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-rose-700">
                  A couples registry on the Ethereum blockchain. <br />
                  Building a fun experience that seeks to extrapolate some
                  features of the marital registration process to web3.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium text-left text-rose-600 bg-rose-100 rounded-lg hover:bg-rose-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                  {" "}
                  <span>Why do I need an ENS domain to register?</span>
                  <ChevronDownIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-rose-600`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-rose-700">
                  The registration is generated by linking two ethereum
                  addresses, but to make this process more &quot;human&quot;
                  wouldn&apos;t it be cool to have an easily readable username
                  or the possibility to have an NFT as avatar? <br /> This is
                  where ENS comes in, a service that allows us to have a unique
                  username and avatar linked to your ethereum address, a
                  decentralized identity that you can use across different
                  services on web3. There are many other benefits of having an
                  ENS name.
                  <Link passHref href={"https://ens.domains"}>
                    <a
                      className="ml-2 font-bold tracking-tight text-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LEARN HERE
                    </a>
                  </Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium text-left text-rose-600 bg-rose-100 rounded-lg hover:bg-rose-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                  {" "}
                  <span>How the registration process works?</span>
                  <ChevronDownIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-rose-600`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-rose-700">
                  Similar to real life, one should propose to their partner to
                  get together. As this is an asynchronous process, there is a
                  waiting time to obtain the consent of the other person. <br />
                  Once the proposal is accepted, the registration is
                  automatically generated and an on-chain NFT is generated as a
                  confirmation of the process.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium text-left text-rose-600 bg-rose-100 rounded-lg hover:bg-rose-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                  {" "}
                  <span>Why is there a registration fee?</span>
                  <ChevronDownIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-rose-600`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-rose-700">
                  Getting married involves costs, right? xD <br />
                  Jokes aside, there are two reasons behind this decision:{" "}
                  <br />
                  Avoid spam registrations and ensure true intention and
                  commitment, since an address can only be registered once.{" "}
                  <br />
                  <span className="text-sm">
                    * Unless the register modified or canceled. See section
                    below.
                  </span>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium text-left text-rose-600 bg-rose-100 rounded-lg hover:bg-rose-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                  <span>
                    Can I cancel a love proposal or modify a registration?
                  </span>
                  <ChevronDownIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-rose-600`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-rose-700">
                  Yes, at the Proposal Stage you can cancel the order if you
                  regret it. <br />
                  Once registered as a couple you can update your relationship
                  status to &apos;paused&apos; or &apos;separated&apos;. The
                  latter allows you to generate another registration in the
                  future.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium text-left text-rose-600 bg-rose-100 rounded-lg hover:bg-rose-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                  {" "}
                  <span>Why is there an expiration time?</span>
                  <ChevronDownIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-rose-600`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-rose-700">
                  There is an expiration time because unlike in the real world
                  here the process is necessarily asynchronous, and the other
                  person must receive the proposal and respond in order to
                  complete the registration. On the other hand when the time
                  expires the proposer is allowed to propose again in the
                  future.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-md font-medium text-left text-rose-600 bg-rose-100 rounded-lg hover:bg-rose-200 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                  <span>Contract</span>
                  <ChevronDownIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-rose-600`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-rose-700">
                  The contract is not audited.
                  <br />
                  <Link
                    href={
                      "https://goerli.etherscan.io/address/0xb2b02D6CfcEF77F13aaC909bd4af54646bFA2a14"
                    }
                  >
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold tracking-tight text-sm"
                    >
                      https://goerli.etherscan.io/address/0xb2b02D6CfcEF77F13aaC909bd4af54646bFA2a14
                    </a>
                  </Link>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
}
