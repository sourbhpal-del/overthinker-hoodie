export const Button = ({ children, className }) => (
  <button className={`py-2 px-4 font-bold rounded ${className}`}>
    {children}
  </button>
);