import Breadcrumb from "../components/breadcrums"
import Header from "../layouts/header"
import Sidemenu from "../layouts/sidemenu"
import logo from '../assets/images/faces/14.jpg';

function Dashboard()  {
return (
    <>
        <Header />
        <Sidemenu />
        <div className="main-content app-content">
            <div className="container-fluid">
                <Breadcrumb />
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box overflow-hidden main-content-card">
                            <div className="box-body text-center p-5">
                                <center>
                                    <img src={logo} alt="" className="transparent-logo avatar-rounded" />
                                    <p className="mt-2 mb-0"><span><i>Welcome back! Customer</i></span></p>

                                </center>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-9 col-span-12">
                        <div className="box overflow-hidden main-content-card">
                            <div className="box-body p-5">
                                <p className="mt-2 mb-0"><span>Content here...</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default Dashboard