function Breadcrumb() {

    return (

<>
   <div className="flex items-center justify-between page-header-breadcrumb flex-wrap gap-2">
        <div>
            <h1 className="page-title font-medium text-lg mb-0">Dashboard</h1>
            <nav>
                <ol className="flex items-center whitespace-nowrap min-w0 pb-2 mt-4">
                    <li className="text-sm">
                        <a className="flex items-center text-primary hover:text-primary dark:text-primary"
                        href="javascript:void(0);">
                            <span className="bi bi-house-door"></span>
                            <span className="px-3">Home</span>
                            <span className="bi bi-chevron-right"></span>
                        </a>
                    </li>
                    <li className="text-sm px-3">
                        <a className="flex items-center text-gray-500 dark:text-[#8c9097] dark-text-white/50 hover:text-primary"
                            href="javascript:void(0);">
                                Dashboard
                            </a>
                    </li>
                </ol>
            </nav>
        </div>
    </div>     
</>
    )
}

export default Breadcrumb