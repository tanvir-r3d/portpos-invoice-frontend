function Sidebar() {
    return (
        <>
            <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                <div className="position-sticky">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="/orders">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"
                                     strokeLinejoin="round" className="feather feather-file">
                                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/>
                                    <polyline points="13 2 13 9 20 9"/>
                                </svg>
                                <span className="ml-2">Orders</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Sidebar;