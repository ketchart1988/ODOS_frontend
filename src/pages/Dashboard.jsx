import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import NavbarDashboard from "../components/NavbarDashboard";

function Dashboard() {
    return (
        <div className="LINESeed">
            <NavbarDashboard />
            <br />
            <br />
            <div className="h-screen flex items-center justify-center p-10">
                <iframe src="https://app.powerbi.com/view?r=eyJrIjoiMTljYWM1YzUtYTAwYi00OTZhLTg0ZjYtNWFjN2FmODdkZjgzIiwidCI6IjRhNGY3YjUyLTBlMDUtNDQxNS04NDU0LTc2ODliMDBhODdiMiIsImMiOjEwfQ%3D%3D"
                    width={1000}
                    height={660}

                />
            </div>
             <div className="h-screen flex items-center justify-center p-10">
                <iframe src="https://app.powerbi.com/view?r=eyJrIjoiMTljYWM1YzUtYTAwYi00OTZhLTg0ZjYtNWFjN2FmODdkZjgzIiwidCI6IjRhNGY3YjUyLTBlMDUtNDQxNS04NDU0LTc2ODliMDBhODdiMiIsImMiOjEwfQ%3D%3D&pageName=eb03ca756a26edde19f2"
                    width={1000}
                    height={660}

                />
            </div>
            <ScrollToTop />
            <div className="flex flex-col">
                <Footer />
            </div>
        </div>
    );
}

export default Dashboard;