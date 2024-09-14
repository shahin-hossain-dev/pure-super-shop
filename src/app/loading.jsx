import Image from 'next/image'
const Loading = () => {
    return  <div className="h-screen flex justify-center items-center -mt-10"><Image src="/assets/Banner_Image/loading.gif" alt="loading" width="400" height="400"></Image></div>;
  }
export default Loading;