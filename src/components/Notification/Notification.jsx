import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Notification = () => {

  return (
    <ToastContainer
      position="top-left"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};
