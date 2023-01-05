import { RouterProvider } from 'react-router-dom';
import './App.css';
import Sidebar from './layouts/Sidebar';
import Topbar from './layouts/Topbar';
import { router } from './routers';

function App() {
  return (
    <>
    <div>
        <Topbar/>
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
                    <RouterProvider router={router} />
                </main>
            </div>
        </div>
    </div>
</>
  );
}

export default App;
