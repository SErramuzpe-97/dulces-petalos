import Navbar from "./components/Navbar";

interface Props {
    children: React.ReactNode;
}

const CommonLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 w-full bg-neutral-200 flex justify-center items-start p-xl">
                {children}
            </div>
        </div>
    );
}

export default CommonLayout;