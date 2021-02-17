
export default function DefaultBlock ({children, title}) {

    return(
        <div>
            <div className="p-3 bg-white rounded-xl shadow-md text-sm">
                <div className="p-1 mb-4 font-sans font-medium text-base text-gray-400">
                    {title}
                </div>

                {children}
            </div>
        </div>
    )
}