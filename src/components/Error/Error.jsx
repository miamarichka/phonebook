import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Error = () => {
const notify = () => toast.error('Something went wrong!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
});;
    return (
        <>
         <div>{notify}</div>
         <ToastContainer />
        </>
    )
}