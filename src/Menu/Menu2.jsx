import React from 'react'
import './Menu.css'
import image from '../assets/menu-girl.png'
import tshirt from '../assets/tshirt.png'

function Menu2() {
  return (
    <div className='relative py-4 lg:rounded-3xl lg:m-2 '>
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e1679a] to-[#7d74f7] opacity-35 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center flex-wrap w-full  ">
        <div className="flex text-center items-center justify-center w-full lg:w-2/5 h-auto lg:p-8 py-8 flex-col">
          <h1 className='left-heading text-center text-5xl lg:text-7xl font-[400] text-black tracking-[-3px]'>
            Fashion friendly <br />
            <span className='left-heading text-violet-600'>cloths</span> for fashion <br />
            <span className="left-heading text-emerald-700">Enthusiasts</span>
          </h1>
          <div className="flex mb-4 -mt-3 gap-8">
            <div className="lg:h-[60px] h-[70px] relative">
              <svg class="w-full h-full text-emerald-600 mt-8" viewBox="0 0 118 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.3957 81.791C45.0906 86.9586 48.4862 92.7841 55.6266 91.0079C57.9373 90.4331 60.1703 88.7705 61.2942 86.7286C62.5216 84.4988 62.1493 79.5323 62.4548 80.3819C66.1894 90.7679 85.9328 92.2394 85.9915 79.2904C85.9932 78.9119 83.3353 74.805 83.9589 74.8264C87.2526 74.9394 90.1328 78.7054 94.1216 78.8573C100.738 79.1092 110.2 74.6751 110.538 67.446C110.626 65.559 107.388 58.2445 109.306 57.8826C119.255 56.0047 119.796 43.9216 110.61 40.4364C107.653 39.3144 107.55 40.5719 108.957 37.982C111.898 32.5677 106.593 26.6425 103.082 23.0249C102.552 22.4791 91.4064 13.9402 92.498 17.504C92.6246 17.9175 93.2391 15.5699 93.2406 15.425C93.3 9.87155 87.646 6.81509 83.0689 4.64312C81.745 4.01487 68.3651 -1.45069 69.3041 4.86256C69.7905 8.13307 71.59 5.70099 66.7213 2.91929C60.8442 -0.438546 33.0486 0.485762 44.4746 11.1226C47.3723 13.8202 40.2387 9.40382 37.3758 9.50564C32.6965 9.67206 25.3072 13.6587 23.4967 18.1508C22.3752 20.9334 25.9005 22.5566 25.4 22.3376C19.3505 19.6905 14.7285 24.9893 11.8607 29.412C9.53507 32.9987 9.48059 38.3836 14.5397 39.6164C18.1042 40.485 12.9827 37.381 10.0597 40.8118C5.93371 45.6546 0.394041 53.787 1.49655 60.3514C2.23897 64.7718 7.0805 68.3933 11.1932 64.8386C11.6777 64.4199 13.2892 61.4133 11.8697 62.5315C10.0113 63.9954 8.50469 67.2639 8.00913 69.4614C6.79633 74.8393 7.97711 82.2758 15.58 80.8815C19.4847 80.1654 19.8702 75.5136 19.4106 80.7053C19.1424 83.7352 19.3088 86.7209 21.1936 89.2638C25.1949 94.6623 31.8175 91.9499 33.2595 86.1338C34.0736 82.8506 31.7287 86.9578 33.2235 90.1936C34.402 92.7448 38.836 94.0744 41.4559 93.9993C45.5647 93.8815 44.4257 82.882 44.6971 80.2318" stroke="currentColor" stroke-width="0.8751" className='stroke-[3px]' />
              </svg>
              <text className="absolute top-1/2 text-emerald-700 left-1/2 -translate-x-1/2 mt-8 -translate-y-1/2 text-center text-md  capitalize font-bold text-current">women</text>
            </div>
            {/* <div className="h-[80px] relative">
              <svg class="w-full h-full text-emerald-600 mt-14 " viewBox="0 0 98 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5499 12.0988C12.2078 11.884 5.94041 12.0727 5.30136 17.6042C5.02644 19.9839 6.35557 22.4799 8.67965 23.3421C12.4916 24.7564 13.0043 18.3211 7.60745 19.5497C2.97286 20.6048 -1.80781 27.6482 3.00605 31.4862C7.64289 35.1831 10.4848 28.5152 6.80795 28.8552C4.20138 29.0963 2.74701 33.1622 2.51927 35.3526C2.30058 37.4559 2.56405 44.47 6.03462 43.9141C7.03675 43.7537 10.6023 41.4379 8.42393 40.4667C2.69939 37.9147 -0.908137 52.0092 2.73339 55.2268C9.01966 60.7814 11.8247 48.4665 7.19923 50.0326C4.20807 51.0454 3.66528 56.7485 4.09363 59.2842C4.70608 62.9098 7.14556 66.484 11.2384 66.3978C13.1108 66.3583 15.4942 64.0776 14.4271 62.0415C12.5786 58.5143 10.7509 64.0182 10.5667 65.3072C10.0639 68.8267 11.6293 73.2444 15.0372 74.8191C17.739 76.0676 21.4255 75.2984 21.0435 71.5735C20.7989 69.1888 17.9206 69.0975 16.9535 71.0405C15.1151 74.7343 16.0482 79.8006 18.5433 82.9509C20.5371 85.4682 25.1896 88.7882 28.4886 86.5184C30.863 84.8848 32.9098 79.4805 30.177 77.1898C27.4095 74.87 26.5961 80.3305 26.6893 81.7771C26.9212 85.3739 31.2173 88.1685 34.4179 88.8321C38.8184 89.7445 42.7383 88.325 43.9981 83.7858C44.9385 80.3974 41.8129 76.6452 39.6909 80.9977C38.0181 84.4289 39.9775 87.9863 43.0507 89.741C47.6477 92.3657 52.2766 89.5853 54.7953 85.645C55.9522 83.8352 57.4747 80.8706 57.012 78.6224C56.7928 77.557 55.9989 76.7365 55.2128 77.8306C53.5792 80.104 54.2537 83.6309 56.6331 85.0905C60.5285 87.4801 65.4449 86.9298 69.1202 84.3157C71.2921 82.7709 75.6474 74.0143 69.9397 74.1152C66.589 74.1744 68.6927 79.5605 70.2524 80.5602C73.3191 82.5257 78.1526 81.9732 81.0127 79.8547C83.9037 77.7133 87.8771 71.1892 84.4633 67.9043C82.212 65.738 80.3376 67.7445 80.4073 70.3843C80.5062 74.1326 84.6922 75.8373 87.9617 74.6281C92.6923 72.8786 95.1172 66.4025 92.6433 61.9676C90.8007 58.6647 87.8372 59.7633 87.0236 63.0474C86.316 65.9037 89.0256 67.3656 91.7066 66.6905C96.4911 65.4857 97.7417 58.7336 96.5006 54.6261C95.6296 51.7433 91.589 49.1725 90.9087 53.5724C90.3847 56.9612 94.2689 56.0924 95.4377 53.9452C97.6964 49.7955 96.1698 43.5815 93.1008 40.3081C90.4153 37.4438 86.1289 38.5391 87.4996 43.0207C88.9839 47.8737 93.3403 44.8058 94.1514 41.4295C95.4827 35.8871 93.186 28.4777 87.8785 25.6604C84.3579 23.7917 80.9074 29.356 83.3757 31.8744C87.503 36.0854 88.775 23.3348 88.7181 21.4398C88.5662 16.3828 82.1531 8.48112 76.7024 12.6194C75.0797 13.8514 70.2877 21.5087 75.4207 21.5014C79.6881 21.4953 77.7255 14.6429 76.1186 12.7596C72.7782 8.84465 66.8391 6.64413 63.3111 11.364C61.1131 14.3045 64.1064 17.4228 65.249 13.9103C67.2494 7.76045 60.1847 4.10502 55.1157 4.27049C51.9961 4.37233 50.479 5.29606 48.8136 7.88427C47.9955 9.15577 46.6902 11.0051 48.2467 12.2467C50.8971 14.3607 51.4208 6.78822 49.5685 5.08691C45.131 1.01109 34.9553 0.120806 32.7218 6.87993C31.0612 11.9056 37.1048 11.8737 37.8609 7.28043C38.8666 1.17017 29.6966 0.142725 25.6572 1.56864C21.7937 2.93247 18.9645 11.8743 25.0041 10.9497C29.7415 10.2244 27.0247 4.60225 23.8179 3.68206C20.768 2.80688 17.9158 4.35294 16.6485 7.19879C15.2666 10.3021 17.312 11.9883 19.4891 13.7347" stroke="currentColor" stroke-width="0.8751" className='stroke-[2px]' />
              </svg>
              <text className="absolute top-1/2 left-1/2 -translate-x-1/2 mt-14 -translate-y-1/2 text-center text-md  capitalize font-bold text-current text-emerald-700">women</text>
            </div> */}
            <div className="h-[70px] relative ">
              <svg className="w-full h-full text-rose-500 mt-14" viewBox="0 0 106 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M70.8423 9.86716C59.6622 5.60783 49.8395 1.11676 38.4553 5.91542C34.5284 7.57068 30.6442 9.45214 26.9285 11.5441C18.4577 16.3132 11.2396 24.1273 7.45876 33.0895C-1.88543 55.2392 7.81207 86.5426 27.9757 99.208C38.8037 106.009 54.8064 105.049 66.8195 103.149C82.9732 100.595 96.2224 90.1311 100.583 74.0222C108.906 43.2747 78.7278 4.18236 45.6587 9.53462C20.1621 13.6613 14.8427 47.0192 16.0385 67.9124C17.964 101.556 62.5029 116.733 88.0264 96.2433C121.788 69.1406 98.9718 16.6268 63.6601 3.69717C47.5421 -2.20457 27.2262 2.6698 13.3991 11.7316C3.84526 17.9928 -0.321699 26.8379 1.65292 38.2901C6.1632 64.4483 21.3819 87.7525 36.8986 108.636" stroke="currentColor" stroke-width="0.8751 " className='stroke-[2px]  ' />
              </svg>
              <text className="absolute top-1/2  text-rose-600 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-md mt-14 capitalize font-bold text-current">men</text>
            </div>
            <div className="h-[80px] relative">
              <svg className="w-full h-full text-purple-500 mt-6" viewBox="0 0 104 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M57.1576 7.44863C53.831 5.16772 51.182 3.5966 47.193 3.21034C43.8401 2.88567 40.4399 2.98776 37.104 3.43439C27.4742 4.72371 18.5278 10.1981 11.7423 16.9887C4.51029 24.226 -0.0601712 34.0308 0.892389 44.4084C2.03799 56.8891 11.2616 65.8317 22.6653 69.7276C37.5325 74.8068 55.3079 71.9896 69.5261 65.9911C82.4612 60.534 98.1688 50.2841 102.471 35.9373C106.219 23.4392 95.872 11.7376 85.8562 5.97051C77.5557 1.19116 67.8156 -0.854239 58.4918 2.0932C51.6146 4.26724 44.7193 7.80313 39.1564 12.4182C32.891 17.616 28.6773 24.2755 24.1785 30.9319" stroke="currentColor" stroke-width="1.2047" stroke-linecap="round" className='stroke-[2px]' />
              </svg>
              <text className="absolute top-1/2 left-1/2 -translate-x-1/2 mt-6 -translate-y-1/2 text-center text-md  capitalize font-bold text-current text-purple-800">shop now</text>
            </div>
            {/* <div className='h-[90px] w-[90px] border-4 border-double rounded-[50%] flex items-center border-green-500 justify-center mt-6'>
              <div className='h-[80px] w-[80px] border-4  border-double rounded-[50%] flex items-center border-green-300 justify-center'>
                <p className="capitalize text-md font-semibold">latest</p>
              </div>
            </div> */}
          </div>
        </div>
        <div className="middle-img w-[80%] lg:w-1/5  lg:h-[80vh] h-[60vh] flex items-center justify-center lg:my-0 mt-4 ">
          <img src={image} alt="img" className='object-cover mt-6' />
        </div>
        <div className="grid grid-rows-2 grid-cols-2 gap-4 items-center w-full lg:w-2/5 h-auto lg:p-8 p-8 flex-col">
          <div className="flex text-center items-center justify-center flex-col gap-2 bg-violet-200 lg:h-[220px] lg:w-[200px]  h-[170px] w-[150px] middle-img">
            <div className="lg:h-[150px] lg:w-[150px] h-[100px] w-[100px] mt-14">
              <img src={tshirt} alt="img" />
            </div>
            <button className="captitalize rounded-3xl text-white py-1 px-3 text-sm  bg-violet-600 ">
              shop now
            </button>
          </div>
          <div className="flex text-center items-center justify-center flex-col gap-2 bg-emerald-100 lg:h-[220px] lg:w-[200px]  h-[170px] w-[150px] middle-img">
            <div className="lg:h-[150px] lg:w-[150px] h-[100px] w-[100px] mt-14">
              <img src={tshirt} alt="img" />
            </div>
            <button className="captitalize rounded-3xl text-white py-1 px-3 text-sm  bg-emerald-600 ">
              shop now
            </button>
          </div>

          <div className="flex text-center items-center justify-center flex-col gap-2 bg-rose-100 mt-2 lg:h-[220px] lg:w-[200px]  h-[170px] w-[150px] middle-img">
            <div className="lg:h-[150px] lg:w-[150px] h-[100px] w-[100px] mt-14">
              <img src={tshirt} alt="img" />
            </div>
            <button className="captitalize rounded-3xl text-white py-1 px-3 text-sm  bg-rose-600 ">
              shop now
            </button>
          </div>
          <div className="flex text-center items-center justify-center flex-col gap-2 mt-2 bg-sky-100 lg:h-[220px] lg:w-[200px]  h-[170px] w-[150px] middle-img">
            <div className="lg:h-[150px] lg:w-[150px] h-[100px] w-[100px] mt-14">
              <img src={tshirt} alt="img" />
            </div>
            <button className="captitalize rounded-3xl text-white py-1 px-3 text-sm  bg-sky-600 ">
              shop now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu2