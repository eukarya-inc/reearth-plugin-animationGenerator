reearth.ui.show(
  `
  <style>
    @font-face {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2)
        format("woff2");
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
        U+2215, U+FEFF, U+FFFD;
    }
    @font-face {
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/notosans/v27/o-0IIpQlx3QUlC5A4PNr5TRASf6M7Q.woff2)
        format("woff2");
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
        U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
        U+2215, U+FEFF, U+FFFD;
    }
  
    html,
    body {
      margin: 0;
      height: auto;
      overflow: hidden;
      width: 508px;
      max-width: 508px;
    }
  
    #wrapper {
      display: block;
      gap: 20px;
      background: #171618;
      overflow: hidden;
      max-width: 508px;
      max-height: 779px;
      border-radius: 4px;
    }
  
    /* width */
    ::-webkit-scrollbar {
      width: 1px;
    }
  
    /* Track */
    ::-webkit-scrollbar-track {
      background: #28272f;
    }
  
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #171618;
      overflow: hidden;
      max-width: 508px;
      max-height: 779px;
    }
  
    .section .extendedh,
    .extendedh {
      width: 46px;
      cursor: pointer;
    }
    .section .extendedv,
    .extendedv {
      height: 46px;
    }
    #wrapper {
      box-sizing: border-box;
    }
    .extendedh body,
    .extendedh #wrapper {
      width: 46px;
      border-radius: 4px;
    }
    .extendedv body,
    .extendedv #wrapper {
      max-height: 817px;
      height: 46px;
    }
  
    .height-46 {
      height: 46px;
      width: 46px;
      border-radius: 4px;
    }
  
    div#form-wrapper {
      margin-bottom: 18px;
      margin-left: 15px;
      margin-right: 15px;
      max-width: 508px;
      display: flex;
      flex-direction: row;
    }
  
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #171618;
    }
    .section .extendedh,
    .extendedh {
      width: 46px;
      cursor: pointer;
    }
    .section .extendedv,
    .extendedv {
      height: 46px;
    }
    #wrapper {
      box-sizing: border-box;
    }
    .extendedh body,
    .extendedh #wrapper {
      width: 46px;
      border-radius: 4px;
    }
    .extendedv body,
    .extendedv #wrapper {
      max-height: 317px;
      height: 46px;
    }
  
    .height-46 {
      height: 46px;
      width: 46px;
      border-radius: 4px;
    }
  
    div#form-wrapper {
      margin-bottom: 18px;
      margin-left: 15px;
      margin-right: 15px;
      max-width: 508px;
    }
    p,
    h3,
    span,
    label {
      color: #bfbfbf;
    }
  
    #title {
      font-family: "Roboto" !important;
      font-style: normal;
      font-weight: 700;
      font-size: 14px;
      line-height: 22px;
      margin: 0px;
      height: 30px;
      background: #171618;
      border-radius: 4px 4px 0px 0px;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 500;
      display: flex;
      justify-content: start;
      align-items: center;
      cursor: pointer;
      padding-bottom: 16px;
      padding-left: 15px;
      padding-right: 15px;
      padding-top: 5px;
    }
  
    p.title-p {
      margin-top: 15px;
      margin-left: 5px;
    }
  
    span#logo {
      position: relative;
      top: 4px;
      margin-right: 8px;
    }
  
    .common-input {
      width: calc(100% - 85px);
      background: #171618;
      border: 1px solid #4a4a4a;
      height: 27px;
      color: #c7c5c5;
      font-size: 12px;
      padding-left: 7px;
      float: right;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
    }
  
    #lat-input{
      width: calc((100% - 100px) / 2);
      background: #171618;
      float: right;
      border: 1px solid #4a4a4a;
      height: 27px;
      color: #c7c5c5;
      font-size: 12px;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      padding-left: 7px;
    }
    
    #numbertime-input {
      width: calc((100% - 100px) / 2);
      background: #171618;
      border: 1px solid #4a4a4a;
      height: 27px;
      color: #c7c5c5;
      font-size: 12px;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      padding-left: 7px;
    }

    #lng-input {
      width: 99px;
      background: #171618;
      border: 1px solid #4a4a4a;
      height: 27px;
      color: #c7c5c5;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      padding-left: 7px;
    }
  
    #unittime-input {
      width: 75px;
      background: #171618;
      border: 1px solid #4a4a4a;
      height: 31px;
      color: #c7c5c5;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      padding-left: 7px;
    }
  
    /* Chrome, Safari, Edge, Opera */
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  
    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }
    *:focus {
      outline: none;
    }
  
    .blue-btn {
      font-size: 12px;
      font-family: "Noto Sans";
      line-height: 22px;
      text-align: center;
      color: #ffffff;
      background: #3b3cd0;
      border: solid 1px #3b3cd0;
      box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
      border-radius: 4px;
      padding: 5px;
      height: 30px;
      width: 100%;
      cursor: pointer;
    }
  
    button {
      display: inline-block;
    }
  
    #export {
      margin-bottom: 12px;
      margin-top: 5px;
    }
  
    span.arrow {
      position: relative;
      left: 190px;
      top: -25px;
      font-size: 20px;
      color: #4a4a4a;
    }
  
    #close {
      box-sizing: border-box;
      position: relative;
      display: block;
      transform: scale(var(--ggs, 1));
      width: 22px;
      height: 22px;
      border: 2px solid transparent;
      border-radius: 40px;
      left: 300px;
      top: 1px;
      color: #595959;
    }
  
    #close::after,
    #close::before {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      width: 16px;
      height: 2px;
      background: currentColor;
      transform: rotate(45deg);
      border-radius: 5px;
      top: 8px;
      left: 1px;
    }
    #close::after {
      transform: rotate(-45deg);
    }
  
    span.down-ar {
      display: block;
      overflow: hidden;
      position: relative;
      top: 1px;
      left: 165px;
      transform: rotate(0deg);
    }
  
    #closed-logo {
      display: none;
      overflow: hidden;
      width: 21px;
      height: 21px;
      cursor: pointer;
      margin-top: 11px;
      margin-left: 12px;
      background: #181618;
      padding: 5px;
      border-radius: 5px;
    }
  
    @media only screen and (min-width: 1440px) {
      span.down-ar {
        top: 0px;
      }
    }
  
    #left-section {
      color: #c7c5c5;
      width: 172px;
    }
  
    #right-section {
      display: none;
      color: #c7c5c5;
      padding-left: 15px;
      width: 312px;
    }
  
    #temp-right-section {
      color: #4a4a4a;
      padding-left: 15px;
      width: 312px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-family: "Noto Sans";
      font-style: normal;
    }
  
    .action-list-span {
      float: right;
    }
  
    #animation-list {
      min-height: 172px;
      height: calc(100% - 65px);
      border: 1px solid #4a4a4a;
      margin-top: 5px;
      margin-bottom: 5px;
      overflow-y: scroll;
      overflow-x: hidden;
      max-height: 545px;
    }
  
    .form-group {
      margin: 0;
      position: static;
      display: block;
      overflow: hidden;
      height: 34px;
      margin-top: 5px;
    }

    .m {
      display: flex;
      align-items: center;
    }
  
    .input-title {
      font-size: 12px;
      font-family: "Noto Sans";
      width: 70px;
      display: inline-block;
      margin-top: 6px;
    }
  
    #height-label {
      margin-top: 7px;
    }
  
  
    .title-list {
      font-size: 12px;
      font-family: "Noto Sans";
    }
  
    #keypoint-list {
      height: 128px;
      border: 1px solid #4a4a4a;
      margin-top: 5px;
      margin-bottom: 5px;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  
    #keypoint-section {
      margin-top: 10px;
      display: none;
    }
  
    ::-webkit-calendar-picker-indicator {
      filter: invert(0.5);
    }
  
    .animation-item {
      height: 40px;
      align-items: center;
      display: flex;
      padding-left: 24px;
      font-size: 12px;
      font-family: "Noto Sans";
      font-weight: 700;
    }
  
    .animation-item:hover {
      cursor: pointer;
      background-color: #3f3d45;
      color: white;
    }

  .keypoint-item {
    height: 32px;
    align-items: center;
    display: flex;
    padding-left: 12px;
    font-size: 12px;
    font-family: "Noto Sans";
    font-weight: 500;
    }

  .keypoint-item:hover {
      cursor: pointer;
      background-color: #3f3d45;
      color: white;
    }
  
    #temp-div {
      display: none;
    }
  
    .btn {
      cursor: pointer;
    }
  
    #lng-location-label,
    #lat-location-label {
      font-size: 10px;
      font-family: "Noto Sans";
      font-weight: 500;
      color: #4a4a4a;
    }
  
    #lat-location-label {
      padding-left: 45px;
    }
  
    #lng-location-label {
      padding-left: 90px;
    }
  
    #time-label-2 {
      font-size: 12px;
      font-family: "Noto Sans";
      font-weight: 500;
      padding-left: 8px;
    }
  
    /* Custom select option - Start */
    .select2-selection__rendered {
      width: calc(100% - 43px);
      background: #181618 !important;
      border: 1px solid #4a4a4a;
      height: 30px;
      color: #c7c5c5 !important;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 12px !important;
      line-height: 16px;
    }
    .select2-container--default {
      width: 100px !important;
    }
    .select2-selection__arrow {
      background: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0.5L9 0.5L4.5 5.5L0 0.5Z' fill='%234A4A4A'/%3E%3C/svg%3E%0A")
        center / contain no-repeat;
      color: #c7c5c5;
      /* position: absolute; */
    }
    .select2-results {
      margin-right: 5px;
    }
    .select2-results__option {
      text-align: left;
      padding-left: 32px;
    }
    .select2-results__options,
    .select2-results__option {
      background: #181618 !important;
      width: 100%;
    }
    .select2-results__options {
      width: 220px;
      color: #c7c5c5 !important;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 12px !important;
      line-height: 16px;
      position: relative;
      align-items: center;
      border-top: 1px solid #4a4a4a;
    }
    .select2-results__option--highlighted {
      background: #3f3d45 !important;
      padding-left: 5px;
    }
    .select2-results__option--highlighted::before {
      content: url("data:image/svg+xml,%3Csvg width='10' height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.35355 3.14645C1.15829 2.95118 0.841709 2.95118 0.646447 3.14645C0.451184 3.34171 0.451184 3.65829 0.646447 3.85355L3.14645 6.35355C3.34171 6.54882 3.65829 6.54882 3.85355 6.35355L9.35355 0.853554C9.54882 0.658291 9.54882 0.341709 9.35355 0.146447C9.15829 -0.0488155 8.84171 -0.0488155 8.64645 0.146447L3.5 5.29289L1.35355 3.14645Z' fill='%23C7C5C5'/%3E%3C/svg%3E%0A");
      padding-right: 10px;
      padding-left: 6px;
    }
    .select2-results__option .select2-results__option--highlighted {
      background: #181618 !important;
      width: 200px;
    }
    .select2-search,
    .select2-search--dropdown {
      display: none;
    }
    .select2-dropdown,
    .select2-dropdown--below {
      background: #181618 !important;
      margin-left: -2px;
      margin-right: 5px;
      border-color: #3f3d45 !important;
      border-radius: 0;
      width: 222px !important;
    }
    .select2,
    .select2-container,
    .select2-container--custom-select {
      margin-left: 2px;
    }
    .select2-selection,
    .select2-selection--single {
      background: #181618 !important;
      border: none !important;
      flex-direction: row;
      display: flex;
      width: 234px !important;
    }
    .select2-container--default .select2-selection--single {
      background: #181618 !important;
      color: #c7c5c5 !important;
      border: none !important;
    }
    .select2-container .select2-selection--single .select2-selection__rendered {
      padding-right: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .select2-container--default .select2-results > .select2-results__options {
      overflow-x: hidden;
    }
    .select2-container--default
      .select2-selection--single
      .select2-selection__arrow {
      height: 46px;
      position: absolute;
      top: 0px;
      left: 205px;
      width: 20px;
      z-index: 99;
    }
  
    .select2-container--default
      .select2-selection--single
      .select2-selection__arrow
      b {
      color: transparent;
      border-color: transparent !important;
    }
    .select2-results__message {
      border-top: 1px solid #4a4a4a;
      padding-left: 0px;
      margin: auto;
      text-align: center;
    }

    /* Custom select option - End*/

    .point-setting-section {
      padding-bottom: 10px;
    }

    .input-group--title {
      height: 10px;
      left: 5.13%;
      right: 69.23%;
      top: calc(50% - 14px/2 - 256px);

      /* EN/XS/medium */

      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: center;

      /* Dark/Text/main */

      color: #C7C5C5;
    }

    .input-group--left {
      width: 150px;
      height: 31px;
      margin-left: 20px;
      display: inherit;
      justify-content: center;
      align-items: center;
    }

    .color-picker {
      -webkit-appearance: none;
      border: none;
      width: 30px;
      height: 30px;
      margin-left: 5px;
      padding: 0px;
    }

    .left-input-field {
      width: 76px;
      height: 27px;
      background: #171618;
      border: 1px solid #4a4a4a;
      color: #c7c5c5;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      padding-left: 5px;
    }

    .input-group--right {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      margin-right: -13px;
    }

    .input-field {
      width: 71px;
      height: 27px;
      background: #171618;
      border: 1px solid #4a4a4a;
      color: #c7c5c5;
      font-size: 12px;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      margin-left: 4px;
      padding-left: 7px;
    }

    .input-group--row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .input-group--row label {
      height: 14px;
      left: 2.09%;
      right: 76.96%;
      top: calc(50% - 14px/2);

      /* EN/XS/medium */

      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      align-items: center;

      /* Dark/Text/main */

      color: #C7C5C5;
    } 

    .export-label {
      color: white;
      bottom: 2px;
      position: relative;
      cursor: pointer;
      font-size: 10px;
    }

    span.spanInput {
      position: relative;
      left: -20px;
      top: 0px;
      font-size: 12px;
      color: #4a4a4a;
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
    }

    .color-picker {
      -webkit-appearance: none;
      border: none;
      width: 30px;
      height: 30px;
      margin-left: 5px;
      padding: 0px;
    }

    .color-picker::-webkit-color-swatch-wrapper {
      padding: 0;
    }

    .color-picker::-webkit-color-swatch {
      border: none;
    }

    span.m {
      position: relative;
      top: -20px;
      left: 280px;
    }

    #start-drawing {
      margin-top: 8px;
    }

    #delete-keypoint-icon {
      padding-top: 2px;
      cursor: not-allowed;
    }

    /* Toggle Switch */
    .switch input[type='checkbox'] {
      position: absolute;
      width: 0;
      height: 0;
      visibility: hidden;
    }

    .switch .base {
      margin-left:1px;
      width: 23px;
      border-radius: 15px;
      height: 14px;
      border: 1px solid gray;
    }
    .switch .circle {
      position: absolute;
      top: 1px;
      width: 14px;
      height: 14px;
      border-radius: 12px;
      background-color: gray;
      transition: 0.5s;
    }
    input:checked ~ .base {
      border: 1px solid #bfbfbf;
      transition: 0.5s;
    }
    input:checked ~ .circle {
      transform: translateX(100%);
      background-color: #bfbfbf;
    }
    .switch {
      position: relative;
    }
    .switch_label {
      display: flex;
      align-items: center;
      padding-left: 34px;
    }
      
    .switch_label .title {
      margin-left: 9px;
    }

    .checkbox-clamp {
      display: flex;
      align-items: center;
      margin-left: 15px;
    }

    #isClampToGround {
      accent-color: #171618;
      outline: 1px solid #c7c5c5
    }

    .checkbox-clamp label {
      margin-left: 4px;
    }
  /* Toggle Switch */
    
  </style>
  
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css"
    rel="stylesheet"
  />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>
  
  <div class="height-46" id="wrapper">
    <h3 id="title">
      <span id="logo">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 1.25C5.16797 1.25 1.25 5.16797 1.25 10C1.25 14.832 5.16797 18.75 10 18.75C14.832 18.75 18.75 14.832 18.75 10C18.75 5.16797 14.832 1.25 10 1.25ZM10 17.2656C5.98828 17.2656 2.73438 14.0117 2.73438 10C2.73438 5.98828 5.98828 2.73438 10 2.73438C14.0117 2.73438 17.2656 5.98828 17.2656 10C17.2656 14.0117 14.0117 17.2656 10 17.2656Z"
            fill="#BFBFBF"
          />
          <path
            d="M14.0508 9.74758L8.26758 5.54837C8.2212 5.51437 8.16629 5.49391 8.10896 5.48929C8.05164 5.48466 7.99416 5.49604 7.94292 5.52217C7.89169 5.54829 7.84871 5.58813 7.81879 5.63724C7.78886 5.68635 7.77317 5.74281 7.77344 5.80032V14.1988C7.77344 14.4546 8.0625 14.5991 8.26758 14.4507L14.0508 10.2515C14.0907 10.2227 14.1232 10.1849 14.1457 10.1411C14.1681 10.0973 14.1798 10.0488 14.1798 9.99954C14.1798 9.95032 14.1681 9.90181 14.1457 9.85801C14.1232 9.8142 14.0907 9.77635 14.0508 9.74758ZM9.01953 12.3648V7.6343L12.2754 9.99954L9.01953 12.3648Z"
            fill="#BFBFBF"
          />
        </svg>
      </span>
      <p class="title-p">Animation Generator</p>
      <span id="close" data-stt="0"></span>
    </h3>
  
    <form method="" id="animation-form">
      <div id="form-wrapper">
        <div class="" id="left-section">
          <div>
            <label class="title-list">アニメーションリスト</label>
            <span class="action-list-span">
              <span class="btn" id="" onclick="addAnimation()">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.16634 7.16659V2.16659C7.16634 1.70635 7.53944 1.33325 7.99967 1.33325C8.45991 1.33325 8.83301 1.70635 8.83301 2.16659V7.16659H13.833C14.2932 7.16659 14.6663 7.53968 14.6663 7.99992C14.6663 8.46016 14.2932 8.83325 13.833 8.83325H8.83301V13.8333C8.83301 14.2935 8.45991 14.6666 7.99967 14.6666C7.53944 14.6666 7.16634 14.2935 7.16634 13.8333V8.83325H2.16634C1.7061 8.83325 1.33301 8.46016 1.33301 7.99992C1.33301 7.53968 1.7061 7.16659 2.16634 7.16659H7.16634Z"
                    fill="#C7C5C5"
                  />
                </svg>
              </span>
              <span class="btn" onclick="deleteAnimation()">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.32822 4.66673L5.33301 4.66675L5.3378 4.66673H10.6616L10.6663 4.66675L10.6711 4.66673H11.9997V13.3334C11.9997 13.7016 11.7012 14.0001 11.333 14.0001H4.66633C4.29814 14.0001 3.99967 13.7016 3.99967 13.3334V4.66673H5.32822ZM11.333 3.3334H13.9997C14.3679 3.3334 14.6663 3.63187 14.6663 4.00006C14.6663 4.36825 14.3679 4.66673 13.9997 4.66673H13.333V13.3334C13.333 14.438 12.4376 15.3334 11.333 15.3334H4.66633C3.56176 15.3334 2.66633 14.438 2.66633 13.3334V4.66673H1.99967C1.63148 4.66673 1.33301 4.36825 1.33301 4.00006C1.33301 3.63187 1.63148 3.3334 1.99967 3.3334H4.66634V2.66675C4.66634 1.56218 5.56177 0.666748 6.66634 0.666748H9.33301C10.4376 0.666748 11.333 1.56218 11.333 2.66675V3.3334ZM9.99968 3.3334V2.66675C9.99968 2.29856 9.7012 2.00008 9.33301 2.00008H6.66634C6.29815 2.00008 5.99968 2.29856 5.99968 2.66675V3.3334H9.99968ZM5.99967 7.3334V11.3334C5.99967 11.7016 6.29814 12.0001 6.66633 12.0001C7.03452 12.0001 7.333 11.7016 7.333 11.3334V7.3334C7.333 6.96521 7.03452 6.66673 6.66633 6.66673C6.29814 6.66673 5.99967 6.96521 5.99967 7.3334ZM8.66636 11.3334V7.3334C8.66636 6.96521 8.96484 6.66673 9.33303 6.66673C9.70122 6.66673 9.9997 6.96521 9.9997 7.3334V11.3334C9.9997 11.7016 9.70122 12.0001 9.33303 12.0001C8.96484 12.0001 8.66636 11.7016 8.66636 11.3334Z"
                    fill="#C7C5C5"
                  />
                </svg>
              </span>
            </span>
          </div>
  
          <div id="animation-list"></div>
          <button type="button" class="blue-btn" id="export" value="Export Czml">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.25711 1.91783C6.25711 1.56437 6.54365 1.27783 6.89711 1.27783C7.25057 1.27783 7.53711 1.56437 7.53711 1.91783V6.39784C7.53711 6.7513 7.25057 7.03784 6.89711 7.03784H2.41711C2.06364 7.03784 1.7771 6.7513 1.7771 6.39784C1.7771 6.04437 2.06364 5.75784 2.41711 5.75784H6.25711V1.91783Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6643 8.2757L13.3712 5.96006C13.1436 5.73035 12.7732 5.7286 12.5435 5.95611C12.3139 6.18347 12.312 6.55408 12.5395 6.78364L13.8483 8.10525L8.09745 8.12206C7.77425 8.12294 7.5128 8.38542 7.51367 8.70862C7.51441 9.03152 7.77615 9.29254 8.09891 9.29254L7.81703 9.29255L13.8423 9.27588L12.5395 10.5915C12.312 10.8211 12.3139 11.1917 12.5435 11.419C12.6576 11.5321 12.8066 11.5884 12.9553 11.5884C13.106 11.5884 13.2567 11.5307 13.3712 11.4151L15.6643 9.09928C15.8902 8.87118 15.8902 8.5038 15.6643 8.2757Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.28602 0.666748C6.11628 0.666748 5.9535 0.734176 5.83347 0.8542L1.35347 5.3342C1.23344 5.45423 1.16602 5.61701 1.16602 5.78675V12.8268C1.16602 13.8871 2.02563 14.7468 3.08602 14.7468H10.766C11.8264 14.7468 12.686 13.8871 12.686 12.8268C12.686 12.4733 12.3995 12.1868 12.046 12.1868C11.6926 12.1868 11.406 12.4733 11.406 12.8268C11.406 13.1803 11.1195 13.4668 10.766 13.4668H3.08602C2.73256 13.4668 2.44602 13.1803 2.44602 12.8268V6.32803C2.44602 6.15122 2.51626 5.98165 2.64128 5.85662L6.35586 2.14205C6.48088 2.01702 6.65045 1.94679 6.82726 1.94679H10.766C11.1195 1.94679 11.406 2.23333 11.406 2.58679V4.50677C11.406 4.86023 11.6926 5.14677 12.046 5.14677C12.3995 5.14677 12.686 4.86024 12.686 4.50677V2.58675C12.686 1.52636 11.8264 0.666748 10.766 0.666748H6.28602Z" fill="white"/>
            </svg>
            <label class="export-label">エクスポートCZMLファイル</label></button>
        </div>
  
        <div class="" id="temp-right-section">
          最初にアニメーションを作成してください。
        </div>
  
        <div class="" id="right-section">
          <input type="hidden" id="selectedAnimation" data-animation-id="" />
          <input type="hidden" id="selectedKeypoint" data-keypoint-id="" />
          <input type="hidden" id="symbolList" data-symbol-list="" />
          <div class="form-group">
            <label class="input-title">シンボル</label>
            <select
              class="custom-select-options"
              id="symbol-selection" >
              <option value="point" selected="selected">Point</option>
            </select>
          </div>
          <!-- handle point html -->
          <div class="point-setting-section" id="point-setting-section" >
            <div class="point-gr">
              <h3 class="input-group--title">点</h3>
              <div class="input-group--row">
                <div class="input-group--left">
                  <label for="colorPoint">色</label>
                  <input type="color" class="color-picker" value="#FFFFFF" onchange="changeColorPicker(this)">
                  <input type="string" class="left-input-field color-code" name="colorPoint" id="colorPoint" value="#FFFFFF" onchange="changeColorCode(this)">
                </div>
                <div class="input-group--right">
                  <label for="size-point">サイズ</label>
                  <input type="number" class="input-field" id="size-point" value="10">
                  <span class="spanInput">px</span>
                </div>
              </div>
            </div>
            <div class="point-gr">
              <h3 class="input-group--title">枠線</h3>
              <div class="input-group--row">
                <div class="input-group--left">
                  <label for="colorOutline">色</label>
                  <input type="color" class="color-picker" value="#FFFFFF" onchange="changeColorPicker(this)">
                  <input type="string" class="left-input-field color-code" name="colorOutline" id="colorOutline" value="#FFFFFF" onchange="changeColorCode(this)">
                </div>
                <div class="input-group--right">
                  <label for="width-outline">太さ</label>
                  <input type="number" class="input-field" id="width-outline" value="10">
                  <span class="spanInput">px</span>
                </div>
              </div>
            </div>
          </div>
          <!-- close handle point html -->

          <div class="form-group">
            <label class="input-title">開始時刻</label>
            <input
              type="datetime-local"
              class="common-input"
              onchange="changeStartTime(this)"
              value="2022-12-12T12:12:12"
              id="start-time"
              name=""
              step="1"
            />
          </div>

          <!-- Path Setting -->
          <div class="input-group" id="path-setting-section">
            <h3 class="input-group--title">線 
              
            <label for="switch-display-path" class="switch_label">
              <div class="switch">
                <input type="checkbox" id="switch-display-path" onchange="switchDisplayPath(this)"/>
                <div class="circle"></div>
                <div class="base"></div>
              </div>
              <span class="title">表示</span>
            </label>

            <div class="checkbox-clamp">
              <input type="checkbox" id="isClampToGround" name="isClampToGround" checked>
              <label for="isClampToGround">線を地面に固定する</label>
            </div>
              
            </h3>
            <div class="input-group--row">
              <div class="input-group--left">
                <label for="color-path">色</label>
                <input type="color" class="color-picker" value="#FFFFFF" onchange="changeColorPicker(this)">
                <input type="string" class="left-input-field color-code" id="color-path" value="#FFFFFF" onchange="changeColorCode(this)">
              </div>
              <div class="input-group--right">
                <label for="width-path">太さ</label>
                <input type="number" class="input-field" id="width-path" value="10">
                <span class="spanInput">px</span>
              </div>
            </div>
          </div>

          <div class="">
            <input 
            type="button"
            class="blue-btn"
            id="start-drawing"
            value="編集を開始する"
            onclick="startDrawing(this)"
          />
          </div>

          
         
          <div id="keypoint-section">
            <label class="title-list">地点リスト</label>
            <span class="action-list-span" onclick="deleteKeypoint()" id="delete-keypoint-icon">
              <svg width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.32822 4.66673L5.33301 4.66675L5.3378 4.66673H10.6616L10.6663 4.66675L10.6711 4.66673H11.9997V13.3334C11.9997 13.7016 11.7012 14.0001 11.333 14.0001H4.66633C4.29814 14.0001 3.99967 13.7016 3.99967 13.3334V4.66673H5.32822ZM11.333 3.3334H13.9997C14.3679 3.3334 14.6663 3.63187 14.6663 4.00006C14.6663 4.36825 14.3679 4.66673 13.9997 4.66673H13.333V13.3334C13.333 14.438 12.4376 15.3334 11.333 15.3334H4.66633C3.56176 15.3334 2.66633 14.438 2.66633 13.3334V4.66673H1.99967C1.63148 4.66673 1.33301 4.36825 1.33301 4.00006C1.33301 3.63187 1.63148 3.3334 1.99967 3.3334H4.66634V2.66675C4.66634 1.56218 5.56177 0.666748 6.66634 0.666748H9.33301C10.4376 0.666748 11.333 1.56218 11.333 2.66675V3.3334ZM9.99968 3.3334V2.66675C9.99968 2.29856 9.7012 2.00008 9.33301 2.00008H6.66634C6.29815 2.00008 5.99968 2.29856 5.99968 2.66675V3.3334H9.99968ZM5.99967 7.3334V11.3334C5.99967 11.7016 6.29814 12.0001 6.66633 12.0001C7.03452 12.0001 7.333 11.7016 7.333 11.3334V7.3334C7.333 6.96521 7.03452 6.66673 6.66633 6.66673C6.29814 6.66673 5.99967 6.96521 5.99967 7.3334ZM8.66636 11.3334V7.3334C8.66636 6.96521 8.96484 6.66673 9.33303 6.66673C9.70122 6.66673 9.9997 6.96521 9.9997 7.3334V11.3334C9.9997 11.7016 9.70122 12.0001 9.33303 12.0001C8.96484 12.0001 8.66636 11.7016 8.66636 11.3334Z"
                  fill="#C7C5C5" />
              </svg>
            </span>
            
            <div id="keypoint-list"></div>
            <div id="keypoint-setting-section">
              <div class="form-group">
                <label class="input-title">位置</label>
                <input type="number" id="lat-input" name="" />
                <input type="number" id="lng-input" name="" />
              </div>
              <div class="">
                <label class="input-title"></label>
                <span id="lat-location-label">緯度</span>
                <span id="lng-location-label">経度</span>
              </div>
    
              <div class="form-group">
                <label class="input-title" id="height-label">高さ</label>
                <input type="number" class="common-input" id="height-point" value="0">
                <span class="spanInput m">m</span>
              </div>
    
              <div class="form-group">
                <label class="input-title">移動時間</label>
                <input type="number" id="numbertime-input" value="10"/>
                <select id="unittime-input">
                  <option value='1'>秒</option>
                  <option value='60'>分</option>
                  <option value='3600'>時</option>
                </select>
                <span class="" id="time-label-2" >
                  後
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="temp-div">
          <div
            class="animation-item"
            id="animation-item-temp"
            onclick="selectAnimation(this)">
            <label class="animation-label">Animation</label>
            <input
              type="hidden"
              class="animation-data"
              data-start-time="2022-12-12T12:12:12"
              data-keypoint=""
              data-model-layer="" 
              data-path-layer=""
              data-model-type="point"
              data-symbol-id = "point"
            />
          </div>

          <div class="keypoint-item" id="keypoint-item-temp" onclick="selectKeypoint(this)">
            <label class="keypoint-label">地点</label>
          </div>
        </div>
      </div>
    </form>
  </div>
  <script>
    $("#symbol-selection").select2({
      allowClear: false,
      minimumResultsForSearch: Infinity,
      language: {
        noResults: function () {
          return "情報は見つかりませんでした";
        },
      },
    });
  
    $('#symbol-selection').on("select2:selecting", function(e) { 
      setAttrByAnimationId(getSelectedAnimationId(), "data-symbol-id", e.params.args.data.id);
      setAttrByAnimationId(getSelectedAnimationId(), "data-model-type", getSymbolById(getValue("data-symbol-id")).type);
      setAttrByAnimationId(getSelectedAnimationId(), "data-icon-scale", e.params.args.data.element.attributes[1].nodeValue);

      if (e.params.args.data.id === "point") {
        getElmById("point-setting-section").style.display = "block";
      } else {
        getElmById("point-setting-section").style.display = "none";
      }

      //Data will be updated automatically when finishing draw
      if(!isStartDrawing) {
        handleShowModel();
      }

      updateIframe();
    });
  
    function getElmById(id) {
      return document.getElementById(id);
    }
  
    function getByClass(name) {
      return document.getElementsByClassName(name);
    }
  
    function queryAll(name) {
      return document.querySelectorAll(name);
    }
  
    function setAttributeByParentId(elmParentId, elmChild, attribute, value) {
      let elmParent = document.getElementById(elmParentId);
      elmParent.querySelector(elmChild).setAttribute(attribute, value);
    }

    //Set attribute by animation id
    function setAttrByAnimationId(animationId, attribute, value) {
      let elm = document.getElementById(animationId);
      elm.querySelector(".animation-data").setAttribute(attribute, value);
    }
  
    function startDrawing(item) {
      if (item.value == "編集を開始する") {
        //handle when select option is empty => cant 編集を開始する

        if(getValue("data-model-type")) {
          isStartDrawing = true;

          //Set style for drawing button
          item.value = "編集を終了する";
          
          getElmById("keypoint-section").style.display = "block";
          item.style.backgroundColor = "#597EF7";

          //enable deleting keypoint icon
          getElmById("delete-keypoint-icon").style.cursor = "pointer";
          getElmById("delete-keypoint-icon").setAttribute("onclick", "deleteKeypoint();");
        }
        

      } else if (item.value == "編集を終了する") {
          handleShowModel();
          isStartDrawing = false;
          item.value = "編集を開始する";
          item.style.backgroundColor = "#3b3cd0";

          //disable deleting keypoint icon
          getElmById("delete-keypoint-icon").style.cursor = "not-allowed";
          getElmById("delete-keypoint-icon").setAttribute("onclick", "");
      }
      
      updateIframe();
    }
    
    function updateIframe() {
      wapperElm = getElmById("wrapper");
      heightWp = wapperElm.offsetHeight;
      expanded = false;
      parent.postMessage({ type: "resize", expanded, heightWp }, "*");
    }
  
    function drawing(item){
      keypoints = getValue("data-keypoint") != "" ? JSON.parse(getValue("data-keypoint")) : [];
      pointArr = [];
      temp2 = [];
      czmlData = [];
      czmlData2 = [];
    }
  
    function saveAnimationData(keypoints) {
      setAttrByAnimationId(getSelectedAnimationId(), "data-keypoint", JSON.stringify(keypoints));
    }
  
    function addAnimation() {
      let animationListElm = getElmById("animation-list");
      let countAnimationItem = queryAll(".animation-item").length;
      let animationItem = getElmById("animation-item-temp");
      animationListElm.appendChild(animationItem.cloneNode(true));
      getElmById("right-section").style.display = "block";
      getElmById("temp-right-section").style.display = "none";
      getElmById("keypoint-list").innerHTML = "";
      resetAllInputs();
  
      //set current time
      //setAttributeByParentId("animation-item-temp", ".animation-data", "data-start-time", getCurrentTime());
      setAttrByAnimationId("animation-item-temp", "data-start-time", getCurrentTime());
      setAttrByAnimationId("animation-item-temp", "data-path-setting", JSON.stringify(getPathSetting()));
      setAttrByAnimationId("animation-item-temp", "data-point-setting", JSON.stringify(getPointSetting()));
      handleAnimationList();


      //reset right section
      $('#symbol-selection').val("point").trigger('change');
      getElmById("start-drawing").value = "編集を開始する";
      getElmById("keypoint-section").style.display = "none";

      keypoints = [];
      pointArr = [];
      temp2 = [];
      czmlData = [];
      czmlData2 = [];

      updateIframe();
  
    }
  
    function getCurrentTime() {
      let now = new Date();
      now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
      return now.toISOString().slice(0,16);
    }

    function handleAnimationList() {
      let allAnimationItems = queryAll(".animation-item");
      let total = allAnimationItems.length;
      allAnimationItems.forEach(function (animationItem, id) {
        if (id + 1 < total) {
          let pathId = id + 1;
          let labelElm = animationItem.querySelector(".animation-label");
          animationItem.setAttribute("id", "animation-item-" + pathId);
          labelElm.textContent = "Animation " + pathId;
        }
  
        //focus on the newest item
        if (id + 1 == total - 1) {
          selectAnimation(animationItem);
        }
      });
    }

    document.getElementById('point-setting-section').addEventListener('change', function(event){
      var elm = event.target;
      if(getElmById("colorPoint").value && getElmById("colorOutline").value) {
        setAttrByAnimationId(getSelectedAnimationId(), "data-point-setting", JSON.stringify(getPointSetting()));
      }

      //Data will be updated automatically when finishing draw
      if(!isStartDrawing) {
        handleShowModel();
      }
    });


    function getPointSetting() {
      let pointSetting = {
        point: {
          color: getElmById("colorPoint").value,
          size:  getElmById("size-point").value
        },
        outline: {
          color: getElmById("colorOutline").value,
          width: getElmById("width-outline").value
        }
      }
      return pointSetting;
    }

    //add path setting to animation attribute
    document.getElementById('path-setting-section').addEventListener('change', function(event){
      var elm = event.target;
      if(getElmById("color-path").value) {
        setAttrByAnimationId(getSelectedAnimationId(), "data-path-setting", JSON.stringify(getPathSetting()));
      }
      
      //Data will be updated automatically when finishing draw
      if(!isStartDrawing) {
        resetPathAnimation();
      }
    });


    function getPathSetting() {
      let pathSetting = {
        color: getElmById("color-path").value,
        display: getElmById("switch-display-path").checked,
        width: getElmById("width-path").value,
        isClampToGround: getElmById("isClampToGround").checked
      }
      return pathSetting;
    }
    //end add path setting to animation attribute

    //This function will add new keypoint into keypoint list
    function addKeypoint(newKeypoint) {
      //Get keypoint list data before add new keypoint
      let keypointData = getValue("data-keypoint");
      let keypointArr = []; 
      let newKeypointId = "keypoint-item-";

      //If keypoint list data is not empty
      if (keypointData !== "") {
        let selectedKeypoint = getElmById("selectedKeypoint").getAttribute("data-keypoint-id");
        let beforeKeypointId = selectedKeypoint.substring(selectedKeypoint.lastIndexOf("-")+1);
        keypointArr = JSON.parse(keypointData);
        keypointArr.splice(beforeKeypointId, 0, newKeypoint);
        newKeypointId = newKeypointId + (parseInt(beforeKeypointId) + 1);
      
      } else { 
        //If keypoint list data is empty (user start creating new animation)

        //Number-time of the first keypoint have to be 0
        newKeypoint.time = 0;
        getElmById("numbertime-input").value = 0;

        keypointArr.push(newKeypoint);
        newKeypointId = newKeypointId + 1;

      }
      saveAnimationData(keypointArr);
      showKeypointList(getSelectedAnimationId());
      return newKeypointId;
    }

  
    //return id of selected animatioj
    function getSelectedAnimationId() {
      return document
        .getElementById("selectedAnimation")
        .getAttribute("data-animation-id");
    }

    //return id of selected keypoint
    function getSelectedKeypointId() {
      return document
        .getElementById("selectedKeypoint")
        .getAttribute("data-keypoint-id");
    }
  
    //get attribute value of animation
    function getValue(attribute) {
      return document.getElementById(getSelectedAnimationId()).querySelector(".animation-data").getAttribute(attribute);
    }
  
    function setAttributeByParentId(elmParentId, elmChild, attribute, value) {
      let elmParent = document.getElementById(elmParentId);
      elmParent.querySelector(elmChild).setAttribute(attribute, value);
    }
  
    function deleteAnimation() {
      const hiddenModelId= getValue("data-model-layer")
      const hiddenPathId= getValue("data-path-layer")
      getElmById(getSelectedAnimationId()).remove();
      let aniCount = queryAll(".animation-item").length;
      if (aniCount > 1){
        handleAnimationList();
      } else {
        //If number of animation items are 0, keypoint list is empty
        getElmById("keypoint-list").innerHTML = '';
        getElmById("right-section").style.display = "none";
        getElmById("temp-right-section").style.display = "flex";
      }

      //delete data animation id selected from keypoint
      parent.postMessage({ type: "removeModel", hiddenModelId, hiddenPathId }, "*");
      updateIframe();
      
    }
  
    function selectAnimation(item) {
      
      //set background color for selected item
      let allAnimationItems = queryAll(".animation-item");
      allAnimationItems.forEach(function (animationItem) {
        animationItem.style.backgroundColor = "";
      });
      item.style.backgroundColor = "#3F3D45";

      //focus on selected animation
      getElmById("selectedAnimation").setAttribute(
        "data-animation-id",
        item.getAttribute("id")
      );

      //Show animation data
      let aniDataElm = item.querySelector(".animation-data");
      getElmById("start-time").value = aniDataElm.getAttribute("data-start-time");
      
      if (aniDataElm.getAttribute("data-model-type") != "point") {
        $("#symbol-selection")
          .val(aniDataElm.getAttribute("data-symbol-id"))
          .trigger("change");
          getElmById("point-setting-section").style.display = "none";
      } else {
        $("#symbol-selection")
          .val("point")
          .trigger("change");
          getElmById("point-setting-section").style.display = "block";
      }

      getElmById("keypoint-section").style.display = "block";
      showKeypointList(item.getAttribute("id"));

      let pathSetting = JSON.parse(aniDataElm.getAttribute("data-path-setting"));
      getElmById("switch-display-path").checked = pathSetting.display;
      if(getElmById("switch-display-path").checked) {
        getElmById("switch-display-path").closest('.switch_label').querySelector('.title').textContent = "表示";
      } else {
        getElmById("switch-display-path").closest('.switch_label').querySelector('.title').textContent = "非表示";
      }
      getElmById("isClampToGround").checked = pathSetting.isClampToGround
      getElmById("color-path").value = pathSetting.color;
      changeColorCode(getElmById("color-path"));
      getElmById("width-path").value = pathSetting.width;
      
      if (aniDataElm.getAttribute("data-model-type") === "point" 
        && aniDataElm.getAttribute("data-point-setting")) {
        let pointSetting = JSON.parse(aniDataElm.getAttribute("data-point-setting"));
        getElmById("colorPoint").value = pointSetting.point.color;
        changeColorCode(getElmById("colorPoint"));
        getElmById("size-point").value = pointSetting.point.size;
        getElmById("colorOutline").value = pointSetting.outline.color;
        changeColorCode(getElmById("colorOutline"));
        getElmById("width-outline").value = pointSetting.outline.width;
        
      }
      
      updateIframe();
    }

    function showKeypointList(animationId) {
      let animationElm = getElmById(animationId);
      let keypointListElm = getElmById("keypoint-list");
      keypointListElm.innerHTML = '';

      let keypointData = animationElm.querySelector(".animation-data").getAttribute("data-keypoint");
      if (keypointData !== "") {
        let keypointList = JSON.parse(keypointData);
        let keypointItem = getElmById("keypoint-item-temp");

        for (let i = 1; i <= keypointList.length; i++) {
          let newItem = keypointListElm.appendChild(keypointItem.cloneNode(true));
          let labelElm = newItem.querySelector(".keypoint-label");
          newItem.setAttribute("id", "keypoint-item-" + i);
          labelElm.textContent = "地点 " + i;
          if (i == keypointList.length) {
            selectKeypoint(newItem);
          }
        }
      } else {
        //what to do here
      }

    }
  
    function changeStartTime(elm) {
      setAttributeByParentId(
        getSelectedAnimationId(),
        ".animation-data",
        "data-start-time",
        elm.value
      );
      setAttrByAnimationId(getSelectedAnimationId(), "data-start-time",  elm.value);

      //Data will be updated automatically when finishing draw
      if(!isStartDrawing) {
        handleShowModel();
      }
    }

    let expanded = false;
    let resizeElms = queryAll(".resize");
    let closeElm = getElmById("title");
    closeElm.addEventListener("click", handleCloseOpenPopup);
    let wapperElm = getElmById("wrapper");
    let heightWp = (wapperElm.offsetHeight = 670);
    let newWrapperHeight = 0;
  
    function handleCloseOpenPopup(e) {
      if (
        e.target.id == "title" ||
        e.target.classList.contains("title-p") ||
        (getElmById(e.target.id) !== null &&
          getElmById(e.target.id).parentNode.id == "title")
      ) {
        parent.postMessage({ type: "resize", expanded, heightWp }, "*");
        if (wapperElm !== null) {
          wapperElm.classList.remove("height-46");
        }
        if (expanded) {
          document.documentElement.classList.add("extendedh", "extendedv");
        } else {
          document.documentElement.classList.remove("extendedh", "extendedv");
        }
        expanded = !expanded;
      } else {
        if (
          e.target.tagName === "path" ||
          e.target.tagName === "svg" ||
          e.target.tagName === "g"
        ) {
          if (e.target.closest("#title")) {
            parent.postMessage({ type: "resize", expanded, heightWp }, "*");
            if (wapperElm !== null) {
              wapperElm.classList.remove("height-46");
            }
            if (expanded) {
              document.documentElement.classList.add("extendedh", "extendedv");
            } else {
              document.documentElement.classList.remove("extendedh", "extendedv");
            }
            expanded = !expanded;
          }
        }
      }
    }
  
    // -------------------Handle Javascript re-earth related-------------------------------- //
  
    //declare variable
    let cesiumAPI, reearthAPI;
    let modelUrl;
    let pointArr = [];
    let allPathArr = new Array();
    let geojsonData;
    let czmlData = [];
    let czmlData2 = [];
    let downloadCzmlFile;
    let startTime = "2012-08-04T16:00:00Z";
    let endTime = "2012-08-04T16:10:00Z";
    let interval = startTime + "/" + endTime;
    let currentTime,duration;
    let keypoints = [];
    let modelElm;
    let pathData;
    let isEditState = false;
    let selectedEditPathElm;
  
    let isStartDrawing = false;
  
    // close declare variable

    console.clear();
  
    //declare function needed

    //Init symbol list
    saveSymbolList(null);
  
    const setValue = (id, value) => {
      document.getElementById(id).value = value ?? "";
    };

    //If you write your own code, remember hex color shortcuts (eg., #fff, #000)

    function hexToRgbA(hex){
        var c;
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            c= hex.substring(1).split('');
            if(c.length== 3){
                c= [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c= '0x'+c.join('');
            return [(c>>16)&255, (c>>8)&255, c&255, 255];
        }
        throw new Error('Bad Hex');
    }
  
    //close declare function needed
    let temp2 = []
    let modelLayerId
  
    window.addEventListener("message", function (e) {
      if (e.source !== parent) return;
  
      //get reearth api and cesium api
      cesiumAPI = e.source.Cesium;
      reearthAPI = e.source.reearth;

      let pathItem;

      //save layer id
      if (e.data.pathLayerId && e.data.type == "showPath") {
        setAttrByAnimationId(getSelectedAnimationId(),"data-path-layer", e.data.pathLayerId);
      }
  
      if (e.data.modelLayerId && e.data.type == "showModel") {
        setAttrByAnimationId(getSelectedAnimationId(), "data-model-layer", e.data.modelLayerId );
      }
  
      // get model url from upload
      property = e.data.property;
      if (property?.hasOwnProperty("model")) {
        let modelElm = getElmById("symbol-selection");
        modelElm.replaceChildren();

        saveSymbolList(property.model);

        getSymbolList()?.map((item, id) => {
          if(item.url && item.name) {
            opt = document.createElement("option");
            item.type = item.type ? item.type : "model";
            opt.setAttribute("data-model-type", item.type); 
            item.scale = item.scale ? item.scale : 1;
            opt.setAttribute("data-icon-scale", item.scale); 
            opt.value = item.id;
            opt.innerHTML = item.name;
            modelElm.appendChild(opt);

            //Update symbol list by animation
            if (getValue("data-model-type") != "point") {
              $("#symbol-selection")
                .val(getValue("data-symbol-id"))
                .trigger("change");
                getElmById("point-setting-section").style.display = "none";
            } else {
              $("#symbol-selection")
                .val("point")
                .trigger("change");
                getElmById("point-setting-section").style.display = "block";
            }
          }
        });
      }
  
      if (e.data.type === "mousedata" && isStartDrawing) {
        setValue("lng-input", e.data.payload.lng);
        setValue("lat-input", e.data.payload.lat);
        let heightPoint = getElmById("height-point").value;
        let timePoint = getElmById("numbertime-input").value;
        let unitTime = getElmById("unittime-input").value;
  
        let newKeypoint = {
          lat : e.data.payload.lat,
          lng : e.data.payload.lng,
          height : (heightPoint == "" ) ? 0 : parseInt(heightPoint),
          unitTime : parseInt(unitTime),
          time : (timePoint == "" || timePoint == "0" ) ? 10 : parseInt(timePoint)
        };
        
        let newKeypointId = addKeypoint(newKeypoint);
        selectKeypoint(getElmById(newKeypointId));

        setAttrByAnimationId(getSelectedAnimationId(), "data-path-setting", JSON.stringify(getPathSetting()));
        
        let dataObj = {
          keypoints: JSON.parse(getValue("data-keypoint")),
          startTime: getValue("data-start-time"),
          path: JSON.parse(getValue("data-path-setting"))
        }

        createPathCzml(dataObj);

        parent.postMessage(
          {
            type: "showPoint",
            lngPoint: e.data.payload.lng,
            latPoint: e.data.payload.lat,
          },
          "*"
        );
  
      }
    });

    function selectKeypoint(item){
      //set background color for selected item
      let allKeyPointsItems = getElmById("keypoint-list").querySelectorAll(".keypoint-item");
      allKeyPointsItems.forEach(function (keyPointItem) {
        keyPointItem.style.backgroundColor = "";
      });
      item.style.backgroundColor = "#3F3D45";

      getElmById("selectedKeypoint")
        .setAttribute("data-keypoint-id", item.getAttribute("id"));

      //Get Id of keypoint
      let keypointId = item.getAttribute("id");
      let id = keypointId.substring(keypointId.lastIndexOf("-")+1);

      //Get data of keypoint
      let keypoints = JSON.parse(getValue("data-keypoint"));
      let keypoint = keypoints[parseInt(id)-1];

      getElmById("lat-input").value = keypoint.lat;
      getElmById("lng-input").value = keypoint.lng;
      getElmById("height-point").value = keypoint.height;
      getElmById("numbertime-input").value = keypoint.time;
      getElmById("unittime-input").value = keypoint.unitTime;

      //Number-time of the first keypoint can not edit
      if (parseInt(id) == 1) {
        getElmById("numbertime-input").disabled = true;
        getElmById("numbertime-input").style.cursor = "not-allowed";
      } else {
        getElmById("numbertime-input").disabled = false;
        getElmById("numbertime-input").style.cursor = "";
      }

    }

    //function editKeypoint() {
    document.getElementById('keypoint-setting-section').addEventListener('change', function(event){
      //Get Id of keypoint
      let keypointId = getElmById("selectedKeypoint")
        .getAttribute("data-keypoint-id");
      let id = keypointId.substring(keypointId.lastIndexOf("-")+1);

      //Get data of keypoint
      let keypoints = JSON.parse(getValue("data-keypoint"));
      let keypoint = keypoints[parseInt(id)-1];


      keypoint.lat = getElmById("lat-input").value;
      keypoint.lng = getElmById("lng-input").value;
      keypoint.height = getElmById("height-point").value;
      keypoint.time = getElmById("numbertime-input").value;
      keypoint.unitTime = getElmById("unittime-input").value;

      keypoints[parseInt(id)-1] = keypoint;
      saveAnimationData(keypoints);

      let dataObj = {
        keypoints: keypoints,
        startTime: getValue("data-start-time"),
        modelUrl: $('#symbol-selection').select2().val() || "https://static.reearth.io/assets/01gkn5kjpxbhtnr8adpdmq3jaf.glb",
        path: JSON.parse(getValue("data-path-setting"))
      }

      handleShowModel();
      createPathCzml(dataObj);
    });

    let typeModel;

    function deleteKeypoint() {
      //Get Id of keypoint
      let keypointId = getElmById("selectedKeypoint")
        .getAttribute("data-keypoint-id");
      let id = keypointId.substring(keypointId.lastIndexOf("-")+1);

      //Get keypoint list
      let keypoints = JSON.parse(getValue("data-keypoint"));

      //Remove selected keypoint
      keypoints.splice(parseInt(id)-1,1);

      saveAnimationData(keypoints);
      resetPathAnimation();
      showKeypointList(getSelectedAnimationId());
    }

    function resetPathAnimation() {
      let dataObj = {
        keypoints: keypoints,
        startTime: getValue("data-start-time"),
        modelUrl: $('#symbol-selection').select2().val() || "https://static.reearth.io/assets/01gkn5kjpxbhtnr8adpdmq3jaf.glb",
        path: JSON.parse(getValue("data-path-setting")),
      }

      handleShowModel();
      createPathCzml(dataObj);
    }
  
    // Handle show model after click finish button
    function handleShowModel() {
      if(getValue("data-keypoint")) {
        let dataObj = {
          keypoints: JSON.parse(getValue("data-keypoint")),
          startTime: getValue("data-start-time"),
          modelUrl: getSymbolById(getValue("data-symbol-id")).url,
          dataType: getValue("data-model-type"),
          dataPoint: getValue("data-point-setting"),
          dataPath: JSON.parse(getValue("data-path-setting")),
          //scale: getValue("data-icon-scale")
          scale: getSymbolById(getValue("data-symbol-id")).scale
        }
  
          czmlData2 = createAnimationCzml(dataObj);
          
          //Get layer Id
          modelLayerId = getValue("data-model-layer");
          parent.postMessage({ type: "showModel", czmlData2, modelLayerId }, "*");
      }
      
    }
  
    //Close handle show model after click finish button
  
    function createAnimationCzml(dataObj) {
      let modelUrl = dataObj.modelUrl || "https://static.reearth.io/assets/01gkn5kjpxbhtnr8adpdmq3jaf.glb";
      let keypoints = dataObj.keypoints;
      let typeModel = dataObj.dataType;
      let pointSetting = JSON.parse(dataObj.dataPoint);
      let pathSetting = dataObj.dataPath;
      let pathColor = pathSetting.color;
      let pathWidth = pathSetting.width;
      let pathDisplay = pathSetting.display;
      let pathIsClampToGround = pathSetting.isClampToGround;
      if(!pathDisplay) {
        pathColor = [0,0,0,0]
      } else {
        pathColor = hexToRgbA(pathColor)
      }
      let scaleIcon = dataObj.scale;
      let l = keypoints.length;
      let polylineCreateArr = [];
      for (let i=0; i< l; i++) {
        polylineCreateArr.push(keypoints[i].lng, keypoints[i].lat, keypoints[i].height)
      }

      for (let i=0; i< l; i++) {
        temp2.push(keypoints[i].time*keypoints[i].unitTime, keypoints[i].lng, keypoints[i].lat, keypoints[i].height)
      }
      let temp4=[]
      for (let k=l; k<temp2.length;k++) {
        temp4 = temp2.slice(-(l*4))
      }
      for(let k = 0; k < temp4.length; k++) {
        if(k%4 === 0 && k> 0) {
          temp4[k] = temp4[k] +  temp4[k-4]
        }
        pointArr = [...temp4]
      }

      let sumTime = pointArr[pointArr.length -4]
      let startTime = (dataObj.startTime) + "Z";
      let startTimeDateformat = new Date(startTime)
      startTimeDateformat.setSeconds(startTimeDateformat.getSeconds() + sumTime);
      let endTime = startTimeDateformat.toISOString();
      let interval = startTime + "/" + endTime;

      if(typeModel === "model") {
        czmlData=[
        {
          id: "document",
          name: "CZML Path",
          version: "1.0",
          clock: {
            interval: interval,
            currentTime: startTime,
            multiplier: 10,
          },
        },
        {
          id: "path" + Date.now().toString(36) + Math.random().toString(36).substr(2),
          name: "Animation Generator",
          description: "Generated by Re:earth Plugin",
          availability: interval,
          polyline: {
            positions: {
              cartographicDegrees: polylineCreateArr,
            },
            material: {
              solidColor: {
                color: {
                  rgba: pathColor,
                },
              },
            },
            width: pathWidth,
            clampToGround: pathIsClampToGround,
          },
          orientation: {
            velocityReference: "#position",
          },
          model: {
            gltf: modelUrl,
            scale: scaleIcon,
            heightReference: "RELATIVE_TO_GROUND",
          },
          position: {
            epoch: startTime,
            cartographicDegrees: pointArr,
          },
        }
      ];
      } else if(typeModel === "icon") {
        czmlData=[
        {
          id: "document",
          name: "CZML Path",
          version: "1.0",
          clock: {
            interval: interval,
            currentTime: startTime,
            multiplier: 10,
          },
        },
        {
          id: "path" + Date.now().toString(36) + Math.random().toString(36).substr(2),
          name: "Animation Generator",
          description: "Generated by Re:earth Plugin",
          availability: interval,
          polyline: {
            positions: {
              cartographicDegrees: polylineCreateArr,
            },
            material: {
              solidColor: {
                color: {
                  rgba: pathColor,
                },
              },
            },
            width: pathWidth,
            clampToGround: pathIsClampToGround,
          },
          orientation: {
            velocityReference: "#position",
          },
          billboard: {
            image: modelUrl,
            scale: scaleIcon,
            eyeOffset: {
              cartesian: [0.0, 0.0, -10.0],
            },
            heightReference: "RELATIVE_TO_GROUND",
          },
          position: {
            epoch: startTime,
            cartographicDegrees: pointArr,
          },
        }
      ];
      } else {
        czmlData=[
        {
          id: "document",
          name: "CZML Path",
          version: "1.0",
          clock: {
            interval: interval,
            currentTime: startTime,
            multiplier: 10,
          },
        },
        {
          id: "path" + Date.now().toString(36) + Math.random().toString(36).substr(2),
          name: "Animation Generator",
          description:
            "Generated by Re:earth Plugin",
          availability: interval,
          polyline: {
            positions: {
              cartographicDegrees: polylineCreateArr,
            },
            material: {
              solidColor: {
                color: {
                  rgba: pathColor,
                },
              },
            },
            width: pathWidth,
            clampToGround: pathIsClampToGround,
          },
          orientation: {
            velocityReference: "#position",
          },
          point: {
            color: {
              rgba: hexToRgbA(pointSetting.point.color),
            },
            outlineColor: {
              rgba: hexToRgbA(pointSetting.outline.color),
            },
            outlineWidth: parseInt(pointSetting.outline.width),
            pixelSize: parseInt(pointSetting.point.size),
            heightReference: "RELATIVE_TO_GROUND",
          },
          position: {
            epoch: startTime,
            cartographicDegrees: pointArr,
          },
        }
      ];
      }
      
      return czmlData;
    }

    //Handle download czml file
    function getDownloadCzmlFile() {
      
      let temp = []
      let temp3 = [];
      let allAnimations = document.querySelectorAll(".animation-item")
      allAnimations.forEach(function(obj,ind){
        if(obj.id !== "animation-item-temp") {
          let strData = (obj.querySelector(".animation-data").getAttribute("data-keypoint"));
          let objData = JSON.parse(strData)
          temp = []

          let l = objData.length;
          let polylineModel = [];
          for (let i=0; i< l; i++) {
            polylineModel.push(objData[i].lng, objData[i].lat, objData[i].height)
          }
          for (let i=0; i< l; i++) {
            temp.push(objData[i].unitTime*objData[i].time, objData[i].lng, objData[i].lat, objData[i].height)
          }

          let tempD=[]
          for (let k=l; k<temp.length;k++) {
            tempD = temp.slice(-(l*4))
          }
          for(let k = 0; k < tempD.length; k++) {
            if(k%4 === 0 && k> 0) {
              tempD[k] = tempD[k] +  tempD[k-4]
            }
            pointArr = [...tempD]
          }

          let typeStrModel = (obj.querySelector(".animation-data").getAttribute("data-model-type"));
          let modelDlUrl = (getSymbolById(obj.querySelector(".animation-data").getAttribute("data-symbol-id")).url);
          let dataPointStt = JSON.parse(obj.querySelector(".animation-data").getAttribute("data-point-setting"));

          let startTime = obj.querySelector(".animation-data").getAttribute("data-start-time") + "Z";
          let sumTime = pointArr[pointArr.length -4]
          let startTimeDateformat = new Date(startTime)
          startTimeDateformat.setSeconds(startTimeDateformat.getSeconds() + sumTime);
          let endTime = startTimeDateformat.toISOString();
          let interval = startTime + "/" + endTime;

          let pathSettingModel = JSON.parse(obj.querySelector(".animation-data").getAttribute("data-path-setting"))
          if(!pathSettingModel.display) {
            pathSettingModel.color = [0,0,0,0]
          } else {
            pathSettingModel.color = hexToRgbA(pathSettingModel.color)
          }

          let scaleIcon = getSymbolById(obj.querySelector(".animation-data").getAttribute("data-symbol-id")).scale;

          if(typeStrModel === "model") {
            temp3.push(
              {
                id: "document",
                name: "CZML Path",
                version: "1.0",
                clock: {
                  interval: interval,
                  currentTime: startTime,
                  multiplier: 10,
                },
              },
              {
                id: "path" + Date.now().toString(36) + Math.random().toString(36).substr(2),
                name: "Animation Generator",
                description:
                  "Generated by Re:earth Plugin",
                availability: interval,
                polyline: {
                  positions: {
                    cartographicDegrees: polylineModel,
                  },
                  material: {
                    solidColor: {
                      color: {
                        rgba: pathSettingModel.color,
                      },
                    },
                  },
                  width: pathSettingModel.width,
                  clampToGround: pathSettingModel.isClampToGround,
                },
                orientation: {
                  velocityReference: "#position",
                },
                model: {
                  gltf: modelDlUrl,
                  scale: scaleIcon,
                  heightReference: "RELATIVE_TO_GROUND",
                },
                position: {
                  epoch: startTime,
                  cartographicDegrees: pointArr,
                },
              }
            );
          } else if (typeStrModel === "icon") {
            temp3.push(
              {
                id: "document",
                name: "CZML Path",
                version: "1.0",
                clock: {
                  interval: interval,
                  currentTime: startTime,
                  multiplier: 10,
                },
              },
              {
                id: "path" + Date.now().toString(36) + Math.random().toString(36).substr(2),
                name: "Animation Generator",
                description:
                  "Generated by Re:earth Plugin",
                availability: interval,
                polyline: {
                  positions: {
                    cartographicDegrees: polylineModel,
                  },
                  material: {
                    solidColor: {
                      color: {
                        rgba: pathSettingModel.color,
                      },
                    },
                  },
                  width: pathSettingModel.width,
                  clampToGround: pathSettingModel.isClampToGround,
                },
                orientation: {
                  velocityReference: "#position",
                },
                billboard: {
                  image: modelDlUrl,
                  scale: scaleIcon,
                  eyeOffset: {
                    cartesian: [0.0, 0.0, -10.0],
                  },
                  heightReference: "RELATIVE_TO_GROUND",
                },
                position: {
                  epoch: startTime,
                  cartographicDegrees: pointArr,
                },
              }
            );      
          } else {
            // console.log("handle point download ")
            temp3.push(
              {
                id: "document",
                name: "CZML Path",
                version: "1.0",
                clock: {
                  interval: interval,
                  currentTime: startTime,
                  multiplier: 10,
                },
              },
              {
                id: "path" + Date.now().toString(36) + Math.random().toString(36).substr(2),
                name: "Animation Generator",
                description: "Generated by Re:earth Plugin",
                availability: interval,
                polyline: {
                  positions: {
                    cartographicDegrees: polylineModel,
                  },
                  material: {
                    solidColor: {
                      color: {
                        rgba: pathSettingModel.color,
                      },
                    },
                  },
                  width: pathSettingModel.width,
                  clampToGround: pathSettingModel.isClampToGround,
                },
                orientation: {
                  velocityReference: "#position",
                },
                point: {
                  color: {
                    rgba: hexToRgbA(dataPointStt.point.color),
                  },
                  outlineColor: {
                    rgba: hexToRgbA(dataPointStt.outline.color),
                  },
                  outlineWidth: parseInt(dataPointStt.outline.width),
                  pixelSize: parseInt(dataPointStt.point.size),
                  heightReference: "RELATIVE_TO_GROUND",
                },
                position: {
                  epoch: startTime,
                  cartographicDegrees: pointArr,
                },
              }
            ); 
          }
        }
      })
      
      return temp3
    }
    // Download CZML file
    function downloadObjectAsJson(exportObj, exportName) {
      var dataStr =
        "data:text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(exportObj));
      var downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", exportName + ".czml");
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    }
  
    //Hanlde download 1 file
    let exportBtn = getElmById("export");
    exportBtn.addEventListener("click", downloadCzml);
  
    function downloadCzml(e) {
      e.preventDefault();
      downloadCzmlFile = getDownloadCzmlFile();
      downloadObjectAsJson(downloadCzmlFile, "download");
    }

    function createPathCzml(dataObj) {
      if(getValue("data-keypoint")) {
        let temp2 = [];
        let keypoints = dataObj.keypoints;

        let l = keypoints.length;
        //add handle polyline array
        let polylinePath = [];
        for (let i=0; i< l; i++) {
          polylinePath.push(keypoints[i].lng, keypoints[i].lat, keypoints[i].height)
        }
        //close handle polyline array
        for (let i=0; i< l; i++) {
          temp2.push(keypoints[i].time*keypoints[i].unitTime, keypoints[i].lng, keypoints[i].lat, keypoints[i].height)
        }
        let temp4=[]
        for (let k=l; k<temp2.length;k++) {
          temp4 = temp2.slice(-(l*4))
        }
        for(let k = 0; k < temp4.length; k++) {
          if(k%4 === 0 && k> 0) {
            temp4[k] = temp4[k] +  temp4[k-4]
          }
          pointArr = [...temp4]
        }

        let sumTime = pointArr[pointArr.length -4]
        //let startTime = (getElmById("start-time").value) + "Z";
        let startTime = (dataObj.startTime) + "Z";
        let startTimeDateformat = new Date(startTime)
        startTimeDateformat.setSeconds(startTimeDateformat.getSeconds() + sumTime);
        let endTime = startTimeDateformat.toISOString();
        let interval = startTime + "/" + endTime;

        interval = dataObj.startTime + "/" + endTime;
        typeModel = dataObj.dataType

        let pathStt = dataObj.path;
        if(!pathStt.display) {
          pathStt.color = [0,0,0,0]
        } else {
          pathStt.color = hexToRgbA(pathStt.color)
        }

        let czmlData = [
              {
                id: "document",
                name: "CZML Path",
                version: "1.0",
                clock: {
                  interval: interval,
                  currentTime: startTime,
                  multiplier: 10,
                },
              },
              {
                id: "path" + Date.now().toString(36) + Math.random().toString(36).substr(2),
                name: "Animation Generator",
                description:
                  "Generated by Re:earth Plugin",
                availability: interval,
                polyline: {
                  positions: {
                    cartographicDegrees: polylinePath,
                  },
                  material: {
                    solidColor: {
                      color: {
                        rgba: pathStt.color,
                      },
                    },
                  },
                  width: pathStt.width,
                  clampToGround: pathStt.isClampToGround,
                },
                orientation: {
                  velocityReference: "#position",
                },
                
                position: {
                  epoch: startTime,
                  cartographicDegrees: pointArr,
                },
              }
            ]; 

            pathLayerId = getValue("data-path-layer");
            parent.postMessage({ type: "showPath", czmlData, pathLayerId}, "*");
          
            return czmlData;
        }
    } 

    // Change color picker from color hex
    function changeColorCode(item) {
      let elm = item.closest("div"); 
      elm.querySelector(".color-picker").value = item.value;
    } 

    function changeColorPicker(item) {
      let elm = item.closest("div"); 
      elm.querySelector(".color-code").value = item.value;
    } 

    //This function will set default value for all inputs
    function resetAllInputs() {
      getElmById("lat-input").value = "";
      getElmById("lng-input").value = "";
      getElmById("height-point").value = 0;
      getElmById("numbertime-input").value = 0;
      getElmById("unittime-input").value = "1";
      let colorInputCount = document.getElementsByClassName("color-code");
      let colorPickerCount = document.getElementsByClassName("color-picker");
      for (let i = 0; i < colorInputCount.length; i++) {
        colorInputCount[i].value = "#FFFFFF";
        colorPickerCount[i].value = "#FFFFFF";
      }
      getElmById("switch-display-path").checked = true;
      getElmById("switch-display-path").closest('.switch_label').querySelector('.title').textContent = "表示";
      getElmById("width-path").value = "10";
      getElmById("isClampToGround").checked = true;
      getElmById("size-point").value = "10";
      getElmById("width-outline").value = "10";
    }

    function switchDisplayPath(item) {
      if (item.checked) {
        item.closest('.switch_label').querySelector('.title').textContent = "表示";
      } else {
        item.closest('.switch_label').querySelector('.title').textContent = "非表示";
      }

    }

    function saveSymbolList(data) {
      let symbolList = [];
      symbolList.push({
        id: "point",
        type: "point",
        name: "Point",
        url: "point",
        scale: 1
      });
      
      data?.map((item) => {
        symbolList.push({
          id: item.id,
          type: item.modelOptions || "model",
          name: item.modelName,
          url: item.modelUrl,
          scale: item.scale || 1
        });
      });

      //Save symbol list
      getElmById("symbolList").setAttribute("data-symbol-list", JSON.stringify(symbolList));
    }


    function getSymbolList() {
      let symbolListData = getElmById("symbolList").getAttribute("data-symbol-list");
      if (symbolListData != "") {
        return JSON.parse(symbolListData);
      }
      return null;
    }

    function getSymbolById(id) {
      let symbolListData = getElmById("symbolList").getAttribute("data-symbol-list");
      if (symbolListData != "") {
        let symbolList = JSON.parse(symbolListData);
        return symbolList.find(elm => elm.id === id);
      }
       
      return null;
    }
  
    // -------------------Close Handle Javascript re-earth related-------------------------------- //
  </script>
  `,
  { width: 46, height: 46 }
);
var pathLayerId, modelLayerId;

reearth.on("click", (mousedata) => {
  reearth.ui.postMessage({ type: "mousedata", payload: mousedata }, "*");
});
reearth.on("update", send);
send();
function send() {
  reearth.ui.postMessage({
    property: reearth.widget.property,
    layers: reearth.layers.layers,
  });
}
let pathPointsArray = [];
reearth.on("message", (msg) => {
  if (msg.type === "showPoint") {
    pathPointsArray.push(
      reearth.layers.add({
        extensionId: "marker",
        isVisible: true,
        title: "pointPath",
        property: {
          default: {
            location: { lat: msg.latPoint, lng: msg.lngPoint },
            style: "point",
            heightReference: "clamp",
          },
        },
      })
    );
  }
  if (msg.type === "resize") {
    reearth.ui.resize?.(
      msg.expanded ? 46 : 508,
      msg.expanded ? 46 : msg.heightWp,
      msg.expanded ? undefined : false
    );
  }

  if (msg.type === "showModel") {
    pathPointsArray.map((element, index) => {
      reearth.layers.hide(element);
    });

    if (msg.modelLayerId) {
      modelLayerId = msg.modelLayerId;
      // refresh
      reearth.layers.overrideProperty(modelLayerId, {
        default: {
          url: [],
        },
      });

      // override
      reearth.layers.overrideProperty(modelLayerId, {
        default: {
          url: msg.czmlData2,
        },
      });
    } else {
      modelLayerId = reearth.layers.add({
        extensionId: "resource",
        isVisible: true,
        title: `Model CZML`,
        property: { default: { url: msg.czmlData2, type: "czml" } },
      });
    }
  }

  if (msg.type === "showPath") {
    if (msg.pathLayerId) {
      pathLayerId = msg.pathLayerId;
      // refresh
      reearth.layers.overrideProperty(pathLayerId, {
        default: {
          url: [],
        },
      });

      // override
      reearth.layers.overrideProperty(pathLayerId, {
        default: {
          url: msg.czmlData,
        },
      });
    } else {
      pathLayerId = reearth.layers.add({
        extensionId: "resource",
        isVisible: true,
        title: `Path CZML`,
        property: { default: { url: msg.czmlData, type: "czml" } },
      });
    }
  }

  if (msg.type === "removeModel") {
    if (msg.hiddenPathId) {
      reearth.layers.overrideProperty(msg.hiddenPathId, {
        default: {
          url: [],
        },
      });
      reearth.layers.hide(msg.hiddenPathId);
    }

    if (msg.hiddenModelId) {
      reearth.layers.overrideProperty(msg.hiddenModelId, {
        default: {
          url: [],
        },
      });
      reearth.layers.hide(msg.hiddenModelId);
    }
  }

  reearth.ui.postMessage({
    pathLayerId: pathLayerId,
    modelLayerId: modelLayerId,
    type: msg.type,
  });
});
