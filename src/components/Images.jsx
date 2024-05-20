function Images() {
    return (
        <div className="flex max-w-screen mt-14 p-12 bg-gray-300 items-center justify-between space-x-3 mx-auto text-center" >
            <div className="space-y-8">
                <img src="../images/unnamed.jpg" alt="property"/>
                <p className="text-xl">Business Properties</p>
            </div>

            <div className="space-y-8">
                <img src="../images/unnamed.jpg" alt="property"/>
                <p className="text-xl">Housing Properties</p>
            </div>

            <div className="space-y-8">
                <img src="../images/unnamed.jpg" alt="property"/>
                <p className="text-xl">Landed Properties</p>
            </div>
            
        </div>
    )
}

export default Images
