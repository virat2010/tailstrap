import Highlight from "react-highlight";
import { BsClipboard } from "react-icons/bs";

export default ({ children, code }) => (
  <>
    {children ? (
      <div className="border border-gray-200 rounded-t-md p-6 mt-2">{children}</div>
    ) : (
      <div
        className="border-4 border-gray-100 p-6 mt-2"
        dangerouslySetInnerHTML={{ __html: code }}
      />
    )}

    <div className="bg-gray-100 overflow-y-scroll w-full p-4 relative">
      <div className="border-b border-gray-300">
      <button
        className="absolute top-1 right-0 rounded mr-1 px-2 py-1 hover:text-blue-500 text-black text-sm"
          onClick={() => { }} data-tooltip-target="tooltip-default" type="button"
      >
      <BsClipboard />
      </button>
      <p className="absolute top-1 left-0 px-4 py-1 text-gray-600 font-light font-mono uppercase">html</p>
      <br></br>
      </div>
      <Highlight className="border-gray-800 jsx">{code}</Highlight>
    </div>
  </>
);
