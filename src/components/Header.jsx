const Header = ({ children, className }) => {
    return (
        <h1
            className={`px-8 py-4 bg-darkBlue-200 font-semibold text-3xl shadow-lg flex gap-2 ${className}`}
        >
            {children}
        </h1>
    );
};

export default Header;
