const Orders = () => {
    return (
        <>
            <div className="breadcrumb flex items-center gap-2">
                <p className="font-bold">Dashboard</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg>
                <p className="font-bold text-bcr-neutral03">Dashboard</p>
            </div>
            <h2 className="">Dashboard</h2>
            <div className="flex gap-2">
                <div className="rectangle3 bg-bcr-blue"></div>
                <h3 className="list-name">List Order</h3>
            </div>
            <table className="sm:text-xs lg:text-sm">
                <thead>
                    <tr className="bg-bcr-slighterlightblue">
                        <th className="th-no rounded-tl">No
                            <button className="relative top-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                </svg>
                            </button>
                        </th>
                        <th>User Email
                            <button className="relative top-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                </svg>
                            </button>
                        </th>
                        <th>Car
                            <button className="relative top-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                </svg>
                            </button>
                        </th>
                        <th>Start Rent
                            <button className="relative top-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                </svg>
                            </button>
                        </th>
                        <th>Finish Rent
                            <button className="relative top-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                </svg>
                            </button>
                        </th>
                        <th>Price
                            <button className="relative top-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                </svg>
                            </button>
                        </th>
                        <th className="rounded-tr">Status
                            <button className="relative top-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
                                </svg>
                            </button>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className="td-no">1</td>
                        <td>Email</td>
                        <td>Car</td>
                        <td>Date</td>
                        <td>Date</td>
                        <td>0000000</td>
                        <td>Status</td>
                    </tr>
                    <tr>
                        <td className="td-no">2</td>
                        <td>Email</td>
                        <td>Car</td>
                        <td>Date</td>
                        <td>Date</td>
                        <td>0000000</td>
                        <td>Status</td>
                    </tr>
                    <tr>
                        <td className="td-no">3</td>
                        <td>Email</td>
                        <td>Car</td>
                        <td>Date</td>
                        <td>Date</td>
                        <td>0000000</td>
                        <td>Status</td>
                    </tr>
                </tbody>
            </table>

            <div className="flex justify-between items-center sm:text-xs lg:text-sm">
                <div className="flex gap-6">
                    <div className="flex flex-col justify-between">
                        <label htmlFor="page-limit">Limit</label>
                        <input type="number" id="page-limit" className="h-10 w-14 text-center border rounded-sm border-bcr-neutral02 text-bcr-neutral03" min="5" max="10" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <label htmlFor="jump-to-page">Jump to page</label>
                        <div className="flex h-10">
                            <input type="number" id="jump-to-page" className="h-10 w-14 text-center border rounded-sm border-bcr-neutral02 text-bcr-neutral03" min="1" max="10" />
                            <button className="bg-bcr-blue w-10 text-white rounded-sm border-bcr-neutral02 border">Go</button>    
                        </div>
                    </div>    
                </div>

                <div className="flex justify-center items-center self-end text-bcr-neutral03">
                    <button className="border rounded-sm border-bcr-neutral02 w-10 h-10 bg-white">{'<<'}</button>
                    <button className="border rounded-sm border-bcr-neutral02 w-10 h-10 bg-white hidden sm:block">1</button>
                    <button className="border rounded-sm border-bcr-neutral02 w-10 h-10 bg-white sm:hidden">1</button>
                    <button className="border rounded-sm border-bcr-neutral02 w-10 h-10 bg-white sm:hidden">2</button>
                    <button className="border rounded-sm border-bcr-neutral02 w-10 h-10 bg-white sm:hidden">3</button>
                    <button className="border rounded-sm border-bcr-neutral02 w-10 h-10 bg-white sm:hidden">...</button>
                    <button className="border rounded-sm border-bcr-neutral02 w-10 h-10 bg-white sm:hidden">4</button>
                    <button className="border rounded-sm border-bcr-neutral02 w-10 h-10 bg-white">{'>>'}</button>
                </div>
            </div>
        </>
    )
}

export default Orders