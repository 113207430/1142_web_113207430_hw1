"use client"
import Image from "next/image"
import { useState, useEffect } from "react"

const photos = [
  { src: '/01.png', label: '學設計', top: 50, left: 200, width: 360},
  { src: '/02.png', label: '做畫', top: 120, left: 650, width: 400},
  { src: '/03.png', label: '聽音樂', top: 350, left: 50, width: 240},
  { src: '/4.png', label: '享天倫之樂', top: 500, left: 380, width: 380},
  { src: '/7.png', label: '在每次吃蓮藕的時候說吃藕醜', top: 900, left: 120, width: 280},
  { src: '/5.png', label: '做薑餅屋', top: 600, left: 850, width: 250},
  { src: '/6.png', label: '指甲塗漂漂', top: 880, left: 530, width: 270},
  { src: '/8.png', label: '沙發馬鈴薯', top: 1350, left: 70, width: 310},
  { src: '/dump.png', label: '包餃子', top: 1300, left: 390, width: 470},
  { src: '/10.png', label: '辦趴踢', top: 1100, left: 840, width: 260},
  { src: '/11.png', label: '看戲', top: 1700, left: 30, width: 230},
  { src: '/12.png', label: '觀察世界', top: 1800, left: 400, width: 350},
  { src: '/13.png', label: '空間佈置', top: 1600, left: 850, width: 230},
]

export default function Hobby() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  if (isMobile) {
    return (
      <div style={{ width: '100%', overflowY: 'scroll', minHeight: `${photos.length * 430}px` }}>
        <div style={{
          backgroundImage: "url('/hobb.png')",
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat-y',
          width: '100%',
          minHeight: `${photos.length * 430}px`,
          position: 'relative',
        }}>
          {photos.map((photo, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: index * 430,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              <Image
                src={photo.src}
                alt={photo.label}
                width={photo.width}
                height={photo.width * 0.75}
                style={{ objectFit: 'cover', display: 'block', marginTop: '20px'}}
              />
              <svg width={photo.width} height="30" overflow="visible" style={{ marginTop: '20px' }}>
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

  return (
    <div style={{ width: '100%', height: '100vh', overflowY: 'scroll', overflowX: 'scroll'}}>
      <div style={{
        backgroundImage: "url('/hobb.png')",
        backgroundSize: 'cover',
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
            <svg width={photo.width} height="30" overflow="visible" style={{ marginTop: '6px' }}>
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