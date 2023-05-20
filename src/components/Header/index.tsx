import IconAdd from "../icons/iconAdd";
import IconMenu from "../icons/iconMenu";

type Props = {

    openSidebarClick: () => void;
    title: string;
    newChatClick: () => void;
}

export const Header = ({ openSidebarClick, title, newChatClick }: Props) => {

    return (

        <header className="flex justify-between items-center w-full
        border-b border-b-gray-600 p-2 md:hidden">

                <div onClick={openSidebarClick} className="cursor-pointer p-2 hover:border-slate-400 rounded-lg hover:bg-slate-500/20 transition-all duration-200">
                    <IconMenu width={24} height={24}/>
                </div>

                <div className="mx-2 truncate">
                    {title}
                </div>

                <div onClick={newChatClick} className="cursor-pointer p-2 hover:border-slate-400 rounded-lg hover:bg-slate-500/20 transition-all duration-200">
                    <IconAdd width={24} height={24}/>
                </div>

        </header>
    )
}