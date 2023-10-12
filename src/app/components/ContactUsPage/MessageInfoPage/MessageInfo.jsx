import React from "react";

const MessageInfo = () => {
  return (
    <>
      <div className="mt-10 ">
        <div className="">
          <div
            className="bg-[#191C26] text-white"
            style={{ width: "360px"}}
          >
            <div className="flex flex-row">
              <div className="pt-10 pl-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1588_573)">
                    <path
                      d="M53.0008 63.4398C52.622 62.7871 51.7857 62.5648 51.1322 62.9435L51.0796 62.9738C50.4266 63.3527 50.2045 64.1893 50.5832 64.8424C50.8368 65.2795 51.2955 65.5236 51.7669 65.5236C51.9996 65.5236 52.2358 65.4639 52.4517 65.3387L52.5043 65.3083C53.1573 64.9295 53.3795 64.0929 53.0008 63.4398Z"
                      fill="#A9AFC3"
                    />
                    <path
                      d="M65.3097 17.5118C60.6364 9.41735 53.0907 3.62745 44.0626 1.20835C35.0348 -1.21075 25.605 0.0307899 17.5106 4.70397C9.41632 9.37716 3.62628 16.9229 1.20731 25.9509C-1.21165 34.9788 0.0297523 44.4087 4.70294 52.503C8.89487 59.7638 15.5574 65.2819 23.4633 68.0406C27.2109 69.3482 31.1232 70.0007 35.0293 70.0007C39.2765 70.0007 43.516 69.2288 47.5234 67.6887C48.2282 67.4178 48.5798 66.6269 48.3088 65.9221C48.0379 65.2173 47.2468 64.8653 46.5423 65.1367C35.8755 69.2365 24.328 67.3737 15.7006 60.8978L16.9255 54.5042L17.5157 54.3125C19.746 53.5879 20.971 51.1838 20.2466 48.9534L19.8135 47.6205C19.7133 47.3121 19.7138 46.986 19.8149 46.6779C20.1948 45.5196 20.0591 44.2523 19.4423 43.2007C18.8256 42.1492 17.7858 41.4119 16.5894 41.1779L13.5037 40.575L7.54983 36.0483C7.19313 35.777 6.72624 35.6978 6.29995 35.8362L2.81417 36.9685C2.7402 35.7218 2.73911 34.4754 2.80938 33.2357C2.94692 33.3638 3.03647 33.4509 3.09157 33.508C3.15979 33.6216 3.24428 33.7258 3.34327 33.816C3.62792 34.0753 3.88577 34.1928 4.42718 34.1928C4.92469 34.1927 5.6612 34.0936 6.87731 33.9139C8.03067 33.7434 9.17801 33.5514 9.18936 33.5494C9.64915 33.4725 10.0378 33.1662 10.2208 32.7376C10.4037 32.3089 10.3554 31.8165 10.0928 31.4313L8.41649 28.9725L10.8175 27.2556C10.9775 27.1412 11.1109 26.9936 11.2087 26.823L14.9306 20.3255L16.4308 18.7179C17.9638 17.0748 18.4013 14.6709 17.5452 12.5933C17.0402 11.3679 16.1581 10.3477 15.0547 9.66016C16.2497 8.72077 17.5237 7.85343 18.8778 7.07181C23.8459 4.20345 29.2676 2.81343 34.6323 2.76024L32.1911 5.82261L23.1382 8.99626C22.7706 9.12505 22.4753 9.40477 22.3268 9.76489L19.7986 15.8937C19.6191 16.3292 19.6761 16.826 19.9497 17.2094L23.6422 22.3817C23.1133 22.8642 22.5986 23.5669 21.9838 24.4395C21.7142 24.8221 21.4596 25.1835 21.2836 25.3861C21.1307 25.5625 20.9775 25.7347 20.8258 25.9054C20.0316 26.7988 19.2104 27.7229 18.6271 28.9572C17.3444 31.6723 17.6034 34.828 19.3031 37.193C20.9466 39.4796 23.6561 40.642 26.548 40.3018C27.0191 40.2466 27.4584 40.1379 27.8835 40.0326C29.0556 39.7427 29.4269 39.7137 29.8029 40.0656C29.9858 40.2369 30.0026 40.2693 29.9989 40.8502C29.9963 41.2199 29.9934 41.6798 30.1209 42.205C30.325 43.0451 30.8526 43.6258 31.2764 44.0922C31.4871 44.324 31.705 44.5638 31.7722 44.7247C32.1986 45.7465 32.0129 46.3124 31.606 47.5524C31.5712 47.6585 31.5356 47.7668 31.5 47.8778C30.8818 49.7912 31.7434 51.6891 32.5036 53.3634C32.7505 53.9071 32.9836 54.4204 33.1363 54.874C34.3656 58.5215 35.2871 59.3569 36.0266 59.6932C36.4139 59.8693 36.8148 59.9466 37.2197 59.9464C39.1905 59.9463 41.247 58.1164 42.1918 56.9564C42.7851 56.2279 42.9313 55.4985 43.0379 54.9657C43.0911 54.7008 43.1329 54.4916 43.2128 54.3549C43.335 54.1457 43.479 53.9836 43.6612 53.7782C44.0278 53.3655 44.484 52.8519 44.7794 51.921C45.0039 51.2139 45.167 51.0406 45.7072 50.4652C45.8013 50.3653 45.9015 50.2584 46.0091 50.1414C47.8301 48.1599 47.3611 46.6463 46.8644 45.0437C46.4465 43.6952 47.1775 42.8328 48.945 41.1868C49.7112 40.4733 50.5033 39.7356 51.1157 38.8491C51.3836 38.4611 52.1989 37.2808 51.6944 36.1109C51.1999 34.9638 49.943 34.771 48.9332 34.6163C48.5344 34.555 47.9318 34.4626 47.74 34.3372C46.8941 33.7842 46.3766 32.63 45.8761 31.5137C45.7764 31.2915 45.6781 31.0722 45.5784 30.8594C45.4007 30.4796 45.2231 30.02 45.0351 29.5336C44.5377 28.2463 43.974 26.7871 43.0144 25.7699C42.1518 24.8559 40.5259 24.4157 39.0913 24.0271C38.6088 23.8966 38.1534 23.7732 37.853 23.6624C37.6013 23.5694 37.3281 23.5526 37.0676 23.6138C36.3693 23.7775 35.9337 23.9578 35.6103 24.217C35.5248 24.2855 35.2718 24.5104 35.1235 24.8719C34.623 24.6317 33.9348 24.173 33.5112 23.8907C33.5025 23.8848 33.4936 23.8789 33.4848 23.873C33.6276 23.3018 33.4984 22.8434 33.363 22.5571C32.5993 20.9417 30.0641 21.0681 29.564 21.1106C29.2799 21.1344 28.9205 21.1471 28.5403 21.1605C27.9431 21.1817 27.283 21.2055 26.6299 21.2788L26.6635 21.185C27.1593 19.8037 28.4783 18.8757 29.9459 18.8757H30.7231C31.4779 18.8757 32.0902 18.2635 32.0902 17.5086C32.0902 16.7538 31.4779 16.1416 30.7231 16.1416H29.9459C27.7671 16.1416 25.772 17.2883 24.6538 19.0931L22.6146 16.2366L24.6208 11.3737L33.4669 8.27233C33.7095 8.18729 33.9233 8.03554 34.0837 7.83442L38.0161 2.90175C48.0641 3.85755 57.5223 9.49118 62.9421 18.8786C64.3857 21.379 65.4537 24.0114 66.1636 26.7038L65.5841 27.2206C64.8276 27.8956 64.3844 28.8637 64.3674 29.8769C64.3673 29.888 64.367 29.8989 64.3666 29.9099L63.4224 27.3133C63.2817 26.9258 63.0745 26.5705 62.8068 26.2573L61.1225 24.2854C60.4696 23.521 59.5188 23.0828 58.5138 23.0828H56.4522C55.7204 23.0828 55.0515 23.4837 54.7063 24.1286C54.3611 24.7736 54.3988 25.5526 54.8048 26.1613L55.0134 26.4745C53.6812 27.6201 52.1404 28.5368 50.4998 29.155L47.6738 23.7419V22.5343C47.6738 22.1608 47.5209 21.8033 47.2506 21.5455L44.7059 19.1162C44.5655 18.9822 44.3981 18.8797 44.2151 18.8153L41.9244 18.0103C41.2116 17.7595 40.4315 18.1345 40.1813 18.8467C39.931 19.5591 40.3055 20.3394 41.0178 20.5897L43.0308 21.2973L44.9397 23.1193V24.0774C44.9397 24.2977 44.993 24.5148 45.095 24.7102L48.6329 31.4869C48.951 32.0967 49.6732 32.3753 50.3176 32.1369L51.3478 31.7571C53.7411 30.8744 55.9594 29.4546 57.7629 27.6513C58.2237 27.1904 58.2953 26.4686 57.9337 25.9263L57.861 25.817H58.5138C58.7179 25.817 58.9111 25.906 59.0437 26.0614L60.728 28.0333C60.7822 28.0968 60.8242 28.1687 60.8529 28.2476L62.7116 33.3586C62.8713 33.7977 63.2443 34.1248 63.7001 34.2259C63.7985 34.2477 63.8977 34.2583 63.9962 34.2583C64.3548 34.2583 64.7039 34.1171 64.9628 33.8579L65.8475 32.9732C66.4078 32.4128 66.7935 31.7037 66.9778 30.9177C68.3461 41.8833 64.0464 53.2266 54.9582 60.3597C54.3641 60.8258 54.2605 61.6851 54.7268 62.2791C55.1929 62.8731 56.052 62.9768 56.6462 62.5104C63.2076 57.3607 67.7152 49.9949 69.3388 41.7701C70.9775 33.4659 69.5467 24.8506 65.3097 17.5118ZM6.46428 38.6577L12.1016 42.9439C12.2683 43.0707 12.4616 43.1574 12.6669 43.1974L16.0647 43.8613C16.4983 43.9461 16.8601 44.2026 17.0836 44.5837C17.3072 44.9648 17.3542 45.4057 17.2167 45.8256C16.9337 46.6887 16.9323 47.6015 17.213 48.4652L17.6461 49.7979C17.9049 50.5944 17.4671 51.4532 16.6707 51.712L15.3122 52.1534C14.8382 52.3074 14.4857 52.7072 14.3921 53.1963L13.2986 58.9042C10.8947 56.704 8.78399 54.1036 7.07077 51.1361C4.98061 47.5162 3.67467 43.6551 3.09909 39.751L6.46428 38.6577ZM14.4318 16.8525L12.8236 18.5756C12.7518 18.6526 12.6891 18.7376 12.6367 18.8289L8.9847 25.205L5.73885 27.5259C5.13428 27.9582 4.98581 28.794 5.40444 29.4081L6.61837 31.1887C5.91864 31.2929 5.29069 31.3788 4.87315 31.4243C4.7929 31.3473 4.70895 31.2692 4.62214 31.1886C4.29716 30.8867 3.84557 30.4835 3.17237 29.8944C4.28266 23.0225 7.59399 16.5486 12.8019 11.6069C13.7991 11.9209 14.6175 12.6648 15.0173 13.6351C15.4671 14.7264 15.2371 15.9894 14.4318 16.8525ZM25.5785 24.3233C26.1883 23.9801 27.6036 23.9299 28.6369 23.8933C29.051 23.8786 29.4423 23.8647 29.7918 23.8354C29.9762 23.82 30.181 23.8229 30.3742 23.8379C30.2879 24.0594 30.2599 24.3025 30.2974 24.5436C30.3631 24.9679 30.6247 25.3363 31.0031 25.5388C31.2596 25.6761 31.6166 25.9141 31.9945 26.1661C33.0629 26.8784 34.2741 27.6857 35.4119 27.7582C36.4466 27.8253 37.0223 27.2356 37.2689 26.9845C37.2886 26.9645 37.3072 26.9446 37.3269 26.9264C37.4658 26.8132 37.596 26.6614 37.6928 26.4783C37.9114 26.5408 38.1411 26.603 38.3765 26.6669C39.186 26.886 40.6928 27.294 41.0257 27.6467C41.617 28.2736 42.0779 29.4667 42.4846 30.5193C42.6901 31.0513 42.8843 31.5533 43.102 32.0189C43.1956 32.2186 43.2876 32.4244 43.3811 32.6327C44.0119 34.0399 44.7269 35.6348 46.2438 36.6263C46.9317 37.076 47.7748 37.2052 48.5188 37.3193C48.6088 37.3331 48.7119 37.349 48.8166 37.3662C48.375 37.9823 47.7462 38.5677 47.0819 39.1864C45.3895 40.7625 43.2832 42.7241 44.2532 45.8534C44.7111 47.3311 44.7324 47.4908 43.9962 48.2917C43.8958 48.4009 43.8023 48.5005 43.7147 48.5937C43.0841 49.265 42.5861 49.7952 42.1737 51.094C42.054 51.4712 41.8988 51.6459 41.617 51.9631C41.3917 52.2169 41.111 52.533 40.8522 52.9759C40.5421 53.5067 40.4396 54.0177 40.3574 54.4283C40.2763 54.8323 40.2304 55.0351 40.0718 55.2298C39.7107 55.673 39.0373 56.3167 38.3459 56.7559C37.7033 57.1639 37.3281 57.2197 37.2003 57.212C37.0544 57.0556 36.526 56.3708 35.7276 54.0011C35.5307 53.4165 35.2575 52.8149 34.9934 52.2332C34.4111 50.9507 33.8091 49.6246 34.102 48.7183C34.1366 48.6113 34.1708 48.5069 34.2044 48.4048C34.6722 46.9788 35.1138 45.6322 34.2957 43.6717C34.0466 43.0746 33.65 42.6384 33.3004 42.2534C33.0741 42.0044 32.8178 41.7222 32.7783 41.5598C32.7301 41.3617 32.7317 41.133 32.7334 40.8681C32.7381 40.1538 32.7452 39.0744 31.6721 38.0695C30.1591 36.6534 28.3949 37.0896 27.2274 37.3784C26.8687 37.467 26.53 37.5509 26.2297 37.5862C24.3091 37.8112 22.5944 37.0866 21.5239 35.5969C20.404 34.0388 20.2414 31.9419 21.0998 30.1249C21.5152 29.2457 22.1429 28.5392 22.8697 27.7217C23.0284 27.543 23.1887 27.3628 23.3489 27.1782C23.6155 26.8709 23.9089 26.4547 24.2191 26.0141C24.5895 25.4884 25.2791 24.5095 25.5785 24.3233Z"
                      fill="#A9AFC3"
                    />
                    <path
                      d="M56.0577 47.0691L55.3999 44.5899C55.2563 44.0485 54.7969 43.6495 54.2408 43.5831C53.6841 43.518 53.1442 43.7964 52.8769 44.2887C52.7271 44.5649 52.5922 44.8574 52.4617 45.1403C52.2423 45.6162 52.0153 46.1084 51.7792 46.3801C51.6466 46.5327 51.3059 46.6971 50.9767 46.856C50.1896 47.2358 49.1116 47.756 48.6998 49.0688C48.4441 49.8831 48.5395 50.5273 48.6093 50.9976C48.6696 51.4054 48.6835 51.5468 48.5743 51.8033L48.5606 51.8352C48.1254 52.8563 47.3158 54.7574 48.4511 56.3735C49.2611 57.5269 50.1129 57.8234 50.7748 57.8234C50.904 57.8238 51.0262 57.8125 51.1392 57.794C52.5338 57.5661 53.5821 56.1155 54.4388 53.2286L56.0469 47.8089C56.1184 47.5679 56.1222 47.312 56.0577 47.0691ZM51.8178 52.4508C51.3811 53.9227 50.9947 54.6099 50.7717 54.9145C50.746 54.8817 50.7182 54.8445 50.6883 54.802C50.4271 54.4298 50.8176 53.5132 51.0759 52.9066L51.0898 52.8746C51.5065 51.8965 51.395 51.1454 51.314 50.5969C51.2619 50.2457 51.2433 50.0947 51.3085 49.8873C51.3621 49.7168 51.6824 49.5514 52.165 49.3184C52.379 49.2151 52.6146 49.1015 52.8523 48.9639L51.8178 52.4508Z"
                      fill="#A9AFC3"
                    />
                    <path
                      d="M36.9181 16.2504L36.8258 16.2181C36.1139 15.9687 35.3332 16.3432 35.0833 17.0556C34.8334 17.7682 35.2084 18.5482 35.9208 18.7981L36.013 18.8304C36.1627 18.8829 36.3153 18.9078 36.4655 18.9078C37.0299 18.9078 37.5582 18.5554 37.7556 17.9928C38.0055 17.2803 37.6305 16.5001 36.9181 16.2504Z"
                      fill="#A9AFC3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1588_573">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="py-7 px-8">
                <p className="text-[#A9AFC3] text-sm">
                  Vadavision Private Limited
                  <br />
                  CRN: U62099CH2023PTC045004
                  </p>
                <span className="text-sm">Address</span>
                <p className="text-[#A9AFC3] text-sm">
                  Plot 337, Phase 2 Chandigarh, India, 160002
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 ">
          <div
            className="bg-[#191C26] text-white"
            style={{ width: "360px" }}
          >
            <div className="flex flex-row">
              <div className="pt-10 pl-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <path
                    d="M12.3047 41.8359C13.0593 41.8359 13.6719 41.2234 13.6719 40.4688C13.6719 39.7141 13.0593 39.1016 12.3047 39.1016C11.5501 39.1016 10.9375 39.7141 10.9375 40.4688C10.9375 41.2234 11.5501 41.8359 12.3047 41.8359Z"
                    fill="#A9AFC3"
                  />
                  <path
                    d="M35 17.2266C34.2454 17.2266 33.6328 17.8391 33.6328 18.5938C33.6328 19.3484 34.2454 19.9609 35 19.9609C35.7546 19.9609 36.3672 19.3484 36.3672 18.5938C36.3672 17.8391 35.7546 17.2266 35 17.2266Z"
                    fill="#A9AFC3"
                  />
                  <path
                    d="M45.9375 3.55469C33.6291 3.55469 23.5268 12.0409 22.7455 22.73C11.0235 23.318 0 31.7706 0 43.2031C0 47.9808 1.89056 52.61 5.33203 56.2779C6.01295 59.0849 5.18623 62.0602 3.13492 64.1115C2.74399 64.5024 2.62703 65.0904 2.83852 65.6015C3.05 66.1121 3.54828 66.4453 4.10156 66.4453C8.00072 66.4453 11.7583 64.9163 14.5504 62.222C17.2704 63.1491 20.8192 63.7109 24.0625 63.7109C36.3693 63.7109 46.4705 55.2269 47.254 44.5399C50.1165 44.4128 53.0939 43.884 55.4496 43.0814C58.2417 45.7757 61.9993 47.3047 65.8984 47.3047C66.4517 47.3047 66.95 46.9714 67.1615 46.4609C67.373 45.9498 67.256 45.3618 66.8651 44.9709C64.8138 42.9195 63.987 39.9443 64.668 37.1373C68.1094 33.4694 70 28.8402 70 24.0625C70 12.1835 58.1274 3.55469 45.9375 3.55469ZM24.0625 60.9766C20.8357 60.9766 17.1587 60.3432 14.6957 59.3632C14.168 59.1528 13.5651 59.2911 13.1811 59.7103C11.5303 61.5149 9.38393 62.7731 7.04529 63.3515C8.33397 60.8826 8.66295 57.972 7.87895 55.2141C7.817 54.9967 7.70218 54.798 7.54463 54.6362C4.44283 51.4415 2.73438 47.3811 2.73438 43.2031C2.73438 33.5687 12.5012 25.4297 24.0625 25.4297C34.9797 25.4297 44.5703 33.0213 44.5703 43.2031C44.5703 53.0036 35.3706 60.9766 24.0625 60.9766ZM62.4554 35.4956C62.2978 35.658 62.183 35.8566 62.121 36.0735C61.3371 38.8313 61.666 41.7419 62.9547 44.2109C60.6161 43.633 58.4697 42.3743 56.8189 40.5697C56.4349 40.151 55.832 40.0121 55.3043 40.2225C53.1697 41.0717 50.1245 41.6597 47.2497 41.8018C46.8502 36.6315 44.2712 31.7722 39.8621 28.1641H57.6953C58.4505 28.1641 59.0625 27.552 59.0625 26.7969C59.0625 26.0417 58.4505 25.4297 57.6953 25.4297H35.6617C32.5583 23.8499 29.0736 22.9287 25.4868 22.7354C26.2724 13.5528 35.1447 6.28906 45.9375 6.28906C57.4988 6.28906 67.2656 14.4281 67.2656 24.0625C67.2656 28.2404 65.5572 32.3009 62.4554 35.4956Z"
                    fill="#A9AFC3"
                  />
                  <path
                    d="M35 47.3047H12.3047C11.5495 47.3047 10.9375 47.9167 10.9375 48.6719C10.9375 49.427 11.5495 50.0391 12.3047 50.0391H35C35.7552 50.0391 36.3672 49.427 36.3672 48.6719C36.3672 47.9167 35.7552 47.3047 35 47.3047Z"
                    fill="#A9AFC3"
                  />
                  <path
                    d="M35 39.1016H17.7734C17.0183 39.1016 16.4062 39.7136 16.4062 40.4688C16.4062 41.2239 17.0183 41.8359 17.7734 41.8359H35C35.7552 41.8359 36.3672 41.2239 36.3672 40.4688C36.3672 39.7136 35.7552 39.1016 35 39.1016Z"
                    fill="#A9AFC3"
                  />
                  <path
                    d="M57.6953 17.2266H40.4688C39.7136 17.2266 39.1016 17.8386 39.1016 18.5938C39.1016 19.3489 39.7136 19.9609 40.4688 19.9609H57.6953C58.4505 19.9609 59.0625 19.3489 59.0625 18.5938C59.0625 17.8386 58.4505 17.2266 57.6953 17.2266Z"
                    fill="#A9AFC3"
                  />
                </svg>
              </div>
              <div className="py-7 px-8">
                <span className="text-sm">Hit us up:</span>
                <p className="text-[#A9AFC3] text-sm">
                  +91 62800-07001 <br /> info@vadavision.ca{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 ">
          <div
            className="bg-[#191C26] text-white"
            style={{ width: "360px" }}
          >
            <div className="flex flex-row">
              <div className="pt-10 pl-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 70 70"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1588_384)">
                    <path
                      d="M59.7488 10.2513C53.1381 3.64055 44.3488 0 35 0C25.6512 0 16.8619 3.64055 10.2512 10.2513C3.64068 16.8619 0 25.6512 0 35C0 44.3488 3.64068 53.1381 10.2512 59.7487C16.8619 66.3595 25.6512 70 35 70C44.3488 70 53.1381 66.3595 59.7488 59.7487C66.3593 53.1381 70 44.3488 70 35C70 25.6512 66.3593 16.8619 59.7488 10.2513ZM35 67.2656C17.2087 67.2656 2.73438 52.7913 2.73438 35C2.73438 17.2087 17.2087 2.73438 35 2.73438C52.7913 2.73438 67.2656 17.2087 67.2656 35C67.2656 52.7913 52.7913 67.2656 35 67.2656Z"
                      fill="#A9AFC3"
                    />
                    <path
                      d="M29.2671 61.1825L29.1826 61.1639C28.4461 61.0003 27.7152 61.4648 27.5514 62.2019C27.3876 62.9389 27.8523 63.6693 28.5895 63.8331L28.6852 63.8541C28.7832 63.8754 28.8811 63.8857 28.9775 63.8857C29.6066 63.8857 30.1727 63.4489 30.312 62.8093C30.4727 62.0714 30.0048 61.3431 29.2671 61.1825Z"
                      fill="#A9AFC3"
                    />
                    <path
                      d="M34.9795 57.7588C34.2245 57.7588 33.6123 58.3709 33.6123 59.126V63.1641C33.6123 63.9192 34.2245 64.5313 34.9795 64.5313C35.7344 64.5313 36.3467 63.9192 36.3467 63.1641V59.126C36.3467 58.3709 35.7344 57.7588 34.9795 57.7588Z"
                      fill="#A9AFC3"
                    />
                    <path
                      d="M62.8095 39.6884C62.0726 39.5275 61.3436 39.9955 61.1827 40.7332C58.8999 51.2093 50.6227 59.2876 40.0955 61.3134C39.3539 61.456 38.8686 62.1728 39.0112 62.9142C39.1371 63.5684 39.71 64.0233 40.3524 64.0233C40.438 64.0233 40.5251 64.0152 40.6122 63.9984C46.2863 62.9065 51.4816 60.1838 55.6363 56.1246C59.7846 52.0716 62.6265 46.9506 63.8543 41.3152C64.015 40.5775 63.5473 39.8492 62.8095 39.6884Z"
                      fill="#A9AFC3"
                    />
                    <path
                      d="M24.67 59.7339C16.3592 56.2587 10.3842 48.9171 8.68658 40.0953C8.54398 39.3539 7.82812 38.8678 7.08574 39.0112C6.34418 39.1538 5.85882 39.8706 6.00142 40.612C6.92168 45.3933 9.04588 49.9201 12.1449 53.7027C15.2081 57.4417 19.1744 60.3995 23.615 62.2565C23.7873 62.3286 23.9661 62.3627 24.1419 62.3627C24.6767 62.3627 25.1846 62.0469 25.4037 61.5226C25.6951 60.826 25.3665 60.0251 24.67 59.7339Z"
                      fill="#A9AFC3"
                    />
                    <path
                      d="M63.1641 33.6536H59.4727C58.7177 33.6536 58.1055 34.2657 58.1055 35.0208C58.1055 35.7759 58.7177 36.388 59.4727 36.388H63.1641C63.919 36.388 64.5312 35.7759 64.5312 35.0208C64.5312 34.2657 63.919 33.6536 63.1641 33.6536Z"
                      fill="#A9AFC3"
                    />
                    <path
                      d="M10.8008 33.6121H6.83594C6.08098 33.6121 5.46875 34.2241 5.46875 34.9792C5.46875 35.7343 6.08098 36.3464 6.83594 36.3464H10.8008C11.5557 36.3464 12.168 35.7343 12.168 34.9792C12.168 34.2241 11.5557 33.6121 10.8008 33.6121Z"
                      fill="#A9AFC3"
                    />
                    <path
                      d="M35 30.3516C32.4368 30.3516 30.3516 32.4368 30.3516 35C30.3516 37.5632 32.4368 39.6484 35 39.6484C37.5632 39.6484 39.6484 37.5632 39.6484 35C39.6484 32.4368 37.5632 30.3516 35 30.3516ZM35 36.9141C33.9445 36.9141 33.0859 36.0555 33.0859 35C33.0859 33.9445 33.9445 33.0859 35 33.0859C36.0555 33.0859 36.9141 33.9445 36.9141 35C36.9141 36.0555 36.0555 36.9141 35 36.9141Z"
                      fill="#A9AFC3"
                    />
                    <path
                      d="M31.7191 33.6328H25.4756C24.7206 33.6328 24.1084 34.2449 24.1084 35C24.1084 35.7551 24.7206 36.3672 25.4756 36.3672H31.7191C32.4741 36.3672 33.0863 35.7551 33.0863 35C33.0863 34.2449 32.4741 33.6328 31.7191 33.6328Z"
                      fill="#A9AFC3"
                    />
                    <path
                      d="M35 17.5454C34.245 17.5454 33.6328 18.1575 33.6328 18.9126V31.7186C33.6328 32.4737 34.245 33.0858 35 33.0858C35.755 33.0858 36.3672 32.4737 36.3672 31.7186V18.9126C36.3672 18.1575 35.755 17.5454 35 17.5454Z"
                      fill="#A9AFC3"
                    />
                    <path
                      d="M63.9981 29.3883C62.1551 19.8118 55.6982 11.7746 46.7252 7.88882C46.0324 7.58873 45.2274 7.90728 44.9273 8.60003C44.6274 9.29293 44.9458 10.0979 45.6387 10.3979C53.7815 13.9243 59.641 21.2166 61.3129 29.9049C61.4388 30.5591 62.0117 31.014 62.6541 31.014C62.7397 31.014 62.8267 31.0059 62.9138 30.9891C63.6552 30.8465 64.1407 30.1297 63.9981 29.3883Z"
                      fill="#A9AFC3"
                    />
                    <path
                      d="M41.3474 6.15304L41.3116 6.14525C40.5738 5.98611 39.8461 6.4556 39.6872 7.19388C39.5282 7.93202 39.9977 8.65923 40.7358 8.81823L40.7518 8.82178C40.8522 8.84421 40.9523 8.85487 41.051 8.85487C41.6771 8.85487 42.2421 8.42175 42.384 7.78518C42.5485 7.04813 42.0843 6.31751 41.3474 6.15304Z"
                      fill="#A9AFC3"
                    />
                    <path
                      d="M30.989 7.08583C30.8463 6.3444 30.1296 5.85823 29.388 6.00165C23.7139 7.09348 18.5186 9.81624 14.3639 13.8754C10.2156 17.9284 7.37372 23.0494 6.14585 28.6848C5.98521 29.4225 6.45292 30.1508 7.19066 30.3116C7.28869 30.3329 7.38671 30.3432 7.4831 30.3432C8.11214 30.3432 8.67829 29.9065 8.81761 29.2668C11.1004 18.7906 19.3776 10.7124 29.9047 8.68667C30.6463 8.54407 31.1316 7.82725 30.989 7.08583Z"
                      fill="#A9AFC3"
                    />
                    <path
                      d="M35.0205 5.46875C34.2656 5.46875 33.6533 6.08084 33.6533 6.83594V9.89953C33.6533 10.6546 34.2656 11.2667 35.0205 11.2667C35.7756 11.2667 36.3877 10.6546 36.3877 9.89953V6.83594C36.3877 6.08084 35.7755 5.46875 35.0205 5.46875Z"
                      fill="#A9AFC3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1588_384">
                      <rect width="70" height="70" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="py-7 px-8">
                <span className="text-sm">Working Schedule:</span>
                <p className="text-[#A9AFC3] text-sm">
                  Mon - Fri: 9 am - 6 pm Sat, Sun: Holiday{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageInfo;
