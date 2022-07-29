import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "../sass/global.scss";

import Layout from "../components/Layout";
import SearchEngineOptimization from "../components/SEO";
import Hero from "../components/Hero/HeroFullWidth";
// import SliderMobileCards from "../components/Slider/SliderMobileCards";
import Testimonials from "../components/Repeating/Testimonials";
import CarouselForm from "../components/Repeating/Carousel";
// import Carousel from "../components/Repeating/Carousel";
import ValueProps from "../components/Repeating/ValueProps";
import About from "../components/Repeating/About";
//import RecentBlogPosts from "../components/Repeating/RecentBlogPosts";
import CallToAction from "../components/Repeating/CTA";
import ButtonSolid from "../components/Button/ButtonSolid";
import ButtonSolidGold from "../components/Button/ButtonSolidGold";
import ButtonGhost from "../components/Button/ButtonGhost";
// import ButtonWithIcon from "../components/Button/ButtonWithIcon";

const Page = ({ data }) => {
  return (
    <Layout headerDarkMode={true}>
      <SearchEngineOptimization
        title="Independent Mortgage Lender Chicago | MacAsh Home Loans"
        description="Apply online. Close in 15 days. It's that easy. Make your dream home a reality with MacAsh, your local independent mortgage broker in Chicago."
      />
      <section className="w-full lg:hidden md:hidden relative">
        <GatsbyImage
          image={data.heroMobile.childImageSharp.gatsbyImageData}
          className="md:hidden w-full"
        />
        <div className="absolute top-0 px-6 pt-32 pb-14 text-center">
          <p className="font-heading text-white text-5xl tracking-wider mb-6">
            WE ARE HIGH ECHELON
          </p>
          <p className="font-body text-xl text-white mb-8">
            Elevated Consulting, Payroll, Accounting & Tax
            Services
          </p>
          <div className="flex justify-center md:justify-center space-x-4 md:space-x-5">
            <ButtonSolidGold href="/refinance/" text="Book a Call" />
          </div>
        </div>
        <div className="relative mb-32 flex justify-center">         
          <div className="container bg-primary-700 flex justify-center md:justify-center items-center flex-col rounded-[8px]">
          <svg width="324" height="2" viewBox="0 0 324 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-7">
            <line x1="0.900024" y1="1" x2="323.1" y2="1" stroke="url(#paint0_linear_1192_6745)" stroke-width="2"/>
            <defs>
            <linearGradient id="paint0_linear_1192_6745" x1="0.900024" y1="2.50435" x2="315.429" y2="2.50107" gradientUnits="userSpaceOnUse">
            <stop stop-color="#A2A09D" stop-opacity="0"/>
            <stop offset="0.145833" stop-color="#CB9636"/>
            <stop offset="0.265625" stop-color="#CFA855"/>
            <stop offset="0.427083" stop-color="#FCE4A7"/>
            <stop offset="0.578125" stop-color="#F0D592"/>
            <stop offset="0.713542" stop-color="#CFA855"/>
            <stop offset="0.828125" stop-color="#CB9636"/>
            <stop offset="1" stop-color="#A7A7A7" stop-opacity="0"/>
            </linearGradient>
            </defs>
          </svg>
            
            <svg
              width="93"
              height="93"
              viewBox="0 0 93 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M78.0267 30.523l-16.334-14.6733c-.3378-.3035-1.208-.5485-1.5115-.2108l-.0172.0666c-.1411.1351-.24.3327-.2884.5021-.1159.4024-.1603.846-.1502 1.2635.0101.3973.0807.7946.2097 1.1707.0605.1764.1392.3478.2209.5152.0423.0867.0857.1735.1331.2572-3.0644 2.7285-8.6566 8.6394-10.28 16.587-.0323.1553-.1049.3015-.2158.4155-1.7434 1.7807-4.1009 2.8757-6.5612 3.0159-3.8226.2198-7.6845.0766-11.4809-.4225l-1.3723-.1795c-.8027-.1038-1.5892-.0443-2.3464.1341-.1351.0313-.2743.0293-.4074-.009-1.2896-.3691-4.9559-1.1102-8.0888 1.1979-1.8594 1.3703-3.026 3.4505-3.7067 5.6214-.4325 1.3784-.6856 2.8102-.8268 4.2461-.0807.8167-.1472 1.6486-.1392 2.4704.0061.5607-.0665 1.1193-.0645 1.6789.001.4043.0555.8067.0656 1.21.009.3711-.0807.7855.0615 1.1404.2571.6443 1.698-.8329 1.8482-1.0608.6121-.9347.716-2.0862.7462-3.1742.0292-1.0799.0918-2.1366.241-3.2085.242-1.7424.6877-3.511 1.6093-5.0265.4316-.7099.9761-1.3573 1.6456-1.8544.3731-.2783.7623-.492 1.1545-.6554.7331-.3045 1.4389.477 1.0396 1.1626-.0585.1009-.1149.2027-.1704.3076-.6867 1.2906-1.1505 2.8203-1.4197 4.6796-.7875 5.444.2228 10.8648 1.1989 16.1072.4386 2.3585.5233 3.7651.7613 6.0429.0111.1523.0151.3015-.0353.4497-.0605.1795-.1674.3428-.2602.5072-.0332.0585-.0665.118-.1008.1765-.0736.0867-.1452.1764-.2077.3005-.0615.121-.0625.2974.0555.363.0453.0252.0988.0282.1502.0302.0252 0 1.6406.0746 1.9985.0504.0877-.006.971-.003 1.1445-.1724.0988-.0968.0907-.2561.0756-.3933-.0252-.2339-.0514-.4668-.0776-.7007-.0626-.5667-.2239-1.1032-.2854-1.6658-.0555-.5001-.1119-.9993-.1714-1.4984-.1573-1.3209-.3247-2.6438-.5677-3.9527-.3832-2.061-.7704-4.1503-1.0467-6.2436-.0746-.5717.4568-1.0416 1.0154-.8974 1.2947.3338 2.8748.6171 4.5032.6171h.0303S36.326 69.9559 36.3674 70.34c.0383.3661-.1694.7764-.0303 1.1082.1543.366 3.509.241 3.6623.0081.1885-.2874-.0898-.6413-.2309-.8833-.2229-.3822-6.8365-13.1941-6.8365-13.1941-.2219-.4437-.0031-.9761.4648-1.1394.4971-.1744.9821-.3933 1.446-.6675.6624-.3913 1.2422-.8753 1.7514-1.4379.2259-.2501.5637-.357.8823-.247 2.2849.7885 7.0543 1.8402 15.1452 2.9503.7421.1019 1.4611.1523 2.1558.1523.2098 0 .4165-.0061.6201-.0172.4135-.0221.7714.2824.836.6918l1.7907 11.26.0908.5687s.0948 1.0013.1311 1.1899c.0383.1996.0333.3841-.0192.5808-.0393.1462-.128.3761-.0494.5223.0656.123.2813.1502.4084.125.7421-.002 1.4853-.005 2.2274-.003.1432 0 .7603.008.8843-.0383.2228-.0827.2007-.3519.121-.5556-.1543-.3963-.4608-.6938-.6957-1.0406l-.2027-.3277c-.0051-.0141-.0111-.0293-.0162-.0434-.1129-.2954-.2198-.5929-.3166-.8944l-1.8987-11.9366c-.0615-.3872.1644-.7523.5284-.8995 1.1475-.4628 2.178-1.1232 3.0815-1.9632l-.0081.0716 4.6857.5546c.5677.0675.8954.6796.6363 1.1888l-3.0321 5.9653-.3327.6554c-.0454.0474-.0918.0938-.1372.1412-.1492.1543-.2944.3126-.4446.4648-.1271.1301-.24.2309-.4064.2662-.0716.0152-.1139.0615-.1422.114-.006.0091-.01.0222-.0141.0332-.008.0242-.0151.0464-.0151.0716 0 .0111-.0061.0162-.0061.0283.0021.362.9922 2.0832 1.4036 2.5047.5304.5445.7704-.0857 1.0084-.5415.1593-.3055.3186-.6111.4779-.9156.1967-.3761.5828-1.1323.5798-1.1353l4.9469-9.7325c.2592-.5102-.0686-1.1223-.6363-1.1898l-5.5044-.6504c-.5687-.0675-.8904-.6756-.6323-1.1868.5062-1.0013.9166-2.1175 1.2201-3.3517.8208-3.3406.6655-7.0654-.4598-11.0695-.0746-.2672-.1412-.5092-.2006-.729-.1412-.5233.253-1.0336.7945-1.0336h9.6599c.2833 0 .5465-.1462.6977-.3861l1.7374-2.779c.2117-.3388.1492-.7805-.1472-1.0477l-.001.0031zM52.9625 54.3398c-8.0546-1.1051-12.0244-2.0298-13.9079-2.5904-.4346-.1291-.6958-.5828-.5597-1.0144.2279-.7179.3973-1.4964.5093-2.3353.0605-.4578-.2904-.8702-.7512-.9085l-.8763-.0716c-.4285-.0353-.8218.2652-.8793.6907-.3448 2.5622-1.331 4.3389-2.9362 5.2887-2.8445 1.6849-7.0523.6181-9.1265-.0847-.3256-.1099-.5455-.4114-.5545-.7552-.0394-1.5115.0171-3.017.2329-4.5063.2269-1.5659.603-2.8263 1.1505-3.8558 1.089-2.0449 2.8768-3.1178 4.7755-2.8677.0353.005 1.3834.1815 1.3834.1815 3.9517.5183 7.9729.6655 11.9518.4396 1.7484-.0998 3.4525-.5868 4.9993-1.3925.5354-.2783 1.1777.0766 1.2009.6796.1755 4.4871 1.7646 8.9127 4.7553 13.2183-.4376-.0172-.8903-.0525-1.3683-.118l.001.002zm10.5341-7.375c-.6312 2.5693-1.9905 5.3684-4.842 6.7034-.4185.1957-.9317.0202-1.1203-.4013-1.7333-3.875-2.1094-7.4475-1.086-10.6349 1.0557-3.2881 3.3931-5.5266 5.081-6.785.4638-.3459 1.1253-.118 1.2796.4396.0766.2783.1603.5758.249.8934 1.0074 3.5806 1.1546 6.8718.4387 9.7838v.001zm1.8099-14.647c-.3599-.0182-.7169-.0585-1.0718-.0877-.6323-.0515-1.2604-.0656-1.8886.1492-.8642.2944-1.6103.9337-2.3484 1.452-.8188.5747-1.5741 1.2735-2.2668 1.9925-1.6456 1.7051-2.9423 3.7469-3.6733 6.0066-.0888.2743-.1694.5516-.241.8299-.2229.8661-1.5075.7633-1.6103-.1251-.1755-1.5044-.1694-3.0139.0211-4.5244.6323-5.0265 3.1914-9.326 5.7425-12.4841.2954-.365.8369-.4014 1.1848-.0857 2.3635 2.1487 4.6575 4.3721 6.9857 6.5592.3832.3599-.6695.3247-.8318.3166l-.0021.001zm5.2897-4.2985l-1.0557 2.2738c-.2379.5112-.9065.6392-1.3138.248-1.4046-1.3491-3.2973-3.1601-4.9873-4.7482-.4194-.3943-.8318-.7996-1.2634-1.1788-.4497-.3952-.9478-.7371-1.3663-1.1676-.1593-.1634-.4225-.4931-.1885-.7018.3045-.2713.6009-.5516.8984-.8319.3721-.3519.7512-.6957 1.1374-1.0305.3126-.2713.7744-.2612 1.0829.0151l6.8607 6.1629c.2693.242.3489.6302.1967.958l-.0011.001zm4.3863 3.9496c-.0555.0867-.1281.1472-.2107.1886-.24.119-.5355.0685-.7936.0665-.4205-.004-.8399-.0091-1.2604-.0091-.601 0-.9993-.6231-.7462-1.1686l.3741-.8067c.2329-.5011.8843-.6352 1.2957-.2652l.6474.5808c.2379.2138 1.0002.6433.9367.9771-.0282.1462-.1633.3136-.242.4366h-.001z"
                fill="url(#paint0_linear_1112_665)"
              />
              <path
                d="M46.5493.300186C21.102.300186.398926 21.0033.398926 46.4506S21.102 92.601 46.5493 92.601s46.1505-20.7031 46.1505-46.1504S71.9966.300186 46.5493.300186zm0 89.903014c-24.1253 0-43.75256-19.6272-43.75256-43.7526 0-24.1254 19.62616-43.75159 43.75256-43.75159 24.1264 0 43.7526 19.62719 43.7526 43.75259S70.6747 90.2042 46.5493 90.2042v-.001z"
                fill="url(#paint1_linear_1112_665)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1112_665"
                  x1="13.2871"
                  y1="71.9196"
                  x2="75.0241"
                  y2="71.9196"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".239583" stopColor="#D2B15E" />
                  <stop offset=".421875" stopColor="#CB9636" />
                  <stop offset=".6875" stopColor="#D2B15E" />
                  <stop offset="1" stopColor="#CEA045" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1112_665"
                  x1="-1.79871"
                  y1="92.601"
                  x2="87.9382"
                  y2="92.601"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".239583" stopColor="#D2B15E" />
                  <stop offset=".421875" stopColor="#CB9636" />
                  <stop offset=".6875" stopColor="#D2B15E" />
                  <stop offset="1" stopColor="#CEA045" />
                </linearGradient>
              </defs>
            </svg>
            <p className="font-body text-mobile-5xl text-white mt-9 mb-6 max-w-[560px] md:w-3/5 sm:w-full text-center">
              A Small Business CPA Firm Serving Atlanta & Beyond
            </p>
            <div className="mb-20 flex justify-center">
              <p className="font-body text-base text-white text-center leading-[30px]">
                If you’re looking for a meticulous CPA firm that can simplify your
                books, you’ve come to the right place. At High Echelon, we value
                client communication, accuracy, a streamlined workflow, and
                creating a positive experience for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden lg:block md:block">
        <Hero
          backgroundImages={data.heroDesktop.childImageSharp.gatsbyImageData}
          backgroundPosition="0% 20%"
          mobileRemoveBackground={true}
          textAlignment="text-center"
          padding="pt-10 md:pt-12 pb-14 md:pb-60"
        >
          <p className="font-heading text-white text-mobile-7xl md:text-7xl tracking-wider mb-12 md:mb-4 mt-40">
            WE ARE HIGH ECHELON
          </p>
          <p className="font-body text-lg md:text-xl text-white font-semibold mb-16">
            Elevated Consulting, Payroll, Accounting & Tax
            Services
          </p>
          <div className="flex justify-center md:justify-center space-x-4 md:space-x-5">
            <ButtonSolidGold href="/refinance/" text="Book a Call" />
          </div>
        </Hero>
        <div className="relative md:top-[-100px] sm:top-0 md:mx-28 sm:mx-4 mb-20 flex justify-center">
          
          <div className="absolute sm:flex container bg-primary-700 flex justify-center md:justify-center items-center flex-col rounded-[8px]">
            <svg width="1094" height="3" viewBox="0 0 1094 3" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-7">
              <line y1="1.5" x2="1094" y2="1.5" stroke="url(#paint0_linear_1129_1424)" stroke-width="3"/>
              <defs>
              <linearGradient id="paint0_linear_1129_1424" x1="0" y1="3.50435" x2="1067.95" y2="3.46651" gradientUnits="userSpaceOnUse">
              <stop stop-color="#A2A09D" stop-opacity="0"/>
              <stop offset="0.145833" stop-color="#CB9636"/>
              <stop offset="0.265625" stop-color="#CFA855"/>
              <stop offset="0.427083" stop-color="#FCE4A7"/>
              <stop offset="0.578125" stop-color="#F0D592"/>
              <stop offset="0.713542" stop-color="#CFA855"/>
              <stop offset="0.828125" stop-color="#CB9636"/>
              <stop offset="1" stop-color="#A7A7A7" stop-opacity="0"/>
              </linearGradient>
              </defs>
            </svg>
            <svg width="93" height="93" viewBox="0 0 93 93" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M78.0267 30.523L61.6927 15.8497C61.3549 15.5462 60.4847 15.3012 60.1812 15.6389L60.164 15.7055C60.0229 15.8406 59.924 16.0382 59.8756 16.2076C59.7597 16.61 59.7153 17.0536 59.7254 17.4711C59.7355 17.8684 59.8061 18.2657 59.9351 18.6418C59.9956 18.8182 60.0743 18.9896 60.156 19.157C60.1983 19.2437 60.2417 19.3305 60.2891 19.4142C57.2247 22.1427 51.6325 28.0536 50.0091 36.0012C49.9768 36.1565 49.9042 36.3027 49.7933 36.4167C48.0499 38.1974 45.6924 39.2924 43.2321 39.4326C39.4095 39.6524 35.5476 39.5092 31.7512 39.0101L30.3789 38.8306C29.5762 38.7268 28.7897 38.7863 28.0325 38.9647C27.8974 38.996 27.7582 38.994 27.6251 38.9557C26.3355 38.5866 22.6692 37.8455 19.5363 40.1536C17.6769 41.5239 16.5103 43.6041 15.8296 45.775C15.3971 47.1534 15.144 48.5852 15.0028 50.0211C14.9221 50.8378 14.8556 51.6697 14.8636 52.4915C14.8697 53.0522 14.7971 53.6108 14.7991 54.1704C14.8001 54.5747 14.8546 54.9771 14.8647 55.3804C14.8737 55.7515 14.784 56.1659 14.9262 56.5208C15.1833 57.1651 16.6242 55.6879 16.7744 55.46C17.3865 54.5253 17.4904 53.3738 17.5206 52.2858C17.5498 51.2059 17.6124 50.1492 17.7616 49.0773C18.0036 47.3349 18.4493 45.5663 19.3709 44.0508C19.8025 43.3409 20.347 42.6935 21.0165 42.1964C21.3896 41.9181 21.7788 41.7044 22.171 41.541C22.9041 41.2365 23.6099 42.018 23.2106 42.7036C23.1521 42.8045 23.0957 42.9063 23.0402 43.0112C22.3535 44.3018 21.8897 45.8315 21.6205 47.6908C20.833 53.1348 21.8433 58.5556 22.8194 63.798C23.258 66.1565 23.3427 67.5631 23.5807 69.8409C23.5918 69.9932 23.5958 70.1424 23.5454 70.2906C23.4849 70.4701 23.378 70.6334 23.2852 70.7978C23.252 70.8563 23.2187 70.9158 23.1844 70.9743C23.1108 71.061 23.0392 71.1507 22.9767 71.2748C22.9152 71.3958 22.9142 71.5722 23.0322 71.6378C23.0775 71.663 23.131 71.666 23.1824 71.668C23.2076 71.668 24.823 71.7426 25.1809 71.7184C25.2686 71.7124 26.1519 71.7154 26.3254 71.546C26.4242 71.4492 26.4161 71.2899 26.401 71.1527C26.3758 70.9188 26.3496 70.6859 26.3234 70.452C26.2608 69.8853 26.0995 69.3488 26.038 68.7862C25.9825 68.2861 25.9261 67.7869 25.8666 67.2878C25.7093 65.9669 25.5419 64.644 25.2989 63.3351C24.9157 61.2741 24.5285 59.1848 24.2522 57.0915C24.1776 56.5198 24.709 56.0499 25.2676 56.1941C26.5623 56.5279 28.1424 56.8112 29.7708 56.8112C29.7809 56.8112 29.791 56.8112 29.8011 56.8112C29.8011 56.8112 36.326 69.9559 36.3674 70.34C36.4057 70.7061 36.198 71.1164 36.3371 71.4482C36.4914 71.8142 39.8461 71.6892 39.9994 71.4563C40.1879 71.1689 39.9096 70.815 39.7685 70.573C39.5456 70.1908 32.932 57.3789 32.932 57.3789C32.7101 56.9352 32.9289 56.4028 33.3968 56.2395C33.8939 56.0651 34.3789 55.8462 34.8428 55.572C35.5052 55.1807 36.085 54.6967 36.5942 54.1341C36.8201 53.884 37.1579 53.7771 37.4765 53.8871C39.7614 54.6756 44.5308 55.7273 52.6217 56.8374C53.3638 56.9393 54.0828 56.9897 54.7775 56.9897C54.9873 56.9897 55.194 56.9836 55.3976 56.9725C55.8111 56.9504 56.169 57.2549 56.2336 57.6643L58.0243 68.9243L58.1151 69.493C58.1151 69.493 58.2099 70.4943 58.2462 70.6829C58.2845 70.8825 58.2795 71.067 58.227 71.2637C58.1877 71.4099 58.099 71.6398 58.1776 71.786C58.2432 71.909 58.4589 71.9362 58.586 71.911C59.3281 71.909 60.0713 71.906 60.8134 71.908C60.9566 71.908 61.5737 71.916 61.6977 71.8697C61.9205 71.787 61.8984 71.5178 61.8187 71.3141C61.6644 70.9178 61.3579 70.6203 61.123 70.2735C61.123 70.2735 61.0463 70.1495 60.9203 69.9458C60.9152 69.9317 60.9092 69.9165 60.9041 69.9024C60.7912 69.607 60.6843 69.3095 60.5875 69.008L58.6888 57.0714C58.6273 56.6842 58.8532 56.3191 59.2172 56.1719C60.3647 55.7091 61.3952 55.0487 62.2987 54.2087L62.2906 54.2803L66.9763 54.8349C67.544 54.9024 67.8717 55.5145 67.6126 56.0237L64.5805 61.989L64.2478 62.6444C64.2024 62.6918 64.156 62.7382 64.1106 62.7856C63.9614 62.9399 63.8162 63.0982 63.666 63.2504C63.5389 63.3805 63.426 63.4813 63.2596 63.5166C63.188 63.5318 63.1457 63.5781 63.1174 63.6306C63.1114 63.6397 63.1074 63.6528 63.1033 63.6638C63.0953 63.688 63.0882 63.7102 63.0882 63.7354C63.0882 63.7465 63.0821 63.7516 63.0821 63.7637C63.0842 64.1257 64.0743 65.8469 64.4857 66.2684C65.0161 66.8129 65.2561 66.1827 65.4941 65.7269C65.6534 65.4214 65.8127 65.1158 65.972 64.8113C66.1687 64.4352 66.5548 63.679 66.5518 63.676L71.4987 53.9435C71.7579 53.4333 71.4301 52.8212 70.8624 52.7537L65.358 52.1033C64.7893 52.0358 64.4676 51.4277 64.7257 50.9165C65.2319 49.9152 65.6423 48.799 65.9458 47.5648C66.7666 44.2242 66.6113 40.4994 65.486 36.4953C65.4114 36.2281 65.3448 35.9861 65.2854 35.7663C65.1442 35.243 65.5384 34.7327 66.0799 34.7327H75.7398C76.0231 34.7327 76.2863 34.5865 76.4375 34.3466L78.1749 31.5676C78.3866 31.2288 78.3241 30.7871 78.0277 30.5199L78.0267 30.523ZM52.9625 54.3398C44.9079 53.2347 40.9381 52.31 39.0546 51.7494C38.62 51.6203 38.3588 51.1666 38.4949 50.735C38.7228 50.0171 38.8922 49.2386 39.0042 48.3997C39.0647 47.9419 38.7138 47.5295 38.253 47.4912L37.3767 47.4196C36.9482 47.3843 36.5549 47.6848 36.4974 48.1103C36.1526 50.6725 35.1664 52.4492 33.5612 53.399C30.7167 55.0839 26.5089 54.0171 24.4347 53.3143C24.1091 53.2044 23.8892 52.9029 23.8802 52.5591C23.8408 51.0476 23.8973 49.5421 24.1131 48.0528C24.34 46.4869 24.7161 45.2265 25.2636 44.197C26.3526 42.1521 28.1404 41.0792 30.0391 41.3293C30.0744 41.3343 31.4225 41.5108 31.4225 41.5108C35.3742 42.0291 39.3954 42.1763 43.3743 41.9504C45.1227 41.8506 46.8268 41.3636 48.3736 40.5579C48.909 40.2796 49.5513 40.6345 49.5745 41.2375C49.75 45.7246 51.3391 50.1502 54.3298 54.4558C53.8922 54.4386 53.4395 54.4033 52.9615 54.3378L52.9625 54.3398ZM63.4966 46.9648C62.8654 49.5341 61.5061 52.3332 58.6546 53.6682C58.2361 53.8639 57.7229 53.6884 57.5343 53.2669C55.801 49.3919 55.4249 45.8194 56.4483 42.632C57.504 39.3439 59.8414 37.1054 61.5293 35.847C61.9931 35.5011 62.6546 35.729 62.8089 36.2866C62.8855 36.5649 62.9692 36.8624 63.0579 37.18C64.0653 40.7606 64.2125 44.0518 63.4966 46.9638V46.9648ZM65.3065 32.3178C64.9466 32.2996 64.5896 32.2593 64.2347 32.2301C63.6024 32.1786 62.9743 32.1645 62.3461 32.3793C61.4819 32.6737 60.7358 33.313 59.9977 33.8313C59.1789 34.406 58.4236 35.1048 57.7309 35.8238C56.0853 37.5289 54.7886 39.5707 54.0576 41.8304C53.9688 42.1047 53.8882 42.382 53.8166 42.6603C53.5937 43.5264 52.3091 43.4236 52.2063 42.5352C52.0308 41.0308 52.0369 39.5213 52.2274 38.0108C52.8597 32.9843 55.4188 28.6848 57.9699 25.5267C58.2653 25.1617 58.8068 25.1253 59.1547 25.441C61.5182 27.5897 63.8122 29.8131 66.1404 32.0002C66.5236 32.3601 65.4709 32.3249 65.3086 32.3168L65.3065 32.3178ZM70.5962 28.0193L69.5405 30.2931C69.3026 30.8043 68.634 30.9323 68.2267 30.5411C66.8221 29.192 64.9294 27.381 63.2394 25.7929C62.82 25.3986 62.4076 24.9933 61.976 24.6141C61.5263 24.2189 61.0282 23.877 60.6097 23.4465C60.4504 23.2831 60.1872 22.9534 60.4212 22.7447C60.7257 22.4734 61.0221 22.1931 61.3196 21.9128C61.6917 21.5609 62.0708 21.2171 62.457 20.8823C62.7696 20.611 63.2314 20.6211 63.5399 20.8974L70.4006 27.0603C70.6699 27.3023 70.7495 27.6905 70.5973 28.0183L70.5962 28.0193ZM74.9825 31.9689C74.927 32.0556 74.8544 32.1161 74.7718 32.1575C74.5318 32.2765 74.2363 32.226 73.9782 32.224C73.5577 32.22 73.1383 32.2149 72.7178 32.2149C72.1168 32.2149 71.7185 31.5918 71.9716 31.0463L72.3457 30.2396C72.5786 29.7385 73.23 29.6044 73.6414 29.9744C73.8572 30.168 74.073 30.3616 74.2888 30.5552C74.5267 30.769 75.289 31.1985 75.2255 31.5323C75.1973 31.6785 75.0622 31.8459 74.9835 31.9689H74.9825Z" fill="url(#paint0_linear_1112_665)"/>
              <path d="M46.5493 0.300186C21.102 0.300186 0.398926 21.0033 0.398926 46.4506C0.398926 71.8979 21.102 92.601 46.5493 92.601C71.9966 92.601 92.6998 71.8979 92.6998 46.4506C92.6998 21.0033 71.9966 0.300186 46.5493 0.300186ZM46.5493 90.2032C22.424 90.2032 2.79674 70.576 2.79674 46.4506C2.79674 22.3252 22.4229 2.69901 46.5493 2.69901C70.6757 2.69901 90.3019 22.3262 90.3019 46.4516C90.3019 70.577 70.6747 90.2042 46.5493 90.2042V90.2032Z" fill="url(#paint1_linear_1112_665)"/>
              <defs>
              <linearGradient id="paint0_linear_1112_665" x1="13.2871" y1="71.9196" x2="75.0241" y2="71.9196" gradientUnits="userSpaceOnUse">
              <stop offset="0.239583" stop-color="#D2B15E"/>
              <stop offset="0.421875" stop-color="#CB9636"/>
              <stop offset="0.6875" stop-color="#D2B15E"/>
              <stop offset="1" stop-color="#CEA045"/>
              </linearGradient>
              <linearGradient id="paint1_linear_1112_665" x1="-1.79871" y1="92.601" x2="87.9382" y2="92.601" gradientUnits="userSpaceOnUse">
              <stop offset="0.239583" stop-color="#D2B15E"/>
              <stop offset="0.421875" stop-color="#CB9636"/>
              <stop offset="0.6875" stop-color="#D2B15E"/>
              <stop offset="1" stop-color="#CEA045"/>
              </linearGradient>
              </defs>
            </svg>

            <p className="font-body text-5xl text-white font-body mt-9 mb-6 max-w-[560px] md:w-3/5 sm:w-full text-center">
              A Small Business CPA Firm Serving Atlanta & Beyond
            </p>
            <div className="mb-20 flex justify-center max-w-[736px] md:w-2/3 sm:w-full ">
              <p className="font-body text-base text-white font-body text-center leading-[30px]">
                If you’re looking for a meticulous CPA firm that can simplify your
                books, you’ve come to the right place. At High Echelon, we value
                client communication, accuracy, a streamlined workflow, and
                creating a positive experience for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:mt-80 md:mt-120 mb-20 md:mb-32 md:pt-24">
        <div className="container">
          <div className="gap-y-8 md:gap-x-10 lg:gap-x-16 items-center mt-8">
            <div className="mb-8">
              <h3 className="md:w-2/3 text-primary-700 text-4xl font-light md:text-4xl-x md:font-normal">
                We are Here To Make Your Business Better
              </h3>
              <p className="md:w-2/3 sm:w-full font-display text-xl md:text-base mt-6">
                Get streamlined end-to-end services for everything from entity
                formation to accounting, payroll, and taxes. It’s all here, in a
                single, full-stack solution that simplifies it all.
              </p>
            </div>
            <div className="block w-full md:flex lg:flex md:mb-5 mb-4">
              <AniLink fade to="/" className="block w-full mr-0 md:flex lg:flex md:mr-5 md:w-1/2 lg:mr-5 lg:w-1/2">
                <GatsbyImage
                  image={
                    data.smallBusinessConsultingImage.childImageSharp
                      .gatsbyImageData
                  }
                  alt="Small Business Consulting"
                  className="p-2 rounded-[8px] mb-3"
                />
                <div className="py-2 pl-3 mb-6 md:mb-0">
                  <div className="flex justify-center flex-col mb-4">
                    <h3 className="text-lg mb-4 text-primary-700">
                      Small Business Consulting
                    </h3>
                    <p className="text-base mb-4">
                      Need advice or help in navigating the best way to form your
                      business? Talk with the experts.
                    </p>
                  </div>
                  <ButtonGhost
                      href="/"
                      text="Learn More"
                      className="lg:hidden md:hidden w-[100px] h-[40px]"
                  />
                </div>
              </AniLink>
              <AniLink fade to="/" className="block w-full mr-0 md:flex lg:flex md:mr-5 md:w-1/2 lg:mr-5 lg:w-1/2">
                <GatsbyImage
                  image={
                    data.accountServicesImage.childImageSharp.gatsbyImageData
                  }
                  alt="Accounting Services"
                  className="p-2 rounded-[8px] mb-3"
                />
                <div className="py-2 pl-3 mb-6 md:mb-0">
                  <div className="flex justify-center flex-col mb-4">
                    <h3 className="text-lg mb-4 text-primary-700">
                      Accounting Services
                    </h3>
                    <p className="text-base mb-4">
                      Receive accurate, secure delivery of monthly, quarterly, and
                      annual financial statements.
                    </p>
                  </div>
                  <ButtonGhost
                      href="/"
                      text="Learn More"
                      className="lg:hidden md:hidden w-[100px] h-[40px]"
                  />
                </div>
              </AniLink>
            </div>
            <div className="block w-full md:flex lg:flex md:mb-5 mb-4">
              <AniLink fade to="/" className="block w-full mr-0 md:flex lg:flex md:mr-5 md:w-1/2 lg:mr-5 lg:w-1/2">
                <GatsbyImage
                  image={
                    data.payrollManagementImage.childImageSharp.gatsbyImageData
                  }
                  alt="Small Business Consulting"
                  className="p-2 rounded-[8px] mb-3"
                />
                <div className="py-2 pl-3 mb-6 md:mb-0">
                  <div className="flex justify-center flex-col mb-4">
                    <h3 className="text-lg mb-4 text-primary-700">
                      Payroll Management
                    </h3>
                    <p className="text-base">
                      Get lightweight, user-friendly, cost-efficient payroll
                      processing, and hiring/termination automation.
                    </p>
                  </div>
                  <ButtonGhost
                      href="/"
                      text="Learn More"
                      className="lg:hidden md:hidden w-[100px] h-[40px]"
                  />
                </div>
              </AniLink>
              <AniLink fade to="/" className="block w-full mr-0 md:flex lg:flex md:mr-5 md:w-1/2 lg:mr-5 lg:w-1/2">
                <GatsbyImage
                  image={
                    data.incomeTaxPreparationImage.childImageSharp
                      .gatsbyImageData
                  }
                  alt="Small Business Consulting"
                  className="p-2 rounded-[8px] mb-3"
                />
                <div className="py-2 pl-3 mb-6 md:mb-0">
                  <div className="flex justify-center flex-col mb-4">
                    <h3 className="text-lg mb-4 text-primary-700">
                      Income Tax Preparation
                    </h3>
                    <p className="text-base">
                      Get propt tax preparation for yourself or your business,
                      including help with complicated returns.
                    </p>
                  </div>
                  <ButtonGhost
                      href="/"
                      text="Learn More"
                      className="lg:hidden md:hidden w-[100px] h-[40px]"
                  />
                </div>
              </AniLink>
            </div>
          </div>
        </div>
      </section>
      {/* <Testimonials /> */}
      {/* <Carousel /> */}
      <ValueProps />
      <section className="mb-20 md:mb-32 2xl:container 2xl:mx-auto 2xl:px-0 py-3 md:px-10 sm:px-2">
        <p className="text-4xl-x font-light mb-0 text-center">Our Clients Say Its Best</p>
        <CarouselForm />
      </section>
      <About />
      {/* <RecentBlogPosts /> */}
      <svg className="w-full" width="1200" height="3" viewBox="0 0 1200 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5h1200" stroke="url(#paint0_linear_1129_1425)" stroke-width="3"/><defs><linearGradient id="paint0_linear_1129_1425" x1="0" y1="2.00435" x2="1182.95" y2="1.96651" gradientUnits="userSpaceOnUse"><stop stop-color="#A2A09D" stop-opacity="0"/><stop offset=".145833" stop-color="#CB9636"/><stop offset=".265625" stop-color="#CFA855"/><stop offset=".427083" stop-color="#FCE4A7"/><stop offset=".578125" stop-color="#F0D592"/><stop offset=".713542" stop-color="#CFA855"/><stop offset=".828125" stop-color="#CB9636"/><stop offset="1" stop-color="#A7A7A7" stop-opacity="0"/></linearGradient></defs></svg>
      <CallToAction />
      <svg className="w-full" width="1200" height="3" viewBox="0 0 1200 3" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5h1200" stroke="url(#paint0_linear_1129_1425)" stroke-width="3"/><defs><linearGradient id="paint0_linear_1129_1425" x1="0" y1="2.00435" x2="1182.95" y2="1.96651" gradientUnits="userSpaceOnUse"><stop stop-color="#A2A09D" stop-opacity="0"/><stop offset=".145833" stop-color="#CB9636"/><stop offset=".265625" stop-color="#CFA855"/><stop offset=".427083" stop-color="#FCE4A7"/><stop offset=".578125" stop-color="#F0D592"/><stop offset=".713542" stop-color="#CFA855"/><stop offset=".828125" stop-color="#CB9636"/><stop offset="1" stop-color="#A7A7A7" stop-opacity="0"/></linearGradient></defs></svg>
    </Layout>
  );
};

export const query = graphql`
  {
    openGraphImage: file(
      relativePath: { eq: "open-graph/facebook/Homepage.jpg" }
    ) {
      publicURL
    }
    twitterOpenGraphImage: file(
      relativePath: { eq: "open-graph/twitter/Homepage.jpg" }
    ) {
      publicURL
    }
    smallBusinessConsultingImage: file(
      relativePath: { eq: "1.0 Homepage/3.0 Small Business desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
    accountServicesImage: file(
      relativePath: { eq: "1.0 Homepage/3.1 Accounting Services desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
    payrollManagementImage: file(
      relativePath: { eq: "1.0 Homepage/3.2 Payroll Management desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }
    incomeTaxPreparationImage: file(
      relativePath: { eq: "1.0 Homepage/3.3 Income Tax Prep desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 300)
      }
    }

    smallBusinessConsultingMobileImage: file(
      relativePath: { eq: "1.0 Homepage/3.0 Small Business desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    accountServicesMobileImage: file(
      relativePath: { eq: "1.0 Homepage/3.1 Accounting Services desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    payrollManagementMobileImage: file(
      relativePath: { eq: "1.0 Homepage/3.2 Payroll Management desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    incomeTaxPreparationMobileImage: file(
      relativePath: { eq: "1.0 Homepage/3.3 Income Tax Prep desktop.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }


    heroDesktop: file(relativePath: { eq: "home/1.0 Hero desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
      }
    }
    heroMobile: file(relativePath: { eq: "home/1.0 Hero mobile.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 390)
      }
    }
    intro: file(relativePath: { eq: "home/2.0 intro.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 668)
      }
    }
    realEstateAgents: file(relativePath: { eq: "home/3.0 Client 1.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 373)
      }
    }
    homeBuyersOwners: file(relativePath: { eq: "home/3.1 Clietn 2.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 373)
      }
    }
    veterans: file(relativePath: { eq: "home/3.2 Cient 3.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 373)
      }
    }
    purchase: file(relativePath: { eq: "home/5.0 Purchase.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    refinance: file(relativePath: { eq: "home/4.0 Refinance.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 560)
      }
    }
    conventional: file(relativePath: { eq: "home/6.0 Conventional.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    FHA: file(relativePath: { eq: "home/6.1 FHA.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    VA: file(relativePath: { eq: "home/7.0 VA.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
    jumbo: file(relativePath: { eq: "home/7.1 Jumbo.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 400)
      }
    }
  }
`;
export default Page;
