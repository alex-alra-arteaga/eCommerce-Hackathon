import { useEffect, useState } from "react";
import { linkNFT } from "../utils/linkNFT";
import { useSigner } from "wagmi";
import { Contract } from "ethers";

export default function Modal() {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [parentID, setParentID] = useState("");
  const [linkableID, setLinkableID] = useState("");
  const { data: signer } = useSigner();

  const triggerLinkNFT = async () => {
    try {
      setLoading(true);
      await linkNFT(signer, linkableID, parentID);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <>
      <label
        htmlFor="modal"
        className="btn"
        onClick={() => setVisible((v) => !v)}
      >
        Link NFT
      </label>
      {visible && (
        <div className="fixed z-10 inset-0 overflow-y-auto p-5">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75">
              </div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            </span>&#8203;

            <div className="inline-block align-bottom bg-neutral rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
              <div className="bg-neutral px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-primary">
                      Link a NFT
                    </h3>
                    <div className="mt-2">
                      <form>
                        <div className="flex align-center items-center py-5">
                          <img
                            src="/ape.png"
                            className="w-10 rounded-full mr-5"
                          />
                          <div>
                            <label className="block text-secondary font-bold mb-2">
                              Skin
                            </label>
                            <input
                              className="bg-neutral shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                              id="first"
                              type="text"
                              placeholder="Parent Token ID"
                              onChange={(e) => {
                                setParentID(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="flex align-center items-center">
                          <img
                            src="/ape.png"
                            className="w-10 rounded-full mr-5"
                          />
                          <div>
                            <label className="block text-secondary font-bold mb-2">
                              Sticker
                            </label>
                            <input
                              className="bg-neutral shadow appearance-none border rounded w-full py-2 px-3 text-secondary leading-tight focus:outline-none focus:shadow-outline"
                              id="first"
                              type="text"
                              placeholder="Linkable Token ID"
                              onChange={(e) => {
                                setLinkableID(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-neutral px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
                  disabled={loading}
                  onClick={() => triggerLinkNFT()}
                >
                  Link
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-secondary shadow-sm px-4 py-2 bg-neutral text-base font-medium text-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setVisible((v) => !v)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
