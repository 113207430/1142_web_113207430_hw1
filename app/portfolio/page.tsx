"use client"
import Image from "next/image"

export default function Portfolio() {
//4/9
    // let projectData = {
    //   "1":{
    //       "name":"專案1",
    //       "imageUrl": "/portfolio.png",
    //   }, 

    //   "2":{
    //       "name":"專案2",
    //       "imageUrl": "/corebg.png",
    //   }, 
    // };
  // 4/9



  
  return (
    <div
      style={{
        backgroundImage: "url('/portfolio.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        // backgroundColor: '#000', // 上下左右留白的顏色，可以自行調整
      }}
    >
{/* 4/9 */}
      {/* <div className="bg-white h-full w-full p-3">
        <div className="text-[32px]">作品集</div>
        <div className="text-[16px] text-gray-600" >這裡收錄我的作品</div>

        <div className="grid grid-cols-3 gap-4">
              <div className={`bg-amber-50 rounded-2xl h-40 flex justify-center items-center row-span-2 
                                bg-[url(/portfolio.png)] bg-center bg-cover relative overflow-hidden`} 

                               >
                
                
                <div className="text-white bg-black/15 w-full h-[80px] justify-center item-center 
                backdrop-blur-sm absolute bottom-0 
                
                " >
                  {projectData["1"]["name"]}
                </div>

                <div className="text-white text-4xl absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 ">定位</div>
                
              
                
              </div>
              <div className={`bg-amber-50 rounded-2xl h-40 flex justify-center items-center row-span-2 
                                bg-[url(/${projectData["2"]["imageUrl"]})] bg-center bg-cover relative overflow-hidden`} 
                                 style={{ backgroundImage: `url(${projectData["2"]["imageUrl"]})`}}>

              <div className="text-white bg-black/15 w-full h-[80px] justify-center item-center 
                backdrop-blur-sm absolute bottom-0 
                
                " >
                  專案2
              </div>


              </div>

              <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案3</div>
              <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center row-span-2 col-span-2">專案4</div>
              <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案5</div>
              <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案6</div>
              <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案7</div>
              <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案8</div>
              <div className="bg-amber-50 rounded-2xl h-40 flex justify-center items-center ">專案9</div>
      </div>
    </div> */}
    {/* 4/9 */}




    </div> 
  );
}
