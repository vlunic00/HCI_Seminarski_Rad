function Cards(){
    return(
        <>
        <div className="flex mt-8">
            <div className="mx-auto block w-80 h-80 bg-gradient-to-b from-gray-600 to-slate-900 rounded-lg shadowx">
                <div className="w-full mt-8 px-3 flex justify-between">
                    <img src="/images/database.png" className="h-16 ml-2"></img>
                    <img src="/images/arrow2.svg" className="h-12 mt-2 mr-2"></img>
                </div>
                <p className="font-space font-bold text-4xl text-white w-10 mt-8 ml-6">Cloud storage</p>
                <p className="font-space text-l text-white mt-2 ml-6">Provides customized solutions to create and maintain software applications.</p>
            </div>
        </div>
        </>
    )
}

export default Cards