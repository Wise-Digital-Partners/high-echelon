import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { GatsbyImage } from "gatsby-plugin-image";

import ModalContact from "../Modal/ModalContact";
import nestLogo from "../../images/global/Nest Logo.svg";

const Footer = ({ hideFooter }) => {
  const getYear = () => {
    return new Date().getFullYear();
  };

// const currentWidth=0;

  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);

  const citiesClickHandler = () => {
    setCityDropdownOpen(!cityDropdownOpen);
  };

  // const isBrowser = typeof window !== "undefined"
  // if (isBrowser) {
  //   currentWidth = window.innerWidth;
  // }

  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "global/Logo White.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 119)
        }
      }
      equalHousingOpportunity: file(
        relativePath: { eq: "global/Equal-Housing-Logo.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED, width: 52)
        }
      }
    }
  `);

  const navigation = {
    homeLoans: [
      {
        name: "Jumbo Loans",
        href: "/jumbo-loans-chicago/",
      },
      {
        name: "Conventional Loans",
        href: "/conventional-loans-chicago/",
      },
      {
        name: "FHA Loans",
        href: "/fha-loans-chicago/",
      },
      {
        name: "VA Loans",
        href: "/va-loans-chicago/",
      },
    ],
    company: [
      {
        name: "About",
        href: "/about/",
      },
      {
        name: "Meet the Team",
        href: "/team/",
      },
      {
        name: "Reviews",
        href: "/reviews/",
      },
      {
        name: "Blog",
        href: "/blog/",
      },
    ],
    apply: [
      {
        name: "Request Rates",
        href: "/request-rates/",
      },
    ],
    cities: [
      {
        name: "Chicago",
        href: "/chicago-mortgage-broker/",
      },
      {
        name: "De Plaines",
        href: "/de-plaines-mortgage-lender/",
      },
      {
        name: "Morton Grove",
        href: "/morton-grove-mortgage-lender/",
      },
      {
        name: "Niles",
        href: "/niles-mortgage-lender/",
      },
      {
        name: "Northbrook",
        href: "/northbrook-mortgage-lender/",
      },
      {
        name: "Park Ridge",
        href: "/park-ridge-mortgage-lender/",
      },
    ],
  };

  return (
    <>
      <footer
        className={`bg-primary-700 pb-12 lg:pb-6 ${
          hideFooter && "hidden"
        }`}
      >
          {/* <div className="text-center">
            <svg width="1094" height="2" viewBox="0 0 1712 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-center">
              <line y1="1.5" x2="1094" y2="1.5" stroke="url(#paint0_linear_1569_821)" stroke-width="3"/>
              <defs>
              <linearGradient id="paint0_linear_1569_821" x1="0" y1="3.50435" x2="1094" y2="3.4388" gradientUnits="userSpaceOnUse">
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
          </div> */}
        <div className="container pt-20">
          <div className="grid lg:grid-cols-12 lg:justify-between space-y-16 lg:space-y-0 lg:space-x-8 mb-20 md:mb-16">
            <div className="lg:col-start-1 lg:col-span-3">
              <div className="grid grid-cols-2 md:flex md:flex-col items-end md:items-start">
                <AniLink fade to="/">
                <svg 
                  width="253" 
                  height="52" 
                  viewBox="0 0 253 52" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M61.2835 37.2062c.1588-.1549.3447-.2752.5606-.3599.2149-.0846.4531-.127.7126-.127.2594 0 .5015.0481.7232.1444.2227.0962.4231.2415.6032.434l.5964-.5572c-.2314-.2724-.5161-.4783-.8511-.6169-.3359-.1385-.7067-.2078-1.1134-.2078-.3834 0-.7358.0625-1.0572.1867-.3214.1251-.6032.3012-.8443.5292-.241.2281-.4279.4966-.5605.8074-.1327.3109-.1985.6486-.1985 1.0153 0 .3666.0658.7054.1985 1.0152.1326.3109.3175.5793.5567.8074.2391.2281.5199.4042.8442.5293.3244.1241.6748.1867 1.0534.1867.4115 0 .7852-.0703 1.1211-.2117.336-.1415.6197-.3455.8511-.614l-.5964-.5639c-.1801.1973-.3805.3445-.6032.4407-.2227.0963-.4638.1444-.7232.1444-.2595 0-.4977-.0424-.7126-.127-.2159-.0847-.4018-.2041-.5606-.36-.1588-.1549-.2817-.3387-.3689-.5494-.0871-.2118-.1316-.4446-.1316-.6977s.0435-.487.1316-.6977c.0872-.2117.2101-.3955.3689-.5505zM68.4161 38.7932h2.3982v-.7545h-2.3982V36.755h2.7031v-.7689h-3.6248v4.9357h3.7236v-.7679h-2.8019v-1.3607zM77.5499 39.2763c.3147-.1386.5567-.3388.7271-.5996.1704-.2608.2556-.5725.2556-.9344 0-.3618-.0852-.6746-.2556-.9382-.1704-.2637-.4124-.4658-.7271-.6063-.3147-.1415-.6923-.2117-1.1318-.2117h-2.0429v4.9357h.9227v-1.4386h1.1212c.0668 0 .1229-.0126.1868-.0154l1.0195 1.454h.9934l-1.1444-1.6234c.0242-.0096.0532-.0125.0765-.0231l-.001.001zm-.2556-2.2596c.2052.1694.3088.4109.3088.7266 0 .3156-.1026.5524-.3088.7265-.2053.1742-.5122.2608-.9188.2608h-1.0786v-1.967h1.0786c.4066 0 .7135.0847.9188.2541v-.001zM80.9802 36.7617h1.645v4.1601h.9226v-4.1601h1.6459v-.7756h-4.2135v.7756zM88.9395 35.9861h-.9227v4.9357h.9227v-4.9357zM92.4075 40.9218h.9226v-1.889h2.3972v-.7756h-2.3972V36.755h2.7022v-.7689h-3.6248v4.9357zM99.9776 35.9861h-.9227v4.9357h.9227v-4.9357zM104.368 38.7932h2.397v-.7545h-2.397V36.755h2.702v-.7689h-3.624v4.9357h3.724v-.7679h-2.802v-1.3607zM113.916 36.2969c-.406-.2069-.88-.3108-1.418-.3108h-2.171v4.9357h2.171c.539 0 1.012-.1029 1.418-.3108.407-.2069.724-.4946.951-.8632.227-.3695.341-.8007.341-1.2943 0-.4937-.113-.9306-.341-1.2972-.227-.3667-.544-.6534-.951-.8603v.0009zm.139 3.0458c-.149.254-.359.4513-.631.5918-.272.1415-.595.2117-.969.2117h-1.206v-3.3845h1.206c.374 0 .697.0703.969.2117.272.1415.482.3368.631.589.149.2511.224.5485.224.892 0 .3436-.075.6342-.224.8883zM125.575 36.1978c-.314-.1415-.692-.2117-1.132-.2117h-2.042v4.9357h.922v-1.4242h1.121c.44 0 .818-.0703 1.132-.2117.315-.1405.557-.3426.727-.6063.171-.2637.256-.5764.256-.9382 0-.3619-.085-.6746-.256-.9383-.17-.2637-.412-.4658-.727-.6063l-.001.001zm-.255 2.2663c-.206.1722-.512.2579-.919.2579h-1.079v-1.9603h1.079c.407 0 .713.0847.919.2541.205.1693.309.4109.309.7265 0 .3157-.103.5514-.309.7227v-.0009zM133.006 38.7364c0 .5071-.108.8767-.326 1.1067-.218.23-.528.3454-.93.3454-.401 0-.713-.1154-.933-.3454-.22-.23-.33-.5996-.33-1.1067v-2.7503h-.923v2.7849c0 .7189.193 1.2693.578 1.6504.386.3811.919.5716 1.6.5716.68 0 1.207-.1905 1.592-.5716.386-.3811.578-.9305.578-1.6504v-2.7849h-.908v2.7503h.002zM141.022 38.4227c-.061-.027-.127-.0414-.191-.0606.196-.1001.355-.2387.474-.4187.123-.1857.184-.4099.184-.6736 0-.3897-.156-.7015-.468-.9344-.312-.2329-.766-.3493-1.363-.3493h-2.326v4.9357h2.469c.643 0 1.128-.1174 1.454-.3522.326-.2348.49-.5639.49-.9873 0-.2868-.065-.5264-.196-.7189-.13-.1924-.306-.3397-.528-.4407h.001zm-1.461-1.7168c.321 0 .568.0568.741.1694.172.1126.259.2848.259.5148 0 .23-.087.3955-.259.5081-.173.1126-.42.1694-.741.1694h-1.306v-1.3607h1.306v-.001zm.978 3.3287c-.184.1126-.449.1693-.794.1693h-1.49v-1.4242h1.49c.345 0 .61.0577.794.1732.184.1155.277.2955.277.5389 0 .2435-.092.4302-.277.5428zM145.782 35.9861h-.923v4.9357h3.52v-.7756h-2.597v-4.1601zM152.159 35.9861h-.922v4.9357h.922v-4.9357zM156.703 37.2062c.159-.1549.345-.2752.561-.3599.215-.0846.453-.127.712-.127.26 0 .502.0481.724.1444.222.0962.423.2415.603.434l.596-.5572c-.231-.2724-.516-.4783-.851-.6169-.336-.1385-.707-.2078-1.113-.2078-.384 0-.736.0625-1.058.1867-.321.1251-.603.3012-.844.5292-.241.2281-.428.4966-.56.8074-.133.3109-.199.6486-.199 1.0153 0 .3666.066.7054.199 1.0152.132.3109.317.5793.556.8074.239.2281.52.4042.845.5293.324.1241.674.1867 1.053.1867.411 0 .785-.0703 1.121-.2117.336-.1415.62-.3455.851-.614l-.596-.5639c-.18.1973-.381.3445-.603.4407-.223.0963-.464.1444-.724.1444-.259 0-.497-.0424-.712-.127-.216-.0847-.402-.2041-.561-.36-.159-.1549-.282-.3387-.369-.5494-.087-.2118-.131-.4446-.131-.6977s.043-.487.131-.6977c.087-.2117.21-.3955.369-.5505zM168.531 35.9861l-2.234 4.9357h.951l.491-1.1422h2.484l.494 1.1422h.965l-2.241-4.9357h-.91zm-.482 3.0746l.93-2.1595.933 2.1595h-1.863zM175.445 37.2062c.159-.1549.345-.2752.561-.3599.215-.0846.453-.127.712-.127.26 0 .502.0481.724.1444.222.0962.423.2415.603.434l.596-.5572c-.231-.2724-.516-.4783-.851-.6169-.336-.1385-.707-.2078-1.113-.2078-.384 0-.736.0625-1.058.1867-.321.1251-.603.3012-.844.5292-.241.2281-.428.4966-.56.8074-.133.3109-.199.6486-.199 1.0153 0 .3666.066.7054.199 1.0152.132.3109.317.5793.556.8074.239.2281.52.4042.845.5293.324.1241.674.1867 1.053.1867.411 0 .785-.0703 1.121-.2117.336-.1415.62-.3455.851-.614l-.596-.5639c-.18.1973-.381.3445-.603.4407-.223.0963-.464.1444-.724.1444-.259 0-.497-.0424-.712-.127-.216-.0847-.402-.2041-.561-.36-.159-.1549-.282-.3387-.369-.5494-.087-.2118-.131-.4446-.131-.6977s.043-.487.131-.6977c.087-.2117.21-.3955.369-.5505zM182.624 37.2062c.159-.1549.345-.2752.561-.3599.215-.0846.453-.127.712-.127.26 0 .502.0481.723.1444.223.0962.424.2415.604.434l.596-.5572c-.231-.2724-.516-.4783-.851-.6169-.336-.1385-.707-.2078-1.113-.2078-.384 0-.736.0625-1.058.1867-.321.1251-.603.3012-.844.5292-.241.2281-.428.4966-.56.8074-.133.3109-.199.6486-.199 1.0153 0 .3666.066.7054.199 1.0152.132.3109.317.5793.556.8074.239.2281.52.4042.844.5293.325.1241.675.1867 1.054.1867.411 0 .785-.0703 1.121-.2117.336-.1415.62-.3455.851-.614l-.596-.5639c-.18.1973-.381.3445-.604.4407-.222.0963-.463.1444-.723.1444-.259 0-.497-.0424-.712-.127-.216-.0847-.402-.2041-.561-.36-.159-.1549-.282-.3387-.369-.5494-.087-.2118-.131-.4446-.131-.6977s.043-.487.131-.6977c.087-.2117.21-.3955.369-.5505zM192.963 36.6385c-.241-.2281-.524-.4052-.848-.5322-.324-.127-.68-.1905-1.068-.1905s-.738.0635-1.064.1905c-.326.127-.61.3041-.851.5322-.241.228-.428.4956-.56.8035-.133.308-.199.6448-.199 1.0114 0 .3667.066.7035.199 1.0114.132.308.319.5755.56.8036.241.228.525.4051.851.5321.326.127.684.1906 1.071.1906.387 0 .737-.0636 1.06-.1906.323-.127.607-.3031.848-.5293.241-.2251.428-.4936.561-.8035.132-.3099.198-.6486.198-1.0153 0-.3666-.066-.7044-.198-1.0113-.133-.308-.32-.5765-.561-.8036l.001.001zm-.301 2.5097c-.087.2088-.209.3926-.365.5505-.156.1578-.341.2781-.554.3628-.213.0846-.444.127-.695.127-.251 0-.482-.0424-.695-.127-.213-.0847-.397-.206-.554-.3628-.156-.1579-.278-.3417-.365-.5534-.087-.2117-.132-.4417-.132-.6909 0-.2493.044-.486.132-.6948.087-.2088.21-.3926.369-.5495.159-.1578.343-.2791.554-.3628.21-.0847.44-.127.691-.127.251 0 .482.0423.695.127.213.0847.397.205.554.3628.156.1578.278.3407.365.5495.087.2088.132.4407.132.6948 0 .254-.044.485-.132.6948v-.001zM200.228 38.7364c0 .5071-.109.8767-.327 1.1067-.218.23-.527.3454-.929.3454s-.714-.1154-.934-.3454c-.219-.23-.33-.5996-.33-1.1067v-2.7503h-.922v2.7849c0 .7189.192 1.2693.578 1.6504.385.3811.918.5716 1.599.5716.681 0 1.207-.1905 1.593-.5716.385-.3811.578-.9305.578-1.6504v-2.7849h-.908v2.7503h.002zM208.052 39.3282l-2.739-3.3421h-.759v4.9357h.915v-3.3412l2.739 3.3412h.759v-4.9357h-.915v3.3421zM211.791 36.7617h1.645v4.1601h.922v-4.1601h1.646v-.7756h-4.213v.7756zM220.111 35.9861l-2.235 4.9357h.951l.492-1.1422h2.483l.494 1.1422h.965l-2.241-4.9357h-.909zm-.482 3.0746l.929-2.1595.934 2.1595h-1.863zM229.518 39.3282l-2.738-3.3421h-.759v4.9357h.915v-3.3412l2.738 3.3412h.759v-4.9357h-.915v3.3421zM233.257 36.7617h1.646v4.1601h.921v-4.1601h1.646v-.7756h-4.213v.7756zM243.631 38.8845c-.107-.1693-.246-.3031-.418-.4022-.174-.0991-.364-.179-.576-.2396-.21-.0616-.422-.1165-.635-.1656-.213-.049-.405-.1-.578-.152-.173-.052-.312-.1232-.419-.2156-.106-.0914-.16-.2126-.16-.3628 0-.127.037-.2396.111-.3387.072-.0991.189-.179.347-.2396.159-.0606.365-.0914.621-.0914.218 0 .444.0317.681.0952.236.0636.465.1607.688.2926l.291-.7121c-.217-.1415-.472-.2493-.765-.3243-.294-.0751-.589-.1126-.887-.1126-.454 0-.829.0673-1.124.2011-.296.1338-.516.3128-.66.536-.144.2233-.217.4687-.217.7371 0 .2685.055.4793.164.6487.109.1693.25.304.422.4051.174.101.364.1828.575.2463.21.0636.421.1184.632.1656.21.0471.401.0972.575.152.172.0539.313.127.422.2185.109.0914.163.2126.163.3628 0 .1222-.037.2319-.113.3281-.075.0962-.194.1732-.354.229-.161.0568-.372.0847-.631.0847-.307 0-.608-.0519-.902-.1549-.293-.1039-.539-.2329-.738-.3878l-.319.7121c.208.1742.49.3166.844.4263.355.1107.726.1655 1.114.1655.454 0 .829-.0673 1.127-.2011.298-.1338.519-.3128.664-.536.144-.2233.217-.4667.217-.7295 0-.2627-.054-.4725-.16-.6418l-.002.0009zM52.1315 15.8109L41.2414 6.08762c-.2256-.20112-.8055-.36375-1.0079-.13953l-.0116.04426c-.0939.0895-.1597.22037-.1927.33297-.0774.26656-.1074.56103-.1006.83722.0067.26367.0532.52639.1403.77563.0407.11644.093.23095.1472.34162.0281.05774.0571.11452.0881.17033-2.0428 1.80818-5.7713 5.72488-6.8537 10.99168-.0213.1029-.0697.2001-.1443.2752-1.1627 1.1798-2.7341 1.9054-4.3742 1.9987-2.5482.1463-5.1226.051-7.6544-.28l-.9149-.1193c-.5345-.0684-1.0592-.0289-1.5646.0895-.09.0211-.183.0192-.2711-.0058-.8597-.2444-3.3044-.7362-5.3927.7939-1.2393.9075-2.0177 2.2865-2.4718 3.7251-.2885.9133-.457 1.8621-.5509 2.8139-.0532.5408-.0987 1.0922-.0929 1.6369.0039.3714-.04456.741-.04359 1.1124 0 .2675.03679.5341.04359.8016.0058.2464-.05424.5207.0406.7555.1714.4272 1.1328-.5515 1.2325-.7035.4086-.6197.4773-1.3829.4977-2.1036.0193-.716.061-1.4166.1607-2.1258.1617-1.1548.4579-2.3269 1.0727-3.3306.2876-.4706.6506-.8988 1.097-1.2289.2488-.1838.5083-.3262.7697-.434.4879-.2021.9594.3166.6932.7708-.0387.0664-.0765.1348-.1143.2031-.4579.8555-.7677 1.8688-.9459 3.1006-.5247 3.6077.1482 7.1991.7988 10.6741.2924 1.5628.3311 1.5993.4899 3.1092.0077.1011.0097.2002-.0233.2983-.0406.1184-.1113.2271-.1733.3359l-.0668.1174c-.0484.0577-.0968.1174-.1384.1992-.0407.0799-.0416.1973.0368.2406.03.0163.0658.0183.0997.0202.0165 0 1.094.0491 1.3322.0337.0591-.0039.6477-.002.7629-.1146.0659-.0644.061-.1693.0504-.2607-.0174-.155-.0339-.3099-.0513-.4639-.0417-.3753-.1491-.7314-.1908-1.1038-.0368-.331-.0745-.6621-.1142-.9931-.1055-.8757-.1985-.8574-.3611-1.7245-.2556-1.3655-.5141-2.7503-.6971-4.1379-.0504-.3792.304-.69.6767-.5948.8636.2214 1.916.409 3.0023.409h.0204s4.3326 7.815 4.3597 8.07c.0261.2426-.1123.5149-.0194.7343.1026.2425 2.3391.1597 2.4418.0058.1258-.1906-.0601-.4254-.154-.5851-.1481-.2531-4.5398-7.8487-4.5398-7.8487-.1481-.2935-.0019-.6467.3098-.7545.3312-.1154.6545-.2608.9644-.4417.4414-.2588.8287-.5803 1.1676-.9527.15-.1655.3756-.2367.5886-.1636 1.523.5226 4.7025 1.2193 10.0971 1.9555.4948.0673.974.101 1.4378.101.1394 0 .2778-.0038.4134-.0115.275-.0145.5141.1876.5577.458l1.1763 6.5669.06.3772s.063.664.0872.7882c.0251.1318.0222.255-.0126.3849-.0262.0972-.0852.2493-.0329.3464.0435.0809.1878.0992.272.0828.4947-.0019.9905-.0038 1.4852-.0019.0958 0 .5064.0048.5896-.025.1491-.0549.1336-.2339.0813-.3676-.1036-.2628-.3078-.46-.4637-.6891 0 0-.0513-.0827-.1356-.2175-.0038-.0096-.0067-.0192-.0106-.0288-.0755-.1954-.1462-.3926-.2111-.5928l-1.248-7.0153c-.0416-.257.1095-.4985.3525-.5957.7648-.307 1.4522-.7439 2.0544-1.3011l-.0058.0472 3.1234.3676c.3785.0443.5973.4504.424.7881l-2.0215 3.9532-.2217.4341c-.0301.0317-.061.0625-.0911.0933-.0997.102-.1965.2069-.2962.3079-.0852.0857-.1598.1531-.2711.1761-.0474.0097-.0755.0405-.0949.0761-.0039.0057-.0068.0144-.0097.0221-.0058.0164-.0096.0308-.0106.0472 0 .0067-.0039.0105-.0039.0182.001.2406.6613 1.381.9353 1.66.3534.3609.5131-.0567.6719-.3589.1065-.2021.213-.4051.3185-.6072.1307-.2493.3892-.7506.3873-.7526l3.2986-6.4494c.1723-.3378-.0455-.7439-.4241-.7882l-3.6694-.4311c-.3795-.0443-.5935-.4475-.4211-.7862.3369-.6631.6109-1.4031.8132-2.2211.547-2.2133.4434-4.6816-.3069-7.3357-.0503-.1771-.0949-.3368-.1336-.4831-.0939-.3465.1685-.6852.5296-.6852h6.4403c.1888 0 .365-.0972.4647-.256l1.158-1.8409c.1413-.2242.0997-.5177-.0988-.6938l.002-.001zM35.4207 31.593c-5.3695-.7323-8.0165-1.3453-9.2722-1.7168-.2895-.0856-.4638-.3859-.3727-.6727.152-.4753.2652-.9911.3388-1.5474.0407-.3041-.1936-.5764-.5005-.6014l-.5838-.0481c-.2857-.0231-.548.1751-.5858.458-.2294 1.6976-.8868 2.8754-1.9576 3.5048-1.8967 1.1163-4.7015.409-6.0841-.0558-.2168-.0731-.364-.2723-.3698-.5004-.0261-1.0018.0116-1.9988.1549-2.9861.151-1.0374.4018-1.8727.7668-2.555.7261-1.3549 1.918-2.0661 3.1834-1.9005.0232.0028.9226.1202.9226.1202 2.6344.3436 5.3153.4408 7.9681.2916 1.1657-.0664 2.3014-.3888 3.3335-.9228.3572-.1848.7851.051.8006.4503.1172 2.9736 1.1764 5.9058 3.1698 8.7591-.2914-.0116-.5934-.0347-.912-.078v.001zm7.0232-4.8867c-.4202 1.7024-1.3274 3.5577-3.2279 4.4421-.2789.1299-.6206.0135-.7465-.2666-1.155-2.5674-1.4067-4.9347-.7242-7.047.7039-2.1787 2.2626-3.6626 3.3877-4.496.3088-.229.7503-.078.8529.2916.0513.1847.1075.382.1666.5918.6719 2.3721.7697 4.5537.2923 6.4832l-.0009.0009zm1.2073-9.706c-.2401-.0125-.4773-.0384-.7145-.0577-.4221-.0337-.8404-.0433-1.2596.0982-.5761.1944-1.0737.6187-1.5656.9623-.546.3811-1.0495.8439-1.5113 1.3203-1.0969 1.1298-1.9615 2.4828-2.4485 3.9802-.0591.1818-.1123.3656-.1607.5494-.1481.5736-1.005.5062-1.0737-.0827-.1172-.997-.1123-1.9968.0135-2.9986.4212-3.3306 2.1281-6.18 3.8282-8.2731.1965-.2425.5577-.2666.79-.0568 1.5753 1.4233 3.105 2.8976 4.657 4.3468.2556.2387-.4464.2156-.5548.2098v.0019zm3.5261-2.8484l-.7039 1.506c-.1587.3387-.6051.4234-.8762.1646-.9362-.894-2.1987-2.094-3.3247-3.1459-.2788-.2608-.5548-.5302-.8423-.7814-.3001-.2617-.6322-.4879-.9111-.7737-.1055-.1087-.2817-.3272-.1258-.4648.2033-.1799.4008-.3657.5983-.5514.2479-.23287.5006-.46094.7581-.68227.2082-.17899.517-.17322.7213.01058l4.5737 4.08409c.1791.1598.2323.4177.1307.6351l.0019-.0009zm2.9239 2.6175c-.0368.0577-.0852.0972-.1404.1251-.1597.0789-.3573.0452-.5296.0443-.2798-.0029-.5606-.0058-.8404-.0058-.4008 0-.6661-.4128-.4976-.7747l.2498-.5341c.1549-.332.5896-.4205.8636-.1761.1433.128.2875.257.4308.385.1588.1414.6671.4263.6245.6476-.0194.0972-.1094.2079-.1617.2897l.001-.001zM72.3683 15.0285c0-.1405.0465-.2608.1404-.3618.0939-.101.2188-.1521.3757-.1521h1.185c.1404 0 .2701.0462.3873.1396.1171.0933.1762.2175.1762.3734v16.293c0 .3426-.1878.5129-.5635.5129h-1.185c-.3447 0-.5161-.1712-.5161-.5129v-7.4878h-9.8918v7.4878c0 .3426-.1878.5129-.5635.5129h-1.185c-.3447 0-.5161-.1712-.5161-.5129V15.0285c0-.1405.0465-.2608.1404-.3618.0939-.101.2188-.1521.3757-.1521h1.2082c.1404 0 .2663.0511.3757.1521s.1646.2213.1646.3618v6.5429h9.8918v-6.5429zM78.5986 15.0285c0-.1405.0446-.2608.1346-.3618.0901-.101.2169-.1521.3815-.1521h1.2199c.1404 0 .2662.0462.3756.1396.1094.0933.1646.2175.1646.3734v16.293c0 .3426-.1801.5129-.5402.5129h-1.2199c-.3447 0-.5161-.1712-.5161-.5129V15.0285zM96.6338 24.697c0-.3417.1723-.5129.516-.5129h1.2083c.1404 0 .2662.0452.3756.1337.1094.0895.1646.2156.1646.3792v5.2138c0 .0934-.0193.1809-.059.2627-.0388.0818-.1056.1502-.1995.2041l-.0939.0702c-.7358.5293-1.5452.9354-2.4291 1.2193-.884.2839-1.8386.4253-2.8629.4253-.8298 0-1.6256-.1049-2.3876-.3147-.7629-.2098-1.4745-.509-2.1358-.8978-.6612-.3888-1.2634-.8536-1.8066-1.3935-.5441-.5408-1.0088-1.1393-1.3961-1.7966s-.6864-1.3646-.8975-2.1229c-.211-.7583-.3166-1.5493-.3166-2.3731 0-.8237.1056-1.6013.3166-2.3557.2111-.7545.5122-1.4618.9033-2.1229.3912-.6611.8588-1.2635 1.4019-1.8082.5432-.5447 1.1464-1.0105 1.8067-1.3992.6612-.3888 1.3728-.69 2.1358-.9037.7629-.2136 1.5587-.3204 2.3875-.3204.9623 0 1.8889.1453 2.7806.4369.8917.2916 1.7253.7092 2.4989 1.2539.0861.0625.1568.1338.211.2156.0542.0817.0823.1655.0823.2511 0 .1088-.031.2021-.0939.2801l-.6216 1.0267c-.1336.1867-.2701.2801-.4105.2801-.0552 0-.1152-.0135-.182-.0404-.0668-.027-.1433-.0722-.2285-.1338-.5635-.3965-1.1754-.7092-1.8366-.9392-.6613-.2291-1.3671-.3445-2.1184-.3445-.9701 0-1.8676.1828-2.6925.5485-.8258.3657-1.5413.8555-2.1474 1.4695-.6061.6139-1.0815 1.3222-1.4261 2.1228-.3447.8007-.5161 1.6369-.5161 2.5078 0 .9258.1762 1.79.5277 2.5954.3524.8045.8288 1.5041 1.4319 2.0998.6022.5947 1.3042 1.0634 2.1058 1.405.8017.3426 1.6566.5129 2.5637.5129.5713 0 1.1396-.0914 1.7069-.2742.5674-.1829 1.1444-.3984 1.7311-.6477v-4.2101l.002-.0029zM114.587 15.0285c0-.1405.046-.2608.14-.3618.094-.101.219-.1521.376-.1521h1.185c.14 0 .27.0462.387.1396.117.0933.176.2175.176.3734v16.293c0 .3426-.188.5129-.563.5129h-1.185c-.345 0-.516-.1712-.516-.5129v-7.4878h-9.892v7.4878c0 .3426-.188.5129-.564.5129h-1.185c-.344 0-.516-.1712-.516-.5129V15.0285c0-.1405.047-.2608.141-.3618.093-.101.218-.1521.375-.1521h1.209c.14 0 .266.0511.375.1521.11.101.165.2213.165.3618v6.5429h9.892v-6.5429zM140.178 14.5156c.361 0 .541.1867.541.5601v1.1548c0 .1482-.046.2762-.135.3849-.09.1087-.233.1636-.428.1636h-9.458v4.7933h7.44c.14 0 .262.0404.364.1222.101.0818.153.2194.153.4138v1.1895c0 .1395-.044.2646-.129.3733-.086.1088-.215.1636-.387.1636h-7.44v5.7384h9.505c.36 0 .539.1828.539.5485v1.201c0 .3425-.172.5129-.516.5129h-11.288c-.345 0-.516-.1636-.516-.4899v-16.294c0-.358.172-.537.516-.537h11.241l-.002.001zM157.274 15.9736c.087.0625.157.1337.212.2155.054.0818.082.1655.082.2512 0 .1087-.031.2021-.094.28l-.622 1.0268c-.133.1867-.27.2801-.41.2801-.055 0-.115-.0135-.182-.0405-.067-.0269-.143-.0721-.229-.1337-.563-.3965-1.156-.6996-1.777-.9094-.622-.2098-1.277-.3339-1.966-.3734-1.008 0-1.94.1809-2.793.5418-.853.3618-1.59.8478-2.212 1.4579-.622.6101-1.109 1.3184-1.461 2.1229-.353.8045-.528 1.6542-.528 2.5482 0 .9489.18 1.8255.54 2.63.361.8045.844 1.4984 1.45 2.0815.606.5832 1.31 1.0384 2.112 1.3646.802.3262 1.645.4898 2.529.4898.321 0 .641-.0231.963-.0702.32-.0462.647-.1261.979-.2387.333-.1126.679-.2569 1.039-.4311.36-.1751.743-.3907 1.15-.6476.149-.0857.271-.128.365-.128.14 0 .27.0972.387.2916l.669 1.096c.054.1011.082.1944.082.2801 0 .1867-.094.3339-.282.4436-.735.5293-1.545.9431-2.429 1.2424-.884.2992-1.838.4494-2.863.4494-.829 0-1.625-.1049-2.387-.3147-.763-.2098-1.475-.5091-2.136-.8979-.661-.3887-1.263-.8535-1.807-1.3934-.544-.5408-1.008-1.1394-1.396-1.7967-.387-.6572-.686-1.3645-.897-2.1228-.211-.7583-.317-1.5494-.317-2.3731 0-.8238.106-1.6042.317-2.3616.211-.7583.512-1.4675.903-2.1286s.859-1.2635 1.402-1.8082c.543-.5437 1.148-1.0085 1.813-1.3935.666-.3849 1.379-.6842 2.142-.8978.763-.2136 1.559-.3205 2.388-.3205.977 0 1.904.1444 2.78.4312.876.2877 1.705.7073 2.487 1.2596l-.003-.0028zM172.811 15.0285c0-.1405.046-.2608.14-.3618.094-.101.219-.1521.376-.1521h1.185c.14 0 .27.0462.387.1396.117.0933.176.2175.176.3734v16.293c0 .3426-.188.5129-.563.5129h-1.185c-.345 0-.516-.1712-.516-.5129v-7.4878h-9.892v7.4878c0 .3426-.188.5129-.564.5129h-1.185c-.344 0-.516-.1712-.516-.5129V15.0285c0-.1405.047-.2608.141-.3618.094-.101.218-.1521.375-.1521h1.209c.14 0 .266.0511.375.1521.11.101.165.2213.165.3618v6.5429h9.892v-6.5429zM190.81 14.5156c.36 0 .541.1867.541.5601v1.1548c0 .1482-.046.2762-.135.3849-.09.1087-.233.1636-.428.1636h-9.458v4.7933h7.439c.141 0 .263.0404.364.1222.102.0818.153.2194.153.4138v1.1895c0 .1395-.043.2646-.128.3733-.087.1088-.215.1636-.388.1636h-7.439v5.7384h9.504c.361 0 .54.1828.54.5485v1.201c0 .3425-.173.5129-.516.5129h-11.288c-.345 0-.516-.1636-.516-.4899v-16.294c0-.358.172-.537.516-.537h11.241l-.002.001zM204.867 29.5721c.141 0 .263.0491.364.1463.102.0972.153.2319.153.4022v1.201c0 .1405-.046.2608-.14.3618-.094.1011-.219.1521-.376.1521h-9.974c-.345 0-.516-.1713-.516-.5129V15.0285c0-.1405.046-.2608.14-.3618.094-.101.227-.1521.399-.1521h1.208c.149 0 .273.0434.37.128.098.0857.147.2137.147.385v14.5435h8.225v.001zM215.956 14.2817c.821 0 1.613.1049 2.375.3147.763.2098 1.475.5091 2.136.8979.662.3887 1.266.8535 1.814 1.3934.547.5408 1.014 1.1432 1.402 1.8082.387.665.688 1.3781.903 2.1402.215.7622.322 1.5551.322 2.3789 0 .8237-.105 1.6032-.316 2.3615-.211.7583-.512 1.4656-.904 2.1229-.391.6573-.858 1.2558-1.402 1.7966-.544.5409-1.148 1.0028-1.813 1.3877s-1.381.6823-2.147.8921c-.767.2098-1.565.3147-2.394.3147-.828 0-1.625-.1049-2.387-.3147-.763-.2098-1.475-.5091-2.136-.8979-.661-.3887-1.263-.8535-1.807-1.3934-.544-.5408-1.008-1.1394-1.396-1.7967-.387-.6572-.686-1.3645-.897-2.1228-.211-.7584-.317-1.5494-.317-2.3731 0-.8238.106-1.6042.317-2.3616.211-.7573.512-1.4675.903-2.1286s.859-1.2635 1.402-1.8082c.544-.5437 1.148-1.0085 1.813-1.3935.666-.3849 1.379-.6842 2.142-.8978.763-.2136 1.559-.3205 2.388-.3205h-.001zm-6.712 8.8755c0 .614.081 1.2029.24 1.7669.161.5639.386 1.0922.675 1.5859.29.4936.637.943 1.045 1.3472.406.4042.859.7506 1.355 1.0383.497.2878 1.028.511 1.596.6708.567.1597 1.16.2396 1.777.2396.618 0 1.201-.0799 1.772-.2396.571-.1588 1.103-.383 1.596-.6708.492-.2877.943-.6332 1.349-1.0383.407-.4042.755-.8536 1.045-1.3472.289-.4937.514-1.022.675-1.5859.16-.564.24-1.1529.24-1.7669 0-.9171-.176-1.7783-.528-2.5828-.352-.8045-.829-1.5061-1.432-2.1056-.602-.5986-1.308-1.073-2.118-1.4233-.809-.3503-1.676-.5244-2.6-.5244-.617 0-1.21.0798-1.777.2386-.568.1598-1.099.383-1.596.6708-.496.2877-.949.6341-1.355 1.0383-.407.4042-.755.8517-1.045 1.3415-.289.4898-.514 1.0191-.675 1.5859-.16.5677-.24 1.1548-.24 1.761h.001zM241.336 31.8355c-.172 0-.32-.0857-.446-.257l-10.244-13.6457v13.3888c0 .3426-.18.5129-.539.5129h-1.185c-.345 0-.516-.1713-.516-.5129v-16.27c0-.1559.046-.2839.14-.3849.094-.101.219-.1521.376-.1521h1.572c.203 0 .368.0857.493.257l9.985 13.1905V14.9467c.047-.2877.219-.4311.516-.4311h1.186c.14 0 .272.0462.393.1395.121.0934.182.2175.182.3734v16.2931c0 .3426-.192.5129-.575.5129h-1.338v.001z" fill="#F1F2F2"
                    />
                </svg>
                </AniLink>
                <div className="flex items-center pl-4 pt-6">
                  <ul class="text-white text-sm list-none">
                    <li>(123) 456-7890</li>
                    <li>email@email.com</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-end-13 md:col-span-9 pt-5">
                <ul class="text-white text-sm float-right flex items-stretch">
                  <li class = "ml-9">
                    <AniLink
                        fade
                        to="/accounting/"
                        className="font-heading hover:text-primary-400"
                      >
                      Accounting
                    </AniLink>                
                  </li>
                  <li class = "ml-9">
                    <AniLink
                        fade
                        to="/tax/"
                        className="font-heading hover:text-primary-400"
                      >
                      Tax Preparation
                    </AniLink>                
                  </li>
                  <li class = "ml-9">
                    <AniLink
                        fade
                        to="/consulting/"
                        className="font-heading hover:text-primary-400"
                      >
                      Consulting
                    </AniLink>                
                  </li>
                  <li class = "ml-9">
                    <AniLink
                        fade
                        to="/payroll/"
                        className="font-heading hover:text-primary-400"
                      >
                      Payroll Management
                    </AniLink>                
                  </li>
                </ul>
            </div>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-items-center lg:justify-between lg:items-center lg:pt-4">
            <div className="lg:flex lg:items-center mb-8 lg:mb-0 text-sm">
              <ul className="flex items-center flex-wrap space-x-4 justify-center lg:justify-start">
                <li className="text-gray-50">
                  © {getYear()} High Echelon
                </li>

                <li>
                  <AniLink
                    fade
                    to="/privacy-policy/"
                    className="text-gray-50 hover:text-primary-400 no-underline"
                  >
                    Privacy Policy
                  </AniLink>
                </li>
                <li>
                  <AniLink
                    fade
                    to="/privacy-policy/"
                    className="text-gray-50 hover:text-primary-400 no-underline"
                  >
                    Accessibility Statement
                  </AniLink>
                </li>

                <li className="w-full md:w-auto mt-6 md:mt-0">
                  <a
                    className="no-underline text-gray-50 hover:text-primary-400 flex items-center justify-center lg:justify-start space-x-1"
                    href="https://www.wisedigitalpartners.com/affordable-web-design/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Powered by</span>{" "}
                    <img src={nestLogo} alt="NEST logo" />
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <ul className="flex items-center flex-wrap space-x-4 justify-center lg:justify-start">
                  <li class = "text-3xl">
                    <a
                      href="https://www.instagram.com/macashhomeloans/?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-white hover:bg-primary-400 transition-colors duration-300 ease-linear"
                    >
                      <svg 
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02 3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969zM2.57 21.83h4V8.799h-4V21.83zM7.143 4.55a2.529928 2.529928 0 01-.19561.97659A2.5301 2.5301 0 016.39 6.352c-.4836.48062-1.13819.74965-1.82.748-.68061-.00046-1.33369-.2688-1.818-.747a2.548165 2.548165 0 01-.55566-.82657A2.548052 2.548052 0 012 4.55c0-.677.27-1.325.753-1.803.48389-.47884 1.13724-.7473 1.818-.747.682 0 1.336.269 1.819.747.482.478.753 1.126.753 1.803z" fill="#fff"/>
                      </svg>
                    </a>
                  </li>
                  <li class = "text-3xl">
                    <a
                      href="https://www.facebook.com/MacAshHomeLoans1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-white hover:bg-primary-400 transition-colors duration-300 ease-linear"
                    >
                      <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.2124 12.375l.6221-3.98148H8.94471V5.8098c0-1.08925.54338-2.15101 2.28549-2.15101h1.7684V.268984S11.3938 0 9.85953 0C6.65615 0 4.56228 1.90695 4.56228 5.35906v3.03446H1.00146V12.375h3.56082V22h4.38243v-9.625h3.26769z" fill="#fff"/></svg>
                    </a>
                  </li>
                  <li class = "text-3xl">
                    <a
                      href="https://www.twitter.com/MacAshHomeLoans1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center text-white hover:bg-primary-400 transition-colors duration-300 ease-linear"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.643 4.93708c-.835.37-1.732.62-2.675.733.973-.58221 1.701-1.49854 2.048-2.578-.9141.54299-1.9146.92519-2.958 1.13-.7016-.74914-1.6309-1.24568-2.6437-1.41253-1.0127-.16685-2.0522.00532-2.9571.48978-.9048.48446-1.6244 1.25411-2.047 2.18945-.4227.93534-.5247 1.98405-.2902 2.9833a13.228982 13.228982 0 01-5.31856-1.4131 13.228884 13.228884 0 01-4.28343-3.4549c-.4.69-.63 1.49-.63 2.342a4.660012 4.660012 0 002.072 3.878 4.64708 4.64708 0 01-2.11-.583v.06c-.00007 1.07572.37203 2.11842 1.05318 2.95102.68115.8326 1.62939 1.4039 2.68382 1.617-.68621.1857-1.40566.213-2.104.08.2975.9256.877 1.735 1.65737 2.3149.78037.5799 1.72255.9013 2.69463.9191-1.65017 1.2954-3.68811 1.9981-5.786 1.995a9.499752 9.499752 0 01-1.111998-.065c2.129478 1.3692 4.608338 2.0958 7.139998 2.093 8.56999 0 13.25499-7.098 13.25499-13.25402 0-.2-.005-.402-.014-.602a9.470192 9.470192 0 002.323-2.41l.002-.003z" fill="#fff"/></svg>
                    </a>
                  </li>
                
                </ul>
                {/* <GatsbyImage
                  image={
                    data.equalHousingOpportunity.childImageSharp.gatsbyImageData
                  }
                  alt="Equal-Housing-Opportunity Logo"
                />
                <div className="text-white">
                  <span className="font-bold tracking-wider">NMLS ID</span>
                  <br />
                  <span className="text-sm">#2099559</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ModalContact />
    </>
  );
};

export default Footer;
