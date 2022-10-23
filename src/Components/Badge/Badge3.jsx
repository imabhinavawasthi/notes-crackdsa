import React from 'react'
import "./badge.css"

const Badge3 = () => {
  return (
    <div>
        <div class="animated_badge animated_badge_3">
        <div class="animated_stars">
            <div class="animated_star plus"></div>
            <div class="animated_star donut yellow"></div>
            <div class="animated_star plus"></div>
            <div class="animated_star donut"></div>
            <div class="animated_star plus yellow"></div>
        </div>
        <svg class="animated_badge_svg" width="75" height="100" viewBox="0 0 75 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="badge_ribbon"
                d="M16 86.7506V62C16 59.2386 18.2386 57 21 57H55C57.7614 57 60 59.2386 60 62V86.8112C60 88.7561 58.8722 90.5246 57.1087 91.3448L40.5616 99.0411C39.2517 99.6504 37.7424 99.6633 36.4223 99.0766L18.9693 91.3197C17.1637 90.5172 16 88.7266 16 86.7506Z"
                fill="#71A1F4" />
            <path class="badge_ribbon"
                d="M16 86.7506V62C16 59.2386 18.2386 57 21 57H55C57.7614 57 60 59.2386 60 62V86.8112C60 88.7561 58.8722 90.5246 57.1087 91.3448L40.5616 99.0411C39.2517 99.6504 37.7424 99.6633 36.4223 99.0766L18.9693 91.3197C17.1637 90.5172 16 88.7266 16 86.7506Z"
                fill="#71A1F4" />
            <path class="badge_ribbon"
                d="M16 86.7506V62C16 59.2386 18.2386 57 21 57H55C57.7614 57 60 59.2386 60 62V86.8112C60 88.7561 58.8722 90.5246 57.1087 91.3448L40.5616 99.0411C39.2517 99.6504 37.7424 99.6633 36.4223 99.0766L18.9693 91.3197C17.1637 90.5172 16 88.7266 16 86.7506Z"
                fill="url(#paint0_linear)" />
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="16" y="57" width="44" height="43">
                <path
                    d="M16 86.7506V62C16 59.2386 18.2386 57 21 57H55C57.7614 57 60 59.2386 60 62V86.8112C60 88.7561 58.8722 90.5246 57.1087 91.3448L40.5616 99.0411C39.2517 99.6504 37.7424 99.6633 36.4223 99.0766L18.9693 91.3197C17.1637 90.5172 16 88.7266 16 86.7506Z"
                    fill="#71A1F4" />
                <path
                    d="M16 86.7506V62C16 59.2386 18.2386 57 21 57H55C57.7614 57 60 59.2386 60 62V86.8112C60 88.7561 58.8722 90.5246 57.1087 91.3448L40.5616 99.0411C39.2517 99.6504 37.7424 99.6633 36.4223 99.0766L18.9693 91.3197C17.1637 90.5172 16 88.7266 16 86.7506Z"
                    fill="url(#paint1_linear)" />
            </mask>
            <g class="badge_ribbon" mask="url(#mask0)">
                <rect x="23" y="60" width="8" height="40" fill="#ABC7F9" />
                <rect x="43" y="60" width="8" height="40" fill="#ABC7F9" />
            </g>
            <circle cx="37.5" cy="37.5" r="33.5" fill="#C0C6CF" stroke="#C0C6CF" stroke-width="8" />
            <circle class="badge_circle" cx="37.5" cy="37.5" r="29.5" fill="#C0C6CF" stroke="#EAEDF2" stroke-width="4" />
            <path class="badge_number"
                d="M32.72 40.88C32.9 43.36 34.62 45.26 37.64 45.26C40.72 45.26 42.66 43.42 42.66 40.78C42.66 39.02 41.72 37.68 40.02 37.12C41.16 36.52 41.94 35.5 41.94 34.16C41.94 31.94 40.28 30.42 37.7 30.42C35.12 30.42 33.48 32.04 33.42 34.26H35.72C35.84 33.14 36.6 32.5 37.64 32.5C38.64 32.5 39.46 33.06 39.48 34.24C39.48 35.76 38.24 36.24 36.66 36.24V38.24H37.22C38.86 38.24 40.14 38.96 40.14 40.7C40.14 42.06 39.2 43.16 37.7 43.16C36.14 43.16 35.32 42.24 35.16 40.88H32.72Z"
                fill="white" />
            <defs>
                <linearGradient id="paint0_linear" x1="38" y1="57" x2="38" y2="89.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#27539F" />
                    <stop offset="1" stop-color="#71A1F4" stop-opacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="38" y1="57" x2="38" y2="89.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#27539F" />
                    <stop offset="1" stop-color="#71A1F4" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
    </div>
    </div>
  )
}

export default Badge3