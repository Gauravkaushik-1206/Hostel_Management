import React from 'react'
import { FaTachometerAlt, FaShoppingCart, FaUsers, FaUser, FaBox, FaCog } from 'react-icons/fa';

const Sidebar = () => {
	return (
		<div className="text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r-2 border-black">
			<h1 className='text-2xl font-bold hidden md:block mt-4 text-center italic'>Hostel Management</h1>
			<ul className='flex flex-col mt-5 text-xl'>
				<li className='flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:bg-blue-600 hover:text-white'>
					<FaTachometerAlt />
					<span className='hidden md:inline'>Dashboard</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600">
					<FaShoppingCart />
					<span className="hidden md:inline ">Notifications</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600">
					<FaUsers />
					<span className="hidden md:inline ">Register Complaint</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600">
					<FaUser />
					<span className="hidden md:inline ">LogOut</span>
				</li>
				{/* <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600">
					<FaBox />
					<span className="hidden md:inline ">Products</span>
				</li>
				<li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600">
					<FaCog />
					<span className="hidden md:inline ">Settings</span>
				</li> */}
			</ul>
		</div>
	)
}

export default Sidebar
