"use client"
import Image from "next/image"

export default function Core() {
  return (
    <div
      style={{
        backgroundColor: '#482a1d', // 相框外的底色，可調整
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{
        backgroundImage: "url('/corebg.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
      }} />
    </div>
  );
}
