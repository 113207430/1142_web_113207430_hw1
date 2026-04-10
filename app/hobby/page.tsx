"use client"
import Image from "next/image"


// 照片資料
const photos = [
  { src: '/1.png', label: '學設計', top: 30, left: 350, width: 380},
  { src: '/2.png', label: '做畫', top: 70, left: 850, width: 450},
  { src: '/3.png', label: '聽音樂', top: 350, left: 100, width: 260},
  { src: '/4.png', label: '享天倫之樂', top: 450, left: 480, width: 400},
  { src: '/7.png', label: '在每次吃蓮藕的時候說吃藕醜', top: 600, left: 1000, width: 270},
  { src: '/5.png', label: '做薑餅屋', top: 900, left: 220, width: 250},
  { src: '/6.png', label: '指甲塗漂漂', top: 850, left: 620, width: 220},
  { src: '/8.png', label: '沙發馬鈴薯', top: 1350, left: 120, width: 330},
  { src: '/9.png', label: '包餃子', top: 1250, left: 610, width: 320},
  { src: '/10.png', label: '辦趴踢', top: 1050, left: 1020, width: 280},
  { src: '/11.png', label: '看戲', top: 1700, left: 80, width: 250},
  { src: '/12.png', label: '觀察世界', top: 1750, left: 530, width: 400},
  { src: '/13.png', label: '空間佈置', top: 1600, left: 1020, width: 320},
]

export default function Hobby() {
  return (
    <div style={{ width: '100%', height: '100vh', overflowY: 'scroll', overflowX: 'scroll'}}>
      <div style={{
        backgroundImage: "url('/hobb.png')",
        backgroundSize: 'cover',
        // backgroundPosition: 'top center',
        backgroundRepeat: 'repeat-y',
        
        width: '100%',
        minHeight: '250%',
        position: 'relative',
      }}>
        {photos.map((photo, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: photo.top,
              left: photo.left,
              textAlign: 'center',
            }}
          >
            <Image
              src={photo.src}
              alt={photo.label}
              width={photo.width}
              height={photo.width * 0.75}
              style={{ objectFit: 'cover', display: 'block' }}
            />
            <svg width="100%" height="30" overflow="visible" style={{ marginTop: '6px' }}>
              <text
                x="50%"
                y="20"
                textAnchor="middle"
                fontSize="24"
                fontWeight="508"
                fill="#e8ce70"
                stroke="#000"
                strokeWidth="3"
                paintOrder="stroke fill"
                fontFamily="BIZ UDMincho, serif"
                letterSpacing="2"
              >
                {photo.label}
              </text>
            </svg>
          </div>
        ))}
      </div>
    </div>
  )
}