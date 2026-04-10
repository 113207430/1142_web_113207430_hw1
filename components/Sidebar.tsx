"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const sidebarContent = (
    <div className="w-[280px] h-full p-4" style={{ backgroundColor: '#482a1d' }}>
      <Link href="/home" onClick={() => setMenuOpen(false)}>
        <div className="flex justify-center items-center w-full" id="work-1">
          <Image src="/cdbb.png" alt="avatar" width={80} height={80} />
        </div>
      </Link>

      <div className="text-center sidebar-info">陳歆穎</div>
      <div className="text-center sidebar-info">19y | NCCU LE | NCCU DCT</div>

      <div className="flex gap-2 justify-center">
        <a href="https://www.instagram.com/cindibabie" target="_blank" rel="noopener noreferrer">
          <div className="w-[60px] h-[60px] flex justify-center items-center">
            <Image src="/INS.png" alt="instagram" width={60} height={60} />
          </div>
        </a>
        <a href="mailto:sinying950821@gmail.com">
          <div className="w-[60px] h-[60px] flex justify-center items-center">
            <Image src="/EMAIL.png" alt="email" width={60} height={60} />
          </div>
        </a>
        <a href="https://www.facebook.com/chen.xin.ying.565718" target="_blank" rel="noopener noreferrer">
          <div className="w-[60px] h-[60px] flex justify-center items-center">
            <Image src="/FB.png" alt="facebook" width={60} height={60} />
          </div>
        </a>
      </div>

      <div className="flex gap-7 justify-center sidebar-info" id="work-2">
        <div>Instagram</div>
        <div>Email</div>
        <div>Facebook</div>
      </div>

      <Link href="/about" onClick={() => setMenuOpen(false)}>
        <div id="btn-about">關於我</div>
      </Link>
      <Link href="/hobby" onClick={() => setMenuOpen(false)}>
        <div id="btn-hobby">我的興趣</div>
      </Link>
      <Link href="/portfolio" onClick={() => setMenuOpen(false)}>
        <div id="btn-portfolio">我的作品集</div>
      </Link>
      <Link href="/core" onClick={() => setMenuOpen(false)}>
        <div id="btn-core">我的核心</div>
      </Link>
    </div>
  );

  return (
    <>
      {/* 桌機：直接顯示 */}
      {!isMobile && (
        <div className="h-full flex-shrink-0">
          {sidebarContent}
        </div>
      )}

      {/* 手機：選單打開時全螢幕顯示 */}
      {isMobile && menuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="h-full overflow-y-auto">
            {sidebarContent}
          </div>
          <div className="flex-1" onClick={() => setMenuOpen(false)} />
        </div>
      )}

      {/* 手機：右下角漢堡按鈕 */}
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 100,
            backgroundColor: '#482a1d',
            border: '2px solid #c9a84c',
            borderRadius: '50%',
            width: '56px',
            height: '56px',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#c9a84c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      )}
    </>
  );
}