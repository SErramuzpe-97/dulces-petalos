import Navbar from "./components/Navbar";

interface Props {
    children: React.ReactNode;
}

const CommonLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="bg-neutral-200 flex justify-center items-start p-xl h-full flex-grow">
                <div className="w-full max-w-[1200px]">
                    {children}
                </div>                
            </div>
        </div>
    );
}

export default CommonLayout;