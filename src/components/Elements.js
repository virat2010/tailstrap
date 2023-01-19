export function H1({ children }) {
  return(
    <div>
    <h1 className="font-semibold inline text-4xl object-scale-down">{children}</h1>
    <a className="border inline border-gray-200 text-xs transition-colors rounded-md hover:border-purple-600 p-[6px] float-right text-gray-500 hover:text-purple-600" href="https://github.com/christangenco/tailstrap">View on Github</a>
    </div>
    );
};

export function Subheading({ children }) {
  return <p className="text-2xl font-light leading-normal w-4/5">{children}</p>;
};

export function H2({ children }) {
  return <h2 className="font-medium text-3xl mt-10">{children}</h2>;
};
