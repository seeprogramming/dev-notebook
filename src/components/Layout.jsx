import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import {
    Home,
    Settings,
    User,
    PanelLeftClose,
    PanelRightClose,
} from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div
            className={`bg-white h-screen p-4 transition-all ${
                isOpen ? 'w-56' : 'w-16'
            }`}
        >
            <button
                className='text-black mb-4 focus:outline-none'
                onClick={toggleSidebar}
            >
                {isOpen ? (
                    <PanelLeftClose size={24} />
                ) : (
                    <PanelRightClose size={24} />
                )}
            </button>
            <nav className='flex flex-col gap-4'>
                {[
                    { icon: Home, label: 'Home' },
                    { icon: User, label: 'Profile' },
                    { icon: Settings, label: 'Settings' },
                ].map((item, index) => (
                    <div
                        key={index}
                        className='flex items-center gap-4 p-2 text-black-[100] cursor-pointer hover:bg-gray-200 rounded-md'
                    >
                        <item.icon size={24} />
                        {isOpen && <span>{item.label}</span>}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default function Layout(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className='flex flex-col h-screen overflow-hidden'>
            {/* Header */}
            <header className='bg-white border-b text-black p-4 flex justify-between items-center'>
                <h1 className='text-xl font-regular'>Dev Notebook</h1>
                <button
                    className='md:hidden'
                    onClick={() => setIsOpen(!isOpen)}
                    toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </header>

            <div className='flex flex-1'>
                {/* Sidebar */}
                <aside
                // className={`bg-white border-r text-white w-64 p-4 absolute md:relative md:flex h-full transition-transform ${
                //     isOpen
                //         ? 'translate-x-0'
                //         : '-translate-x-full md:translate-x-0'
                // }`}
                >
                    <Sidebar
                        isOpen={isSidebarOpen}
                        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
                    />
                </aside>

                {/* Main Content */}
                <main className='flex-1  p-6 bg-gray-100'>
                    <h2 className='text-2xl font-semibold'>Main Content</h2>
                    <p className='mt-2'>Your content goes here...</p>

                    {props.children}
                </main>
            </div>
        </div>
    );
}
