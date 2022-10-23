import React from 'react'
import "./badge.css"

const Badge2 = () => {
  return (
    <div><div class="animated_badge animated_badge_2">
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
            <rect x="30" y="60" width="15" height="40" fill="#ABC7F9" />
        </g>
        <circle class="badge_circle" cx="37.5" cy="37.5" r="33.5" fill="#71A1F4" stroke="#CEDCF5" stroke-width="8" />
        <path class="badge_number"
            d="M41.1783 45V42.86H35.0183C37.2183 40.82 41.1783 38.44 41.1783 34.8C41.1783 32.3 39.3983 30.42 36.4383 30.42C33.3583 30.42 31.6983 32.54 31.6983 35.14C31.6983 35.18 31.7183 35.22 31.7183 35.28H34.0983C34.1183 33.76 34.8383 32.62 36.4383 32.62C37.8183 32.62 38.6383 33.52 38.6383 34.86C38.6383 36.22 37.8583 37.38 36.0583 39.04C34.3783 40.62 31.8183 42.92 31.8183 42.92V45H41.1783Z"
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
</div></div>
  )
}

export default Badge2