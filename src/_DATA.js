import Axios from "axios"


// let items = [{
//     _id: {
//       $oid: "607e18b97c6c3268884886a5"
//     },
//     id: 1,
//     itemName: "Black hoodie with photo print",
//     price: 45.9,
//     seller: "Pull&bear",
//     discount: 0,
//     availableColors: ["black"],
//     category: "Men",
//     description: "Black hoodie featuring a photo print on the chest, hood with contrast drawstring, ribbed detail on the hem and long sleeves.",
//     sizes: ["S","M","L"],
//     additionalInfo: "100% cotton",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618872704/Men/Black%20hoodie%20with%20photo%20print/4591538800_2_3_8_rxpqyn.webp",
//                "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872704/Men/Black%20hoodie%20with%20photo%20print/4591538800_2_1_8_etl1k3.webp",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872704/Men/Black%20hoodie%20with%20photo%20print/4591538800_2_2_8_gdajqj.webp",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872704/Men/Black%20hoodie%20with%20photo%20print/4591538800_2_6_8_uuxbcg.webp"]
//   },{
//     _id: {
//       $oid: "607e18b97c6c3268884886a6"
//     },
//     id: 2,
//     itemName: "Basic hoodie with a rubberized patch",
//     price: 29.9,
//     seller: "Pull&bear",  
//     discount: 0,
//     availableColors: ["Ecru", "Lime", "Purble", "darkgreen", "Gray", "skyblue"],
//     category: "Men",
//     description: "Basic comfort fit hoodie with an adjustable hood, reflective inner drawstring, front pouch pocket, inside pocket in mesh fabric and rubberized patch detail with logo. Available in a range of colors.",
//     sizes: ["XS","S","M","L","XL"],
//     additionalInfo: "100% cotton made in Turky",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618872665/Men/Basic%20hoodie%20with%20a%20rubberized%20patch/9594513712_2_1_8_fboau4.webp",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872665/Men/Basic%20hoodie%20with%20a%20rubberized%20patch/9594513520_2_1_8_e2jkpl.webp",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872666/Men/Basic%20hoodie%20with%20a%20rubberized%20patch/9594513654_2_2_8_gebjhv.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872666/Men/Basic%20hoodie%20with%20a%20rubberized%20patch/9594513527_2_4_8_r6ezu4.webp",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872666/Men/Basic%20hoodie%20with%20a%20rubberized%20patch/9594513827_2_1_8_ugthqc.webp",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872666/Men/Basic%20hoodie%20with%20a%20rubberized%20patch/9594513403_2_4_8_vcfg3j.webp"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcb5"
//     },
//     id: 3,
//     itemName: "Crewneck printed sweatshirt\n",
//     price: 19.9,
//     seller: "Bersheka",
//     discount: 0,
//     availableColors: ["Violet"],
//     category: "Men",
//     description: "Colour: Violet",
//     sizes: ["S","M","XL","XXL"],
//     additionalInfo: "100% cotton confort wear",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618872732/Men/Crewneck%20printed%20sweatshirt/7834545629_1_1_3_pvrvvq.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872732/Men/Crewneck%20printed%20sweatshirt/7834545629_2_3_3_ykmtf8.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872732/Men/Crewneck%20printed%20sweatshirt/7834545629_2_4_3_i6slxa.jpg"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcb3"
//     },
//     id: 4,
//     itemName: "Relaxed Fit Sweatshirt\n",
//     price: 14.95,
//     seller: "H&M",
//     discount: 0,
//     availableColors: ["Dark BLue", "Black", "Lightbiege", "Lightpink"],
//     category: "Men",
//     description: "Soft, slightly looser-fit sweatshirt with dropped shoulders and ribbing at neckline, cuffs, and hem. Soft, brushed inside.",
//     sizes: ["S","L"],
//     additionalInfo: "100% cotton",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618872778/Men/Relaxed%20Fit%20Sweatshirt/hmgoepprod_1_ca2biz.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872777/Men/Relaxed%20Fit%20Sweatshirt/hmgoepprod_fo4fu8.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872777/Men/Relaxed%20Fit%20Sweatshirt/hmgoepprod_3_blb60b.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872777/Men/Relaxed%20Fit%20Sweatshirt/hmgoepprod_2_myrmd3.jpg"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcb4"
//     },
//     id: 5,
//     itemName: "B3 Project oversize sweatshirt\n",
//     price: 59.9,
//     seller: "Bersheka",
//     discount: 0,
//     availableColors: ["Stone", "Pink", "Orabge", "Blue"],
//     category: "Men",
//     description: "Care for fiber & Care for water. Garment made of 100% ecologically grown cotton = cultivated using practices that protect biodiversity and technologies that reduce water consumption in dyeing. ",
//     sizes: ["XS","M","L"],
//     additionalInfo: "100% cotton confort wear",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618872614/Men/B3%20Project%20oversize%20sweatshirt/7242130805_2_4_3_k18q9f.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872614/Men/B3%20Project%20oversize%20sweatshirt/7242130902_2_4_1_k6xpff.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872615/Men/B3%20Project%20oversize%20sweatshirt/7242130615_2_4_3_u0gqy4.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872615/Men/B3%20Project%20oversize%20sweatshirt/7242130420_2_4_3_ytw0pp.jpg"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcb6"
//     },
//     id: 6,
//     itemName: "Camel Man Mont ",
//     price: 749,
//     seller: "Defacto",
//     discount: 0,
//     availableColors: ["Camel"],
//     category: "Men-Coats",
//     description: "Slim Fit Hooded Cotton Coatwhich will add a stylish look to your style while protecting you from the cold",
//     sizes: ["S","M","L"],
//     additionalInfo: "100% cotton made in Turky",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618872857/Men/1000/R2074AZ_20WN_BN106_01_02_rmt9pz.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872857/Men/1000/R2074AZ_20WN_BN106_04_02_npcaah.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872856/Men/1000/R2074AZ_20WN_BN106_03_02_aiafgu.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872855/Men/1000/R2074AZ_20WN_BN106_02_02_yvxazd.jpg"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcb7"
//     },
//     id: 7,
//     itemName: "offwhite MAN pullover",
//     price: 219,
//     seller: "Defacto",
//     discount: 0,
//     availableColors: ["Off white","Red","Gray","Black"],
//     category: "Men-Jacket/Coats",
//     description: "Slim Fit Turtleneck Knitwear Sweater will add a stylish look to your style while protecting you from the cold",
//     sizes: ["XS","S","M","L","XL"],
//     additionalInfo: "100% cotton made in Turky",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618872895/Men/1001/S0167AZ_20WN_WT32_01_01_kxkwhk.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872896/Men/1001/S0167AZ_20WN_BR171_03_01_htpe2o.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872893/Men/1001/S0167AZ_20WN_GR376_01_01_ayvukz.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872895/Men/1001/S0167AZ_20WN_BK27_05_01_ebae59.jpg"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcb8"
//     },
//     id: 8,
//     itemName: "Basic Jogging Trousers",
//     price: 599,
//     seller: "Zara",
//     discount: 0,
//     availableColors: ["Black"],
//     category: "Men",
//     description: "Slim fit joggers with an elastic waistband and adjustable drawstrings. Front pockets and a back pocke",
//     sizes: ["S","M","L","XL","XXL"],
//     additionalInfo: "100% cotton confort fit",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618872933/Men/1002/8281466800_6_2_1_ke6twa.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872936/Men/1002/8281466800_2_2_1_arybe0.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872936/Men/1002/8281466800_2_1_1_ytti6u.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872936/Men/1002/1701303800_2_3_1_md9bzu.jpg"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcb9"
//     },
//     id: 9,
//     itemName: "White T-shirt with print",
//     price: 449,
//     seller: "Pull & Bear",
//     discount: 0,
//     availableColors: ["White"],
//     category: "Men",
//     description: "White T-shirt with long sleeves, a print and slogan on the chest, a round neckline and label detail at the hem. Made of 100% cotton.",
//     sizes: ["XS","S","M"],
//     additionalInfo: "100% cotton",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873016/Men/1003/9249519251_2_3_8_rxcy6l.webp",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873016/Men/1003/9249519251_2_1_8_xszkix.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873018/Men/1003/9249519251_2_4_8_q95kpr.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873014/Men/1003/9249519251_2_2_8_zu0bsd.jpg"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcba"
//     },
//     id: 10,
//     itemName: "SWEATSHIRT WITH EMBROIDERED PATCH",
//     price: 799,
//     seller: "Zara",
//     discount: 0,
//     availableColors: ["Camel"],
//     category: "Men",
//     description: "Cotton grown using natural fertilisers and pesticides. Moreover, no genetically modified seeds are used during its cultivation",
//     sizes: ["S","M","L","XL"],
//     additionalInfo: "100% cotton with a badge on the back",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873049/Men/1004/4770400707_2_1_1_z3npdf.webp",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873051/Men/1004/4770400707_2_2_1_vxs8zy.webp",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873046/Men/1004/4770400707_6_2_1_srmkcn.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873055/Men/1004/4770400707_6_3_1_xjw4ry.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873058/Men/1004/4770400707_6_5_1_rkpwbf.jpg"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcbb"
//     },
//     id: 11,
//     itemName: "Lace-up boots",
//     price: 500,
//     seller: "Pull & Bear",
//     discount: 0,
//     availableColors: ["Black"],
//     category: "Men",
//     description: "Men?s black lace-up boots with inside zip detail. Sole height: 3 cm.",
//     sizes: ["S","M","L","XL"],
//     additionalInfo: "made out of black leather",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873086/Men/1005/2002640040_2_4_8_xmkqfr.webp",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873085/Men/1005/2002640040_2_2_8_ujqx7l.webp",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873085/Men/1005/2002640040_2_3_8_gujfkv.webp",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873085/Men/1005/2002640040_2_1_8_x6zxte.webp"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcbc"
//     },
//     id: 12,
//     itemName: "VINTAGE SLIM FIT JEANS",
//     price: 699,
//     seller: "Zara",    
//     discount: 0,
//     availableColors: ["skyblue", "Gray"],
//     category: "Men",
//     description: "Slim fit cotton jeans featuring a five-pocket design, faded effect and front button fastening.",
//     sizes: ["M","L","XL","XXL"],
//     additionalInfo: "confort fit jeans",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873127/Men/1006/8062320406_6_1_1_vsp8ks.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873120/Men/1006/8062320406_1_1_1_tlhevr.webp",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873133/Men/1006/8062320822_6_4_1_m04mzv.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873124/Men/1006/8062320822_6_1_1_qdhk8l.jpg"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcbd"
//     },
//     id: 13,
//     itemName: "Side-striped T-shirt",
//     price: 175,
//     seller: "H&M",
//     discount: 0,
//     availableColors: ["Black"],
//     category: "Men",
//     description: "Round-necked T-shirt in soft cotton jersey with grosgrain side stripes along the shoulders and a small embroidered detail on the chest.",
//     sizes: ["S","M","L"],
//     additionalInfo: "100% cotton",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873185/Men/1007/4def62a21ee15177d0ef158bafed7d9f055ab07d_sclnff.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873170/Men/1007/73dce90f289ea4e171aaf2de15f149be1e787cf9_d2apaf.jpg"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcc1"
//     },
//     id: 14,
//     itemName: "Polo shirt",
//     price: 259,
//     seller: "Pull & Bear",
//     discount: 0,
//     availableColors: ["Pink","Red","Black","White"],
//     category: "Men",
//     description: "Short sleeve polo shirt with contrasting details on the collar and sleeves. Available in different colours.",
//     sizes: ["S","M","L","XL"],
//     additionalInfo: "100% cotton polo shirt made in Turky",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873384/Men/1009/5202501620_2_6_8_wu8f1x.webp",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873382/Men/1009/5202501600_2_6_8_sx2bc3.jpg",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873382/Men/1009/5202501800_2_6_8_s1cky1.webp",
//                 "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873382/Men/1009/5202501250_2_6_8_qagh8e.webp"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcc2"
//     },
//     id: 15,
//     itemName: "Regular Fit Pants",
//     price: 179,
//     seller: "Defacto",
//     discount: 0,
//     availableColors: ["Black","Indigo","Anthracite"],
//     category: "Men",
//     description: "It is made of cotton fabric that is comfortable and comfortable to use throughout the day. Buttoned back pockets. It is comfortably combined.",
//     sizes: ["S","M","L","XL"],
//     additionalInfo: "straight fit",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873411/Men/1010/T1126AZ_20WN_BK27_02_01_tdtlqf.jpg",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873411/Men/1010/T1126AZ_20WN_IN75_02_02_d0uarv.jpg",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873410/Men/1010/T1126AZ_20WN_AR4_02_01_xsuxwp.jpg"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcc3"
//     },
//     id: 16,
//     itemName: "Premium cotton T-shirt",
//     price: 349,
//     seller: "H&M",
//     discount: 0,
//     availableColors: ["Gray","White","Black","offwhite","white"],
//     category: "Men",
//     description: "PREMIUM QUALITY. T-shirt in premium cotton jersey.",
//     sizes: ["S","M","L","XL","XXL"],
//     additionalInfo: "100% cotton made in Turky",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873470/Men/1011/135b1c2f1df948d5bd002fb2c102c9decff0740b_ogkjn0.jpg",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873445/Men/1011/99a7c5de8a79dd6df879fcbf116ac3e25b249f56_p8xqya.jpg",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873444/Men/1011/f53aa4121986e8f5cc2ca9847cbc83182d4c6c42_t5hyay.jpg",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873443/Men/1011/04e87871041cd7575775d84de09305f12cd9a57a_yehikn.jpg",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873439/Men/1011/e9e16b4646e79ac69860005b19eff6d4d6b1e240_bvf9i1.jpg"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcc4"
//     },
//     id: 17,
//     itemName: "Lightweight bomber jacket",
//     price: 200,
//     seller: "Zara",
//     discount: 0,
//     availableColors: ["Gray","Black"],
//     category: "Men",
//     description: "Puffer jacket with a high collar and long sleeves. Front zip pockets at the hip. Inside pocket. Zip-up front.",
//     sizes: ["S","M","L"],
//     additionalInfo: "water proof jacket",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873473/Men/1012/8281323922_6_1_1_tgmvba.webp",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873474/Men/1012/8281323922_6_2_1_axm20j.webp",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873474/Men/1012/8281323800_6_3_1_zdjyd3.webp",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873472/Men/1012/8281323800_6_1_1_aqtti1.webp",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873472/Men/1012/8281323800_6_2_1_vf3qzy.webp"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcc5"
//     },
//     id: 18,
//     itemName: "Lightweight bomber jacket",
//     price: 499,
//     seller: "Bershka",
//     discount: 0,
//     availableColors: ["Blue","Pink","White","Black"],
//     category: "Men",
//     description: "Lightweight bomber jacket and  stylish look to your style while protecting you from the cold",
//     sizes: ["S","M","L","XL"],
//     additionalInfo: "sweater",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873594/Men/1013/1366200039_2_4_1_l90sye.jpg",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873593/Men/1013/1366200902_2_4_1_lveq69.jpg",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873593/Men/1013/1366200251_2_4_1_b1mj1l.jpg",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873592/Men/1013/1366200800_2_4_1_nncmh5.jpg"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcc6"
//     },
//     id: 19,
//     itemName: "Twill shorts Slim Fit",
//     price: 349,
//     seller: "H&M",
//     discount: 0,
//     availableColors: ["Brown","Griege", "Navy","Gray"],
//     category: "Men",
//     description: "A short with 5-pocket in cotton twill with a regular waist, slightly lower crotch and zip fly and button.",
//     sizes: ["S","M","L","XL"],
//     additionalInfo: "confort gabardine shorts",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873722/Men/1014/9581a32aec8b690565bf5d6ccc123871bad1ab81_oredsf.jpg",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873718/Men/1014/f1b5ff217aef9a19cb482fa556df51519b48c171_w51hdl.jpg",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873717/Men/1014/a06a078f5fe59066240ffa871546ee3f7e061153_m3dpf3.jpg",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873705/Men/1014/7f2f12573e0659792c3c379785794172c2255eff_p3xris.jpg"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcc7"
//     },
//     id: 20,
//     itemName: "Hooded sweatshirt",
//     price: 459,
//     seller: "Bershka",
//     discount: 0,
//     availableColors: ["Pink","Black","Yellow","white"],
//     category: "Men",
//     description: "Ca+A2:H19re for fiber. Garment made of at least 15% recycled cotton and 50% ecologically grown cotton = lower consumption of water.",
//     sizes: ["S","M","L","XL"],
//     additionalInfo: "basic wear sweatshirt",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873744/Men/1015/7200499902_2_4_3_xurhne.jpg",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873744/Men/1015/7200499800_2_4_3_xuamwj.jpg",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873744/Men/1015/7200499300_2_4_3_nwkvil.jpg",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873744/Men/1015/7200499250_2_4_3_m5ntvd.jpg"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcc8"
//     },
//     id: 21,
//     itemName: "Printed Half Low Shoulder Sweatshirt\n",
//     price: 199,                           
//     seller: "edge",
//     discount: 0,
//     availableColors: ["Blue" , "Beige","White"],
//     category: "woman clothing",
//     description: "Cotton 100% WOMAN Sweatshirt\nHalf Off Shoulder Sweatshirt",
//     sizes: ["S","M","L","XL"],
//     additionalInfo: "100% conton made in Turkey",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618947897/Women/Printed%20Half%20Low%20Shoulder%20Sweatshirt/Screenshot_642_eq18jj.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618947895/Women/Printed%20Half%20Low%20Shoulder%20Sweatshirt/Screenshot_643_ovpfiz.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618947893/Women/Printed%20Half%20Low%20Shoulder%20Sweatshirt/Screenshot_640_yuqfoy.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618947895/Women/Printed%20Half%20Low%20Shoulder%20Sweatshirt/Screenshot_641_jrhuse.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618947895/Women/Printed%20Half%20Low%20Shoulder%20Sweatshirt/Screenshot_638_alv9jw.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618947889/Women/Printed%20Half%20Low%20Shoulder%20Sweatshirt/Screenshot_639_bkxjir.png"
//     ]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcc9"
//     },
//     id: 22,
//     itemName: "WOMAN KNITTED LEGGINGS",
//     price: 199,
//     seller: "edge",
//     discount: 0,
//     availableColors: ["Black","White"],
//     category: "woman clothing",
//     description: " Woman Knitted Leggings \nPolyamide 86%,Elastane 14% WOMAN Sportswear",
//     sizes: ["S","M","L","XL"],
//     additionalInfo: "100% cotton sports wear",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873473/Women/WOMAN%20KNITED%20LEGGINGS/Screenshot_644_hreb8r.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873472/Women/WOMAN%20KNITED%20LEGGINGS/Screenshot_645_vs8frq.png"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcca"
//     },
//     id: 23,
//     itemName: "Hooded Pocket Detailed jacket",
//     price: 599,
//     seller: "edge",
//     discount: 0,
//     availableColors: ["Black","beige","Yellow"],
//     category: "woman clothing",
//     description: "Cotton 8%,Poliester 92% WOMAN Jacket Zippered Faux Leather Jacket\n",
//     sizes: ["S","M","L","XL"],
//     additionalInfo: "Cotton 8%, Poliester 92% woamn water proof jacket",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873240/Women/Hooded%20Pocket%20Detailed%20Jacket/Screenshot_626_u2xjit.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873240/Women/Hooded%20Pocket%20Detailed%20Jacket/Screenshot_627_vyucyc.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873238/Women/Hooded%20Pocket%20Detailed%20Jacket/Screenshot_625_ojgdee.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873234/Women/Hooded%20Pocket%20Detailed%20Jacket/Screenshot_621_ipwkgs.png"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbccb"
//     },
//     id: 24,
//     itemName: "STRAIGHT JEAN TROUSERS\n",
//     price: 299,
//     seller: "edge",        
//     discount: 0,
//     availableColors: ["iceblue", "blue", "black"],
//     category: "woman clothing",
//     description: "Elastane 2%,Cotton 98% WOMAN Trousers\nHigh Waisted Woven Trousers",
//     sizes: ["S","M","L","XL","XXL"],
//     additionalInfo: "Elastane 2%,Cotton 98% jeans",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873405/Women/Straight%20Jean%20Trousers/Screenshot_646_kgfd6h.png",
//               " https://res.cloudinary.com/djtpiagbk/image/upload/v1618873404/Women/Straight%20Jean%20Trousers/Screenshot_647_gqwewr.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873404/Women/Straight%20Jean%20Trousers/Screenshot_648_kouafs.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873403/Women/Straight%20Jean%20Trousers/Screenshot_649_zgwslk.png"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbccc"
//     },
//     id: 25,
//     itemName: "WOMAN LONG SLEEVE SHIRT",
//     price: 249,
//     seller: "edge",
//     discount: 0,
//     availableColors: ["White" , "Brown"],
//     category: "woman clothing",
//     description: "Polyester 100% WOMAN Shirt\nWoman Long Sleeve Shirt",
//     sizes: ["S","L","XL","XXL"],
//     additionalInfo: "Polyester 100% WOMAN Shirt",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873501/Women/WOMAN%20LONG%20SLEEVE%20SHIRT/Screenshot_619_cjnqie.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873501/Women/WOMAN%20LONG%20SLEEVE%20SHIRT/Screenshot_618_qfv6ft.png"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbccd"
//     },
//     id: 26,
//     itemName: "Long Sleeve Woven Dress",
//     price: 599,
//     seller: "edge",
//     discount: 0,
//     availableColors: ["black","green"],
//     category: "woman clothing",
//     description: "short Long sleeved woven dress",
//     sizes: ["S","L","XL","XXL"],
//     additionalInfo: "made in Turkey",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873278/Women/Long%20Sleeve%20Woven%20Dress/Screenshot_628_bdcm5i.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873277/Women/Long%20Sleeve%20Woven%20Dress/Screenshot_637_ekqehf.png"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcce"
//     },
//     id: 27,
//     itemName: "Basic Crew Neck Sweater",
//     price: 299,
//     seller: "edge",
//     discount: 0,
//     availableColors: ["lilac", "pink" ,"green","light-blue"],
//     category: "woman clothing",
//     description: "Cotton 100% WOMAN Sweatshirt\nHalf Off Shoulder Sweatshirt",
//     sizes: ["S","M","L","XL","XXL"],
//     additionalInfo: "100% cotton woman Sweatshirt",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618872986/Women/Basic%20Crew%20Neck%20Sweater/Screenshot_615_e3sclz.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872985/Women/Basic%20Crew%20Neck%20Sweater/Screenshot_617_kr78tz.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872984/Women/Basic%20Crew%20Neck%20Sweater/Screenshot_614_uoxfxw.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872982/Women/Basic%20Crew%20Neck%20Sweater/Screenshot_613_kfziib.png"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbccf"
//     },
//     id: 28,
//     itemName: "Basic Slim Fit Maternity Tights",
//     price: 359,
//     seller: "edge",
//     discount: 0,
//     availableColors: ["black"],
//     category: "woman clothing",
//     description: "Woman Knitted Leggings \nPolyamide 86%,Elastane 14% WOMAN Sportswear",
//     sizes: ["S","M","L","XL","XXL"],
//     additionalInfo: "sports wear",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873046/Women/Basic%20Slim%20Fit%20Maternity%20Tights/Screenshot_616_a4uaia.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873045/Women/Basic%20Slim%20Fit%20Maternity%20Tights/Screenshot_629_vg0e3i.png"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcd0"
//     },
//     id: 29,
//     itemName: "Buttoned Tiko Cardigan",
//     price: 399,
//     seller: "edge",
//     discount: 0,
//     availableColors: ["green","offwhite"],
//     category: "woman clothing",
//     description: "Elastane 5%,Polyester 22%,Cotton 73% WOMAN Cardigans\n Buttoned Cotton Cardigan",
//     sizes: ["S","M","L","XL","XXL"],
//     additionalInfo: "elastane 5%,polyester 22%,cotton 73% woman cardigans made in Turkey",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873082/Women/Buttoned%20Tiko%20Cardign/Screenshot_635_jpigyq.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873080/Women/Buttoned%20Tiko%20Cardign/Screenshot_636_upxuuy.png"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcd1"
//     },
//     id: 30,
//     itemName: "Printed Burkini With Hijab Black/White/Red",
//     price: 355,
//     seller: "edge",
//     discount: 0,
//     availableColors: "black",
//     category: "woman clothing",
//     description: "Made from high grade material\nColourfast design ensures zero fading and bleeding of dye\nSmart and stylish addition to your wardrobe\nStylish design enhances your casual look\nKeeps you breezy throughout the day",
//     sizes: ["S","M","L"],
//     additionalInfo: "High grade materila swimming suit for hijabi",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873313/Women/Printed%20Burkini%20/Screenshot_193_wtcjqj.png"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcd2"
//     },
//     id: 31,
//     itemName: "casual Tights",
//     price: 420,
//     seller: "edge",
//     discount: 0,
//     availableColors: ["gray","black","navy"],
//     category: "woman clothing",
//     description: "Carefully stitched to lend a neat finish\nSmooth and soft texture prevents causing any irritation to the skin\nSoft fabric ensures optimum air circulation",
//     sizes: ["S","M","L","XL","XXL"],
//     additionalInfo: "confort sports wear",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873153/Women/Casual%20Tights/Screenshot_194_cb0zff.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873153/Women/Casual%20Tights/Screenshot_195_mujind.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618873152/Women/Casual%20Tights/Screenshot_196_r2rpsm.png"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcd3"
//     },
//     id: 32,
//     itemName: "Athletics TR Sweat Dress Heather",
//     price: 432,
//     seller: "edge",
//     discount: 0,
//     availableColors: ["gray","black"],
//     category: "woman clothing",
//     description: "Carefully stitched to lend a neat finish\nStylish appearance catches the attention of everyone\nColourfast design avoids fading or bleeding of dyes\nPuma signature branding print\nSoft and comfortable rich cotton fabric",
//     sizes: ["S","M","L","XL","XXL"],
//     additionalInfo: "100% cotton made in Turkey",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618872932/Women/AThletics%20TR%20Sweat%20Dress%20Heather/Screenshot_197_xdn6m8.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618872932/Women/AThletics%20TR%20Sweat%20Dress%20Heather/Screenshot_198_ijkjob.png"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcd4"
//     },
//     id: 33,
//     itemName: "V-Neck T-Shirt half sleeve",
//     price: 444,
//     seller: "edge",
//     discount: 0,
//     availableColors: ["gray","white","yellow"],
//     category: "woman clothing",
//     description: "Offers The Perfect Balance Of Charming Style And Casual Comfort\nBeautiful Stitching Details Spell Classy Design\nColourfast Design Avoids Fading Or Bleeding Of Dyes\nMade Of High Quality Materials",
//     sizes: ["S","XL","XXL"],
//     additionalInfo: "100% cotton V-neck woman T-shirt",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618920046/Women/V-Neck%20T-shirt/Screenshot_200_u7keso.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618920045/Women/V-Neck%20T-shirt/Screenshot_199_mozoxu.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618920044/Women/V-Neck%20T-shirt/Screenshot_201_zihuyd.png"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcd5"
//     },
//     id: 34,
//     itemName: "Printed Round Neck Long Sleeve Relax Fit Set",
//     price: 456,
//     seller: "edge",
//     discount: 0,
//     availableColors: ["gray"],
//     category: "woman clothing",
//     description: "Smart and stylish addition to your wardrobe\nAdd a charm to your look with its classic and unique design\nSuperior quality material gives you the wearing comfort",
//     sizes: ["S","M","L"],
//     additionalInfo: "100% cotton",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873343/Women/Printed%20Round%20Neck/Screenshot_202_sgiegl.png"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcd6"
//     },
//     id: 35,
//     itemName: "Mid Heel Side Zip Shoes",
//     price: 479,
//     seller: "edge",
//     discount: 0,
//     availableColors: ["camel","black"],
//     category: "woman clothing",
//     description: "Designed to offer comfort and durability\nBest quality material ensures long lasting comfort\nStyled with timeless design and premium quality\nLends a stylish touch to your day-to-day ensembles",
//     sizes: ["S","M","L","XL","XXL"],
//     additionalInfo: "Leather durable healed shoes",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618920262/Women/Mid%20Heel%20Side%20Zip%20Shoes/Screenshot_204_yubcbj.png",
//               "https://res.cloudinary.com/djtpiagbk/image/upload/v1618920261/Women/Mid%20Heel%20Side%20Zip%20Shoes/Screenshot_203_xzjtg2.png"
//     ]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcd7"
//     },
//     id: 36,
//     itemName: "Casual Sleeveless Jumpsuit",
//     price: 491,
//     seller: "edge",
//     discount: 0,
//     availableColors: ["pink"],
//     category: "woman clothing",
//     description: "\nSmart and stylish addition to your wardrobe\nAdd a charm to your look with its classic and unique design\nSuperior quality material gives you the wearing comfort",
//     sizes: ["S","M","L","XL","XXL"],
//     additionalInfo: "100% cotton",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873115/Women/Casual%20Sleevless%20Jumpsuit/Screenshot_205_baeims.png"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcd8"
//     },
//     id: 37,
//     itemName: "Sports Waist Belt Bag",
//     price: 503,
//     seller: "edge",
//     discount: 0,
//     availableColors: ["black"],
//     category: "woman clothing",
//     description: "The nylon lifting belt features a unique downward angle that fits the natural shape of the back and hip and rib contours for extra comfort.\n",
//     sizes: ["one size"],
//     additionalInfo: "unisex waist bag",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618921019/Women/Sports%20Waist%20Belt%20Bag/Screenshot_206_bb2b2x.png"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcd9"
//     },
//     id: 38,
//     itemName: "Sports Backpack",
//     price: 515,
//     seller: "edge",
//     discount: 0,
//     availableColors: ["Green"],
//     category: "woman clothing",
//     description: "reliable back bag made from strong Oxford materials, which you depend on in your daily life\nDimensions: 44 x 32 x 18 cm.",
//     sizes: ["one size"],
//     additionalInfo: "unisex waist bag",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618873371/Women/Sports%20Backpack/Screenshot_208_r8cgtz.png"]
//   },{
//     _id: {
//       $oid: "607e1d0019f52546740dbcda"
//     },
//     id: 39,
//     itemName: "Jeans Jumpsuit",
//     price: 515,
//     seller: "edge",
//     discount: 0,
//     availableColors: ["white"],
//     description: "Smart and stylish addition to your wardrobe\nAdd a charm to your look with its classic and unique design\nSuperior quality material gives you the wearing comfort",
//     sizes: ["S","L","XXL"],
//     additionalInfo: "short jeans stylish dress",
//     images: ["https://res.cloudinary.com/djtpiagbk/image/upload/v1618921160/Women/Jeans%20Jumpsuit/Screenshot_207_jb5kye.png"]
//   }]



export const _getItems = async ()=> {

  // const config = await {
  //   headers: {
  //       Authentication: 'Bearer' + localStorage.getItem('token')
  //   }
  // }

  try{
    const { data:{data:{allItems} }} = await Axios.get("api/v1/items")
    console.log(`???? ~ file: _DATA.js ~ line 684 ~ const_getItems= ~ data`, allItems)
    return {allItems}
  }
  catch(e){
    console.error(e.message)
  }
  
    // .then((res) => res.json())
    // .then((json) => {
    //   console.log("json",json.data)
    //   return {
    //     items: json.data.items
    //   }
    // })
  // const response =  await fetch(url)
  // const items = await response.json()
}

// 127.0.0.1
// 192.168.1.20


// export function _getItems () {
//   return new Promise((res, rej) => {
//     res({...items})
//   })
// }