function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-14 ml-5 w-[100%]">
            <img
                src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
                alt="dp"
                className="w-16 h-16 rounded-full border p-[2px]"
            />

            <div className="flex-1 mx-4">
                <h2 className="font-bold">Ali Jawwad</h2>
                <h3 className="text-xs text-gray-400">aj99</h3>
            </div>
            <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
        </div>
    )
}

export default MiniProfile
