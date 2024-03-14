"use client";
import React, { useState } from "react";
import ExperienceCard from "../../Card/ExperienceCard";
import { Collapse } from "react-collapse";
import Heading2 from "../../Typography/Heading2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ProjectCard from "../../Card/ProjectCard";

export type ProjectItem = {
  key: string;
  isCurrentJob?: boolean;
  titleList: string[];
  companyName?: string;
  description: string;
  stackList: string[];
  url?: string;
  label?: string;
  galleryImages: string[];
};

type ProjectContainerProps = {
  onOpenProject: () => void;
};

const ProjectContainer = ({ onOpenProject }: ProjectContainerProps) => {
  const personalProjectItem: ProjectItem[] = [
    {
      key: "1",
      titleList: ["Snake Game"],
      description:
        "I created a simple web based snake game just only using HTML CSS and Vanilla Javascript",
      stackList: ["javascript"],
      url: "https://codepen.io/yazidyasykur/full/dyaMrZv",
      label: "Snake Codepen",
      galleryImages: [
        "https://lh3.googleusercontent.com/fife/ALs6j_ERAXJfy7q10v3dczg-Mbb87dofSQAXDuXKcgcqzrV5s6oukP1g64gJ82uRcSsL5ntIl51w6VCvzM0rVgp5A2bFJfh0Dg-3JXx-3YKJqqY8dFBOaLBYYKfQ9hsv0MTp0QLpivxfOwG0VLS4m8zsIB-aPKm9HbwzNoluZR5HXzoFrXT4cvef8pdZLIHdumxw0vtNBBvpsmbQkO7Wh996Vewcaa5qNQtc2CbkgVtydgA6RC1HUD3AqAEGsvIa0_U4PBDg4zu0wVgM0msI9u-hNL8Q5SvAw1oR7JVLiduOJD790MPmCO_ixs4kMxgU098io7Eui54dudduEfj5ZFE2hc-mRuisMoJnWODHLg1wO0-8mhdMdFC6OBT-fYOKg5yjtl9Hk4H5tMnhHMtKXVak4qM0JPRpZStK5F3guFcxY4yp0bF1eV9XtWqtQap605rcIJSdEX6kOTXaS4oSgCtFi8DFE7uk4NtRwZCCrDrNjTrXs-RI-Y7HLYsrnGhnXUVASzjQ95louCM1_9mYZVcVEUo_c4hzccx56dFxVXfgnMg60UJox8QwUeYFAuUCaI6rcTlw77NbbwuSH8AmWyh4uZMqXILaol_mKYC5P_LptNhih2wxOu825-UkyNkjyX8otA6q_b6ksqa3fjVBD-jDN9fJuoPmvjCTPHCqyYLO6eysOEhxi_Jv14Mxsq6uyHsXwMUdyBnEAzauQmZKaSowEbkt_Rz3feOv6WEqcMx1Y1RzLaXUx_nviGSAX284qZicYPKaijQh28b3xpLV-jGUDEVC5xVzb17rjkiEdApAZX07IyilxMMWBSL_wocTc0EsYnbULq2GdkfRioDX7Ninam_B6vAf5IrG-_IhhQ5ewaPBQSSJgs0qJXOZpf5MJLDZRPel2CoRbF2l_412UMEvV7KtJAlDhr8wZpHg6p4hF20JtSZQVlhwKhCuUw32yrlUfaUd0YqkXsULw9dD6BFquk_nKyYSuEPTwyTtms0my-OBxNWUMxjxsLXckO2MATKvBplpg5tRrV080YSEBRPBMrivy5Du2pE5ySR2T2M1sZIbNENUCYeiDwuAkU1qGId3-iEcg3ygJGRhHXE8DQMwspyIR-NMPONkX9yzNsL86hJoYeK7Z2Hhz0lGHwMNNCaJD0ped2RhmbWY89v7cSIExX09XhUettHQotOd5XXfZpL7r6flxbXAQ6-rRRZlWaRBqUZOYwY6UVab8v3pmnJp991Hdjc-M9nEkx8DcdjjBrwxMGCrOz4n9mwDnNQFr-7HrvaRMhxeqi3SDjAGw_2lPhfs0zfLmTazB8o-he5q7iUfLfrcreN-5NOjn7EAC-b5p0gV1GEPM2kY6y8Qv0bjbIXhKEip-qVNKbuO8fFr9jR6kUdE_U4oTL3vudq1f1IBsTm3GIjiZfVpnYTavTF3eoKkwc-LEFu588OWNVem0naUkIW91xPYZ1Cjy0jZSmAm-Ca8gEyBvlyNn0VNQTlVRJyJH1KofVPN99ZT8zs6l3RHATV9mdJzG-qLrdOgEg96lIVGXRfzkej1lFG9OmF3rbIwWppDSa6nWc2bi-c6XfElPmFVWAa4IPf9Ne-1_oNTE-4v1MlLau97upP12LVRi1AdPH209F62Uzl0owmfc2lI-0XrBeGp8erPQxdDUox9G7ejbl7PJTvQVwl9ve5kLWBt=w1920-h911",
      ],
    },
    {
      key: "2",
      titleList: ["Markdown Previewer"],
      description:
        "I created a markdown editor and previewer using React and Markdown parser libraries",
      stackList: ["react", "javascript"],
      url: "https://codepen.io/yazidyasykur/full/RwdjJGp",
      label: "Markdown Previewer",
      galleryImages: [
        "https://lh3.googleusercontent.com/fife/ALs6j_GsZoadM0GBxqcbYt0t8tVVqfSpZYfI2JRRz8x7iKNkRbeQAkNBT6i5fmXdwlUKTvMgdiCXomOW_zGwbeV2eqf03TX4nCbZOyUFgb0M0WjncPDNMWDRIco7Q3Dxvhv3_pz1UO6w0_uJpOdyXf3gCbLeaEvlWXh-0RQ3Zghee4yNp_8j_SKQqfxLY4hz-I5lUxypXGc4rtzZRa0FxxSDHA1MM5rE9d2qDzzCR5CcajTV9K_fqqjYys4Ubrth1oZDQhgGLxo8ZxnZeEDlaCwzNAkn0RW_YWzz1YImOTxnlUnycFieeMgR1egtfQE-H9XkNuI5VdT5p4wOwzRmiyj_DlfTuE3ocWz55jFOxmzb1WodOGwdYVavn0O6iR1mkGP7Re5PUGyGvq8633aTRRpoHqhbbFjoOGrPErd94q_MxX8I5KVndxxQsOIySsou01P633pj413UNWeONqubQwj_m1nqu-s8Wx6veY05cGzOtomFXf1o284J6zszZJzNt1aBVm4UOyrHJYqPo3EgouGpeeB6ZqYFtqIEUqFS9t4pse69zwSRCJACsPrpihal3CQrgCnodJcXGr_Kpz9_upWKcSmRUmi1n1TAirguTsq2SNc1UGlkYsC-SSeFTBrUCSC4bREzidyDPVhhXTREwRlVmGdCoQ0bg9H9ZpQG99bS3wRgk6EPzh8DLHvGgrXmTM_GsiQnoXmma2L2ZwUDb9hZuk_3PXEAZrehAWw-RoiXt4SxoNdPO8jGrrSPaNWB7sJG-We1YNVXLZuzEHh6QhWdTN34yhwVU9oei5cvrKFV5himLaw_kD7g55Q2cl6y5z5MeN4tLDzL6GsGT7Csan3rBXPt5N7nj9blDixD8ZG9vo5eg5FlHseeLIQdr8Ixzmv90A_5sUFVHoTAxL44LGL3e76bZfqbMBb4Qfbv6EHH5g5Nn_jG6KnDoJCNYShKbN1xqXOzKI0boTuMMmZqppp_WfJlwk1m78DlJjDQojYeKb9DTIkH-1iOOpRLaTUDQK1zpDR8myit7OI5BQ8OD1_u8kpjzYvavgenrFZr6jGqZ9_j1m7Nq3IyrBzuEhRC7GfGZpe3pGgczsMmmx5XDxZprye9SGlMA3ArwOf4gsU6dFPAabgUAtXRtxjxVpVP663NbKQ1DNZD2QW_gVwJRQQ4QEjQ5u1SgVU-W8OTn0e1X7CHnbKrz6c5mdX2VW65Lra3L75fRKd4M2reZzGXttZWcJfIHGNTlbwvqr8JeRMaVLJEsaqQOzsUkQZ5ZzAhw97SEq0hE8w9208TR9NMi13BlIlmsfTahrFr6rgkvRqo9XmziUFEXGyef2CQpLLUOZUc7F666j3DAOZ_GyT2zckv72KJHf3Gn1qFNgsx93DIB2gGf2AGfuLxppWj0i_UDxWwUUMGn8hrYOQiEv-iROrQf5bELdvyCHpd3J4A5ghTW7h8J8bTMsvLuSbLBKDKiJQj-oLkF0Jk76mwrA29j3IXX5h6UWYAlcSmGhcT1kg-WAz53KN3jceiQuGENIgL8kyI5IyRtmekR3vAoDf3DAT8V3ioV2Y5kjpWGqEaM4nGcW7uL48_ZNiTNEksXGiY3Bj2hByV3rS83y3z-xN3t202Ct7sxbzSvHToBCsCr39CNRbvjSvbyQhw9cQbLGjAZxIP6kl3MoL6AlGRDVc1lFbDzW2FSw=w1920-h911",
      ],
    },
    {
      key: "2",
      titleList: ["Random Quote Generator"],
      description:
        "I created a random quote generator using React and Markdown parser libraries",
      stackList: ["react", "javascript"],
      url: "https://codepen.io/yazidyasykur/pen/VwRzprK",
      label: "Random Quote Generator",
      galleryImages: [
        "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYtn1pORd6HPswNR4Ap5ejTw8tAiRLhEF4kb2CSpVcshAYWtqZWkQAZQvdVP3o-1fhMwD3DCereTwDtnrdXQdoI_scijg=w1920-h911",
      ],
    },
  ];

  const freelanceProjectItem: ProjectItem[] = [
    {
      key: "1",
      isCurrentJob: true,
      titleList: ["backend engineer"],
      companyName: "PT. Best Agro International",
      description:
        "I architect and develop the backend for a customer service system, encompassing a WhatsApp chatbot which integrated with third-party API's, streamlined ticketing processes, and robust CRUD functionalities. I ensure seamless integration and efficient handling of customer inquiries and data management.",
      stackList: ["javascript", "nodejs", "sqlserver", "express"],
      galleryImages: [
        "https://lh3.googleusercontent.com/fife/ALs6j_E4pcANRgMmeyglJICHnUXPwPqhLmU_Y5li1fMLSFrWFJGM9LdZ0mEVFuiEzmhFayUaiLJU9am3G94v566yl7EoVKoJsCOVZPUVFsk2BWN4uBr9f5bZzi0WwuasLAuGqAyStJrJEp861dFeIuOoG_J5BAY_qsuYvBFl7rqZiYAtR4LTYXgybX8IvPMPFPFqZWeaW6SBkGzdl_I6iSXJvrORWfVXQ6DObLwsOi2FieSpXGxBRytOaIgS7EkUGAFCUZENVCcE5EwfWizA9tmEE1gqGawWrtIIIlWOoPnDvh-WbpSymQqli4wGFfv5a8Hx4RWvGPg4U205-CvKNqJM5F97Y2MS-qW60InlVmjMSJdw_QDBo0GpxTiCuEJHpkGYc6_DFOg-ZxhcBoUD6-2BEGQXOcWOYAeWYcc1unb8N04o8-3g9dDtzNFND85ZHiIR6MoNBXg-EFXbTgNhGg5LGp0uDiOFQRMGX7_OdZSvEg22dMkA3BbJ-KzRHrLvhhcCPrXyR1C-tRv4JU4l0uONnXLRI3DTt102TOfLmbXiS4OGTAyyprfFB23TrQVuuY-hdmbLHpXTYfSNbqn54RJm9nAasaCtmcHRjHw8qYFA9_Yd-7HGpG85Gpy8DaDPBdBHAGWch2lfOfykbdxaSwJ3MEzkHH4RN4x_C8337mCzIv8MVaeZ5byKc-cBn-UIOmR1PwxlSqwZg5vRUiE6qxGTkr1W2YMYOth3mphPRwKhmnZEsM-jBXbYm4tRl8c8pWFfCeQhN8funpIuDHd_-gJteSwhGXPs3o2VH4KmQ80hdq8OMk3J9TdOqbYvoDkoQqg6sIqryNNZo-tBUn-ldENgiosnEMeP5b2aEf6AC84D-476Esl7gyYeiMdqEmy73ocI95H3VvKbya9IPziZHY9sKPLtn4xJGbQ-nQpU6GfZJs8g3F1F5gbrFyxZsMgHO_8K-6qKO4lBU6ozqw8tE_6mRdRHkLl0Yw6-uRLxxxabX6Uo167lMA9MoyFKtrvwK0xWRTkXlhA4n9tYLG3uTMhemw1qW-heHjjson6d80SmX2KMoMqKV_ZRlyDENz0u4ovoiTwxue_AYrTueqPgoct830UShd-62Ur9WU5FrHP2EZXF-ewgoFzPoV7M4Vl1OXLeqT2KMSjd0-vbnGxWK5sBHWkUrwZY409mfupdaM6OSM228CSTb2QFHNH-kWYPCleRIZEximKONeBLOtoXSMmPgL5GPYTY6l6OHdB4TBclVkMiWr9QTTQG4ZvHai5Axs2BBHtGWt5MOnei0ezstgM7FKJwYuLQwqHc6fYPFWHTxQKTY7Zz-TYBjKKViyw_WunfcLFppwKOBDTpPrpAsaWsRsXbnmK3s3P2S0jh6yiDjoddpux0E0nWzyJ_1-DiuBB7G8yPNgHHMPg9FXzZYPAcVK5AKrhdP-kbfDTzRKTEnlcj7FsptnOQV-pV46Fqr-xK2Pvt2giqHDvedZY6cTQxA16hr5n0Y_QOPwr6v1Wnv-G1SyIhk_kN7edw4GZskCKkPFPv2g8AfgGt43tQac7Tq9WaYGQ1yVhgbwBOPcMMZ0VNKC2Ziw90t3-6dJLvc4xUJq97Ow65aCU3NC11qpja0pse1bgzVkS2UdNjUY2ugBgUTju6I2DY2IjMhCxlj4fVE4txes9kQsF1GBJGxO1JZAijig=w1920-h911",
        "https://lh3.googleusercontent.com/fife/ALs6j_Hj9Lvf_G7wx_jp_C5h_m58kUyQwAdSHS5_mNPaTJfyfe9E-_tiTH0ZIF4RhTcNGOgUh31fYdlwF82TEyUQ95sDYiRaYNPF33FlucgnTsSTtuiQ8b1Kg4FHU12FDc12yy18EwACGkFI8FGr24dvnWhIrnpst88zP7qTns4cJSoam3mOIGB8Oo5N0Yex6Q9w74-NXzam-KZ-4x7GdgayQog1Ii1H2TMmubP7WzNb7EM9zYMJbWXjfTSFoMzykQS5weB9q3NKIvpGiJJNHaD1KmWZGp8SiiYZErjN8l2wvxrdH50L6N3ohNmwMNPsYYVvSI-ljipueWwoJ3j5w8fsEkhvV3M7XKtBVyUbLPp_qCi2gdNJ1zf29FZ5tZEt-MCmzsgNI6Ecb1m2BlfK8AIwy0YX5jfWDImtnNcZS6Mta1KZukdGYNOS7YYBR57xPJdPq2x8Y_Q1GJj9YT0bG3w_bGGJCI5q43U2xgd8YKWlzxISKBGSY1q2Le5j7wpilfFHrtqibiWJgX8G9Y4_5nuJB0sAKxWFU1-G5JookNxX364SvHaDVypDdanwTyejHlOK2UcvQx0943DrurGeAtpd-4IyhId8Jvl3ZWWAyxdQ8mgEWg8Cv0dp2zTN7bVS8_OTLawPyEsAQAPMBlvvnT9CLCRTa2G0wKNoPg4cNb0mCJckWsOAdjmjbqhzJk2zjG36GqGvOmWodAra-GVlQInr5XAtZpH3SX2-6qJZN-YIujugqFLeEaasfN5zCILlwPtm6EO7aIyi1cZ_oqfSWovo03uiIE93Xb9awusyR6tSFwAdWlT0O2AyHL6Qo1__sJ6cm3b4hXjQvP3tEkxMAklc2--gpFPO9f9Ld3KLXGKgjVNg9GrlcpTG7vFKn_1Ihy5-g6Ghh-5j1OhElDccYGMJBfdsMry_z2vUerr1k_yVw_dB59lEfkQ3N-NirRSXFhCQAApmfOo57-B7KNQHXfCOqXQEVd6YPxiTzD896WFasPS10xZZI1hxD0YrtP99WJxdgbwZm5ZmI8LvNGTVU3oNycE4iq7gYyzLIaYF51jl9oITRq6u_v_K2b0enSU5Mo3HIPchzR45JSTpgjx7_BiQn21uF88KtLqZczVOBJVqAc2Z8W7BfDEBETFv8U26s3dxHKB2qsDcAsnqblpGQNbwvCSAV1CiwmJRmLwjEOUBBmNFO3WheRkQZ0GktAZP6fI70BUbtskXLPBO9pRKLfJPL3BZT6HiylxKtLChwuAa0LCkqGBvE9ChkNBzyip6J8wK5Cf-MCJPb58kDkmtyz8-aEEipSxZbYck12ZOM2vtyX4g7bSougG8SufUs5kNTtHT-JIppi5CX2lMq8SeDNTJ612zZ6-Iw0Vb62OrPgaOg8zcoU2SWalMC07SGfeA1bcgod5We0DiqUuWKdBKjbIbJRJlWkO6HGO1nlBWxje70Px0JSldH8pdm9F_Wpl9A2KZDvpSKXL5-O0OrJXBjClG_BeJvHX7OMDqMrSZF6dPmGJK_LHfhGKr776a-dnDY9Kk_VPG4pUO6WP1O-5T08cl6QXoGQIQRkV8dUuCUgH30g70WWZSn-qq_p41selJyOsINTChgaZ8-xaB7kx_0Zjxp7JyZq2OIW6-H3e88bEV7LsiFLTEpwGxBFLcdtgS4Ek1n7wHuOraWs0je6E85bWpwHfpvw=w1920-h911",
        "https://lh3.googleusercontent.com/fife/ALs6j_FIzagq9DfytJoI8MI6cI7hdOgJ6ygBRS0dWo4qpA0TxtTKqbcfNavfjHKtCKzt76DGcYULIUQiRoejnJVq_ix3BNxeF21hAvgjcH-BQBNyqqRp6Y8rpHms88rGZZjkVclvcCttfoCK7B0CMVaHaGSiGShmfYjLF35F2gFrfDOxgFCnuyd8-7mByQ490B8BOeRPfrgg_g-0wz3a9ozIxqQ1GdYEsjMQpK51pA8PUXqrRKQKlq2fkgyPexW1W5J1YURg1cl9_yxdXwxoosRNeVJ3VKaPqOxWbDkEq2fpeRPIjfy00ZVGKKZPA_CUUpRZ892bh_5-PTMnLUbeEININqXOJr7Hg25DTvlmfjfHPUv76XJDCdv5z_Pgp3TKTKqPftPAH9oOaAC46mo0mbNw_35wioGIKnTLNq2C_mKHySQtYJJplkaCvmhkYP4HC7kbyLoX3IPN6PympCBq6VhjHbrsGDMrUoiyP6G6Mwz1VwS-kfUIUVrg9pHWg8khQLA8hLX4ntNDdoJg4mqx-bAldvMG9FUgA1VZPc4zzSl8RiQ14O7vQ1xpxg5HNZgk3IRC04Xd4NjqV3n2zWXa8-HJPgQwtLVYVmO7UxTUrAvE5If0kVLRUhLKrx4aR3ejnZ_Y4Whd_mDD2HISjUdSkzjhi-EzX5B-X815YDFqeilSz3X0JWXMFISvDpL-neAks3oAO8Zacz4KqJiwMmnG-IuCxSgPYDyhkTMA7DPbKVRIceZzto9WzgjkL3uQJWtbT6xbCrgh0lVBPExHdplofTlavvE66t6wdnlvKusyHLCSoCwGP05WbJhmBDaepHPQzar3frmlYt57OhHY8PhFXQt3ej8zA2-989-N2CnhENTnAO68laWogCkqLFOyO9ZAGCApX35wgx9PXlPiamhSQZeOPMrHWBtK30TTK9Qq-eA-IS4ZpIGdB9PmBUg1_om7uLdjpVMkArKGfdq7h9M5tlwnoWgDNJFMJmgZLFZa7HEAn8JKv7KmWk_VsdYS5zmcs4JbpYNDTGLlEC6M-TIDzjHPrTZle5Xl4SFpla58fly4J5z8DQjqUPnkNHqEnYl4ErKd71Q5DdzWkWRuTIxRXhv4rCB96VFQIDYD3vQYLJ_kEqtCHM-XVVmtP-K1vHM-EeafaUO1_DejBwpNNfld6Zlw_Yxsm1tAuUT9HmAjehXDBoS_-x_yLsIpvrPp9Mw-hf6JoVRj7VUOmosEsX1xV03RiTIO3mpog0TQpKTPB6gxn9XNhN9a0v1DewkVnm2xE0oZYn_eFDMXE5ucXqYSV7tGHT7W4XsHlkAj_mDB5yw-E5QDmSW4UTQutecUu10wUI0qACIdVtXfydh9TE6_gAi40038wNLhaI7unmB2zxgZaixk8mB-w6uAWATj4Yi0IYngMl1OL602wRJn3xiJ0408ANSqRxB3aJP4rWi32GKLT08NMlikBw92wu1UxyUhBAyJPtAY-EofBDy2MDPr6-bpxgAm3b_0LT8RXX5r3J1ahUsl4krzOy6d88S5-VHcKRvwI0EUqtEkoCSNQuUTQZyZB-OrGtyjI_HynKAnNUQUtGj94QauwKAg_CSgvH2w4Pf2OpEWdrfQDzYzq5Po03cbqlkdSZPKaI7qvtjkQwgv4xmTff9YZ9lvmtUrah3Is3eWN3caKUjzsBxD3ondJS-CoHGt_A=w1920-h911",
      ],
    },
    {
      key: "2",
      isCurrentJob: true,
      titleList: ["Frontend Engineer"],
      companyName: "Sustainable Rituals",
      description:
        "I translate Figma designs into responsive frontend designs, catering to both desktop and mobile platforms.",
      stackList: ["typescript", "nextjs", "tailwind"],
      url: "https://suri-frontend.vercel.app",
      label: "SURI",
      galleryImages: [
        "https://lh3.googleusercontent.com/fife/ALs6j_HO2lrXhNXcw-4jgqWjq5WYptIWxo-EBeMTGQaAAATAkHXMop8X7x-DgFzDflZdMVFyPdrJplarOnn8CXntJEt3ZDusRoGMJ0Vq6LiIDXe_hdBl0n8NWtyQuHP_VBKWO6Y3iP2BNoG2vClonlV68L-8A_qUMSOz_9rusL74PUVvEtgLN6Wi_GHrBBD9zXWTumQZMgpCviRB_hHT7-RLUleRcEjwLxNnONootz2baB1QP9GuewPD1PsrI5laJefrThoCC6lyweMCGNvaHhSUP5gdHDDLS_gzkL-J-UVDqNeIGt5GvY1H3t-LHHoVhKznrGZBi3oc-8dboP3L3jm2AXEIfUtrSyHGNXDx1c5Kmhz0X-g7dEKnF-baGvYDtHAyxd0UvVAi-nx5rH9J17bbSiCv2uodf92EnxdIk9QN37YKvfLCciXFxbPjTUNmPgGXF1w2h6YniBDSixkeFSQMrkVqfsw2uEIj5UUVr7a8IcMI8QSvP4yPA5X0I2bpsILjbB3p_7gsKTOq_QhVZgds_1OG42dCcLZm8rIMsOYtxfd74B24etZvkb4miwO9sZXyoa846wEeKItuvZLUdPMB7HExOykLJkZ3_IE9wAxzf6YIf66eprcr2jgZuo-heL5ozHP_mlOU6i2DIXWrjOq0qWUuId5aq6yhffpcc0dcPoUiGnl7PWH52q0JFpSIJd8LGZttrg1fbWRURrzBLx1kXcTaWyxq3R8dMibcmKmmeLPqDYxSHC5sAwK-RuIb6Gxm-4CXmgQ5lAr20pZkuIwx9XjaNqQTmuP67M0N-Aw3kS_mEr1TandNRshIdhjRFucQvCGIMYOlnfzs9zEhIb2xT_81D3kRx_mX3cbpoBaK448kbVxC6lWnwglesg9UHhKIkckspseFF7TlZPm8ElCFEGO6q1G8KZWBk6YWTumZwUMTkyRhNcpejDO0wavAJv2lgzclx92C_27OZqO0CyCahVEvhwg0neFQib8BFrGyfkUo5FlIZ4cESD02YlEicTVFr9yiVbvWqmVOjeCzt3DnckcR2hNKHwY42vOAZ6UgF8QiTqLFtPYTnJQ-FRiNwxaWl_AycPZkp59tOAjQb-NLPJfGQ3wXCvDERu3QzGS4xEevd32AH-DINzagISEa2JTGOwMOBuXD4YG91wAFzD09h78_BWM9ZpYt5-THsDbrevdpIL_JenZpw9QKB-ElbcngPnNTlTJ714hSUmQAad0e3wbcTlNMB4swroyoG23qPg-adflMMQFx3zd8QA9Sz1OWDDKyJz7F3rPNWwgVgvxOLJrBe4ZVbqxLa8J-IhHQkX2MIx9hljQa4Uci3zFJwcJZ74Z5IXaDirgZcZgJ0OqCP_mwy_1R4wrhgMlgiweK_EjtrOPUHUDRIAYnD8DI0gnxbgIzjyKFls_21IWDCsf0Pnu5BRb2L1yHy8rBK7NHxZLZzhZQtT7fK_6fAX1Bym5JfvfuJr3KDj8i-hs2iCKu_ZsJ47cU0AV0q9zPEMlqP7ivTWmn4i8o3RsmSjq4E32YLVcqaAJbeLPcpDDxVtnV8GQ5jhFmwPfBCqlXDohZBNM685UAQSRhBAq9Ygfp8LAz5eVn_6DpNUsRPDgeDd1hKRefedZZO6aOKSUowXr-iLyy15kGXF8ri50TI8tgkWCYgHvSIO6KGMWJ4GUv_KmjsejXjg=w1920-h911",
      ],
    },
  ];

  const [isOpenFreelance, setIsOpenFreelance] = useState<boolean>(true);
  const [isOpenPersonal, setIsOpenPersonal] = useState<boolean>(true);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <button
          className="mb-2 px-8 "
          onClick={() => setIsOpenFreelance((prevState) => !prevState)}
        >
          <Heading2>
            <span className="mr-4">
              <FontAwesomeIcon
                className={`transition-transform delay-200 ${
                  !isOpenFreelance ? "-scale-y-100" : "scale-y-100"
                }`}
                icon={faChevronDown}
              />
            </span>
            Freelance Project
          </Heading2>
        </button>
        <Collapse isOpened={isOpenFreelance}>
          <div className="flex flex-col gap-6 transition-all">
            {freelanceProjectItem.map((item, index) => (
              <ProjectCard
                data={item}
                key={index}
                onOpenProject={onOpenProject}
              />
            ))}
          </div>
        </Collapse>
      </div>
      <div>
        <button
          className="px-8  mb-2"
          onClick={() => setIsOpenPersonal((prevState) => !prevState)}
        >
          <Heading2>
            <span className="mr-4">
              <FontAwesomeIcon
                className={`transition-transform delay-200 ${
                  !isOpenPersonal ? "-scale-y-100" : "scale-y-100"
                }`}
                icon={faChevronDown}
              />
            </span>
            Personal Project
          </Heading2>
        </button>
        <Collapse isOpened={isOpenPersonal}>
          <div className="flex flex-col gap-6 transition-all ">
            {personalProjectItem.map((item, index) => (
              <ProjectCard
                data={item}
                key={index}
                onOpenProject={onOpenProject}
              />
            ))}
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default ProjectContainer;
