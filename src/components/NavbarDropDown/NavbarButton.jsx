export default function NavbarButton(props) {

    const { handleToggle } = props;

    return (
        <button 
            className="aspect-square h-full flex justify-center items-center"
            onClick={() => handleToggle()}
        >
            <svg className="hover:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width="2.5em" height="2.5em">
                <path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M2 2h8M2 6h8m-8 4h8"></path>
            </svg>
        </button>
    )
}
