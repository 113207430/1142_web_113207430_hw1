"use client"
import Image from "next/image"

export default function Core() {
  
  return (
    <div
      style={{
        backgroundImage: "url('/corebg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        // backgroundColor: '#000', // 上下左右留白的顏色，可以自行調整
      }}
    >
    </div> 
  );
}
