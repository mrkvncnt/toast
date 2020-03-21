export const demos = ['National Average', 'Age Group', 'Income Level', 'Metro Area'];

export const s2017 = {
  header: ["Demographic",
    "Taxes", "***",
    "Food", "Groceries", "Bread & Grain", "Grains", "Baked Goods", "*", "Meat", "Beef", "Pork", "Other Meat", "Poultry", "Seafood", "Eggs", "*", "Dairy", "Milk", "Other Dairy", "*", "Produce", "Fresh Fruit", "Fresh Vegetables", "Processed Fruit", "Processed Vegetables", "*", "Other Food", "Sugar & Sweets", "Fats & Oils", "Misc.Food", "Beverages", "Groceries Away", "**", "Restaurants", "***",
    "Alcohol", "***",
    "Housing", "Shelter", "Owned Home", "Mortgage Fees & Interest", "Property Taxes", "Maintenance", "*", "Rent", "Other Lodging", "**", "Utilities & Services", "Natural Gas", "Electricity", "Other Fuels", "Phone Servies", "Residential Phone", "Cell Phone", "*", "Water & Other", "**", "Household Operations", "Personal Services", "Other Household Expenses", "**", "Housekeeping Supplies", "Laundry & cleaning Supplies", "Other Household Products", "Postage & Stationery", "**", "Household Furnishings & Appliances", "Household Textiles", "Furniture", "Floor Coverings", "Major Appliances",
    "Small Appliances & Housewares", "Miscellaneous Household Equipment", "***",
    "Apparel", "Men & Boys", "Women & Girls", "Children Under 2", "Footwear", "Other Apparel", "***",
    "Transportation", "Vehicle Purchases", "Cars & Trucks, New", "Cars & Trucks, Used", "Other Vehicles", "*", "Fuel & Motor Oil", "**", "Other Vehicle Expenses", "Vehicle Finance Charges", "Maintenance & Repairs", "Vehicle Insurance", "Vehicle Rental & Fees", "**", "Public Transportation", "***",
    "Healthcare", "Health Insurance", "Medical Services", "Drugs", "Medical Supplies", "***",
    "Entertainment", "Fees & Admissions", "AV Equipment & Services", "Other Entertainment", "Pets", "Toys & Hobbies", "*", "Miscellaneous Equipment", "***",
    "Personal Care", "***", "Reading", "***", "Education", "***", "Tobacco Products", "***", "Miscellaneous", "***", "Cash Contributions", "***",
    "Personal Insurance & Pensions", "Personal Insurance", "Pensions & Social Security"],

  national_average: [9967, null, null, null, 176, 388, null, 253, 181, 128, 186, 140, 55, null, 147, 303, null, 314, 274, 112, 136, null, 150, 117, 824, 423, 56, 3365, 558, null, null, null, 3265, 2065, 1616, 4167, 782, null, 381, 1420, 97, null, 238, 1118, 583, null, 439, 973, null, 177, 428, 150, null, 114, 515, 30, 280, 131, 916, null, 442, 694, 77, 379, 241, null, null, 1900, 2101, 53, 1968, null, 220, 954, 967, 700, 712, null, 3414, 872, 486, 156, null, 750, 985, null, 710, 159, 599, 762, 110, 1491, 332, 1010, 1873, null, 418, 6353],
  household_size: { "One": [4794, null, null, null, 83, 205, null, 118, 83, 65, 99, 74, 30, null, 76, 160, null, 171, 147, 63, 71, null, 77, 61, 456, 256, 27, 2101, 390, null, null, null, 1373, 1168, 1033, 4710, 451, null, 249, 938, 67, null, 199, 547, 352, null, 68, 670, null, 103, 253, 107, null, 75, 243, 11, 134, 92, 685, null, 235, 388, 13, 197, 173, null, null, 832, 896, 33, 999, null, 83, 794, 695, 390, 435, null, 2051, 479, 339, 98, null, 354, 667, null, 369, 80, 190, 496, 80, 743, 240, 773, 1403, null, 187, 2906],
                      "Two": [12669, null, null, null, 158, 389, null, 267, 190, 131, 168, 147, 53, null, 135, 319, null, 318, 289, 111, 137, null, 158, 118, 825, 434, 70, 3448, 737, null, null, null, 3034, 2416, 1960, 3503, 1037, null, 404, 1479, 117, null, 281, 1118, 600, null, 132, 1144, null, 168, 471, 187, null, 137, 624, 51, 320, 151, 1019, null, 415, 716, 40, 341, 309, null, null, 2282, 2050, 69, 1979, null, 228, 938, 981, 809, 835, null, 4277, 1077, 654, 211, null, 787, 1086, null, 1018, 141, 718, 806, 127, 1329, 331, 1109, 2491, null, 527, 6877],
                      "Three": [12528, null, null, null, 215, 450, null, 293, 206, 166, 219, 177, 64, null, 178, 347, null, 356, 328, 126, 156, null, 179, 136, 965, 505, 59, 3893, 577, null, null, null, 4570, 2333, 2041, 4158, 912, null, 427, 1629, 118, null, 238, 1402, 677, null, 792, 1020, null, 229, 512, 131, null, 117, 590, 27, 325, 128, 941, null, 515, 708, 129, 391, 197, null, null, 2442, 2541, 59, 2399, null, 277, 1103, 1246, 892, 737, null, 3921, 966, 498, 144, null, 836, 1117, null, 729, 156, 541, 870, 127, 2290, 447, 1282, 1589, null, 502, 8364],
                      "Four": [13977, null, null, null, 265, 570, null, 341, 266, 187, 276, 189, 84, null, 225, 430, null, 477, 372, 167, 200, null, 206, 170, 1166, 536, 67, 4801, 574, null, null, null, 5809, 2876, 1732, 3978, 859, null, 482, 1789, 98, null, 236, 1607, 788, null, 1391, 1158, null, 231, 489, 146, null, 115, 623, 25, 389, 149, 1079, null, 751, 992, 182, 612, 250, null, null, 2520, 3207, 73, 2839, null, 350, 1116, 1266, 924, 935, null, 3871, 1102, 423, 163, null, 1251, 1157, null, 688, 288, 1080, 1041, 133, 2307, 362, 1096, 1704, null, 549, 9297],
                      "Five": [6704, null, null, null, 344, 599, null, 433, 294, 176, 340, 190, 89, null, 253, 447, null, 455, 396, 174, 212, null, 220, 179, 1262, 603, 73, 4225, 389, null, null, null, 4404, 2031, 1338, 5147, 571, null, 484, 1838, 81, null, 201, 1741, 798, null, 851, 954, null, 280, 582, 180, null, 144, 684, 29, 366, 153, 995, null, 659, 1123, 178, 735, 261, null, null, 2087, 3746, 23, 3014, null, 347, 1048, 927, 659, 774, null, 3052, 874, 390, 151, null, 1020, 1152, null, 639, 296, 855, 882, 86, 2010, 398, 832, 1737, null, 417, 7848],
                    },
  age_group: {  "< 25": [1790, null, null, null, 120, 206, null, 155, 87, 57, 127, 68, 40, null, 95, 151, null, 176, 138, 64, 80, null, 65, 61, 473, 222, 15, 2362, 317, null, null, null, 520, 287, 157, 6279, 310, null, 116, 741, 14, null, 46, 725, 210, null, 161, 367, null, 96, 147, 73, null, 55, 318, 10, 110, 73, 439, null, 306, 466, 50, 331, 162, null, null, 1289, 2053, 24, 1417, null, 134, 471, 502, 361, 405, null, 1009, 387, 99, 51, null, 333, 542, null, 239, 124, 249, 473, 42, 2333, 220, 358, 299, null, 42, 2525],
                  "25 - 34": [7917, null, null, null, 189, 327, null, 207, 138, 107, 186, 106, 54, null, 135, 263, null, 296, 267, 111, 137, null, 119, 105, 812, 378, 37, 3416, 573, null, null, null, 2937, 1115, 1075, 7153, 415, null, 294, 1217, 50, null, 89, 1139, 454, null, 908, 709, null, 143, 316, 83, null, 119, 538, 17, 242, 111, 802, null, 480, 645, 188, 381, 350, null, null, 1452, 2437, 58, 2013, null, 264, 696, 862, 690, 644, null, 2261, 588, 223, 92, null, 619, 826, null, 453, 178, 569, 643, 61, 1234, 323, 669, 949, null, 192, 6398],
                  "35 - 44": [11173, null, null, null, 227, 453, null, 304, 206, 146, 219, 161, 66, null, 183, 360, null, 359, 329, 137, 158, null, 163, 135, 983, 478, 61, 4249, 624, null, null, null, 4787, 1847, 1304, 5755, 602, null, 408, 1509, 68, null, 162, 1439, 640, null, 1128, 972, null, 233, 440, 141, null, 119, 663, 75, 289, 126, 1097, null, 581, 892, 109, 553, 243, null, null, 2115, 2589, 102, 2437, null, 296, 920, 956, 793, 847, null, 3005, 832, 377, 134, null, 1090, 1031, null, 853, 248, 779, 959, 115, 1004, 366, 1083, 1580, null, 371, 7971],
                  "45 - 54": [16274, null, null, null, 201, 427, null, 291, 221, 149, 239, 166, 68, null, 175, 351, null, 378, 308, 122, 147, null, 187, 132, 979, 498, 74, 4157, 633, null, null, null, 5165, 2693, 1619, 3653, 1120, null, 440, 1632, 104, null, 233, 1492, 696, null, 280, 1111, null, 195, 433, 156, null, 122, 517, 23, 371, 184, 967, null, 629, 902, 61, 479, 237, null, null, 2207, 2861, 45, 2472, null, 296, 1118, 1160, 769, 826, null, 3429, 928, 445, 165, null, 1056, 1161, null, 981, 171, 695, 927, 112, 3213, 410, 1202, 2218, null, 498, 9123],
                  "55 - 64": [13517, null, null, null, 168, 431, null, 287, 214, 157, 194, 164, 54, null, 143, 320, null, 309, 277, 114, 145, null, 160, 131, 851, 483, 61, 3229, 620, null, null, null, 3450, 2698, 2222, 2182, 1064, null, 442, 1560, 133, null, 298, 1161, 640, null, 108, 1058, null, 187, 501, 176, null, 100, 543, 36, 287, 151, 1130, null, 394, 702, 31, 366, 227, null, null, 2262, 1946, 36, 2089, null, 211, 1084, 984, 782, 792, null, 3815, 1196, 583, 182, null, 655, 1093, null, 907, 139, 650, 750, 119, 1644, 418, 1214, 2357, null, 626, 8079],
                  "65 +": [5046, null, null, null, 138, 369, null, 221, 163, 111, 132, 128, 44, null, 126, 283, null, 287, 250, 99, 120, null, 146, 104, 676, 361, 58, 2511, 459, null, null, null, 1574, 2315, 2061, 2530, 790, null, 392, 1392, 134, null, 391, 672, 591, null, 110, 1125, null, 163, 503, 195, null, 126, 427, 16, 268, 106, 787, null, 258, 490, 33, 211, 200, null, null, 1693, 1119, 44, 1290, null, 112, 1046, 1003, 612, 594, null, 4712, 911, 783, 214, null, 560, 954, null, 549, 102, 471, 670, 147, 388, 219, 1043, 2430, null, 467, 2762],
                },
  household_income: { "$15,000 - $29,999": [-879, null, null, null, 124, 286, null, 189, 148, 97, 134, 92, 43, null, 110, 211, null, 218, 189, 81, 105, null, 101, 91, 543, 331, 22, 1689, 210, null, null, null, 834, 1022, 1005, 4540, 262, null, 286, 1194, 81, null, 243, 644, 424, null, 136, 608, null, 133, 294, 115, null, 79, 266, 7, 139, 80, 425, null, 201, 380, 49, 240, 132, null, null, 804, 1148, 14, 1218, null, 87, 485, 556, 334, 284, null, 2378, 464, 405, 113, null, 226, 653, null, 412, 74, 194, 482, 57, 502, 308, 558, 1089, null, 217, 1405],
                        "$30,000 - $39,999": [-70, null, null, null, 162, 340, null, 230, 178, 112, 176, 125, 47, null, 133, 222, null, 242, 240, 94, 123, null, 139, 107, 664, 398, 48, 2098, 305, null, null, null, 1282, 1272, 1123, 4424, 370, null, 317, 1371, 73, null, 249, 942, 504, null, 130, 759, null, 173, 349, 106, null, 83, 304, 13, 201, 73, 466, null, 342, 462, 49, 287, 176, null, null, 1513, 1521, 63, 1652, null, 141, 620, 807, 507, 367, null, 3059, 562, 508, 120, null, 327, 838, null, 375, 107, 298, 501, 67, 383, 394, 825, 1185, null, 267, 2459],
                        "$40,000 - $49,999": [1598, null, null, null, 151, 354, null, 230, 163, 132, 173, 149, 47, null, 130, 249, null, 236, 222, 97, 127, null, 134, 109, 706, 386, 34, 2767, 371, null, null, null, 2024, 1571, 1300, 4277, 379, null, 365, 1364, 88, null, 247, 1004, 534, null, 247, 755, null, 161, 296, 100, null, 74, 329, 14, 233, 86, 771, null, 324, 466, 90, 223, 249, null, null, 878, 1694, 8, 1818, null, 170, 743, 1265, 524, 428, null, 3169, 774, 463, 152, null, 415, 925, null, 458, 116, 234, 661, 79, 486, 368, 887, 1560, null, 328, 3116],
                        "$50,000 - $69,999": [4357, null, null, null, 167, 381, null, 278, 168, 121, 176, 118, 54, null, 142, 284, null, 279, 252, 103, 140, null, 148, 107, 785, 413, 41, 3284, 480, null, null, null, 2515, 1643, 1383, 4704, 544, null, 352, 1450, 83, null, 199, 1185, 582, null, 317, 847, null, 156, 450, 161, null, 121, 468, 14, 302, 112, 857, null, 367, 531, 71, 302, 152, null, null, 1603, 2575, 39, 2045, null, 215, 875, 1014, 635, 542, null, 3314, 774, 521, 125, null, 595, 952, null, 598, 159, 446, 659, 114, 723, 372, 1015, 1428, null, 307, 4780],
                        "$70,000 - $99,999": [8754, null, null, null, 197, 409, null, 268, 186, 135, 187, 139, 55, null, 159, 339, null, 352, 308, 133, 143, null, 165, 122, 903, 455, 67, 3665, 647, null, null, null, 3880, 2224, 1715, 4400, 798, null, 419, 1526, 99, null, 243, 1393, 667, null, 437, 984, null, 205, 432, 147, null, 118, 529, 20, 288, 150, 1258, null, 420, 771, 98, 424, 267, null, null, 1770, 2460, 92, 2488, null, 282, 990, 1216, 771, 726, null, 3881, 1088, 493, 176, null, 768, 1052, null, 822, 213, 612, 836, 128, 1115, 382, 903, 1859, null, 461, 7586],
                        "$100,000 - $149,999": [16559, null, null, null, 251, 489, null, 350, 237, 188, 256, 201, 70, null, 188, 446, null, 458, 382, 142, 173, null, 194, 157, 1188, 547, 85, 4917, 901, null, null, null, 5879, 3076, 2208, 3357, 1216, null, 489, 1666, 133, null, 247, 1611, 764, null, 822, 1242, null, 212, 586, 183, null, 189, 770, 29, 417, 188, 1400, null, 684, 1070, 105, 558, 344, null, null, 3184, 3103, 110, 2833, null, 392, 1289, 1064, 1062, 1005, null, 4758, 1342, 556, 194, null, 1079, 1387, null, 845, 242, 1138, 1110, 146, 1745, 316, 1341, 2506, null, 655, 11502],
                        "$150,000 - $199,999": [29888, null, null, null, 248, 517, null, 350, 260, 153, 227, 210, 78, null, 207, 451, null, 483, 404, 162, 188, null, 221, 168, 1273, 551, 118, 5901, 1026, null, null, null, 8521, 4689, 3761, 3282, 1808, null, 599, 1806, 174, null, 275, 1795, 863, null, 988, 1756, null, 278, 727, 178, null, 99, 1132, 82, 511, 338, 1930, null, 892, 1147, 111, 790, 484, null, null, 4727, 2890, 90, 2974, null, 461, 3088, 1214, 1630, 1680, null, 5088, 1378, 695, 269, null, 1898, 1505, null, 2110, 218, 1427, 1361, 185, 4458, 280, 2057, 3078, null, 837, 17595],
                        "$200,000+": [80767, null, null, null, 278, 750, null, 337, 281, 191, 316, 294, 101, null, 243, 568, null, 627, 529, 195, 207, null, 270, 179, 1431, 646, 182, 8683, 1806, null, null, null, 11588, 6389, 4157, 3796, 3672, null, 714, 2097, 169, null, 341, 1921, 1060, null, 2011, 3035, null, 289, 899, 389, null, 231, 1591, 232, 671, 270, 1887, null, 1234, 1949, 159, 759, 678, null, null, 6126, 5007, 79, 3155, null, 438, 2095, 1700, 1819, 2923, null, 6308, 2285, 757, 339, null, 3349, 1897, null, 1855, 377, 2036, 1832, 319, 8810, 247, 2913, 7649, null, 1274, 25355]

                      }
};

export const metro2017 = [

  ["Metro Area",
    "Food", "Groceries", "Bread & Grain", "Meat",  "Dairy", "Produce","Other Food", "**", "Restaurants", "***",
    "Alcohol", "***",
    "Housing", "Shelter", "Utilities & Services", "Household Operations", "Housekeeping Supplies", "Household Furnishings & Appliances", "***",
    "Apparel", "***",
    "Transportation", "Vehicle Purchases", "Fuel & Motor Oil", "Other Vehicle Expenses", "Public Transportation", "***",
    "Healthcare", "***",
    "Entertainment", "***",
    "Personal Care", "***", "Reading", "***", "Education", "***", "Tobacco Products", "***", "Miscellaneous", "***", "Cash Contributions", "***",
    "Personal Insurance & Pensions", "Personal Insurance", "Pensions & Social Security"],

  ["Chicago", null, null, 539, 977, 453, 954, 1595, 3652, 509, null, 13546, 3755, 1417, 692, 1844, 1987, null, 2850, 1770, 2323, 774, 5154, 3328, 958, 129, 1673, 216, 1034, 1685, null, 303, 6465],
  ["Detroit", null, null, 563, 887, 392, 809, 1463, 3284, 658, null, 10429, 4131, 1515, 713, 2006, 2102, null, 3409, 1943, 4307, 768, 5079, 3002, 848, 94, 1531, 551, 977, 1526, null, 546, 6653],
  ["Minneapolis - St.Paul", null, null, 596, 915, 485, 973, 1743, 3859, 754, null, 13901, 3554, 1696, 786, 2845, 1967, null, 3769, 1976, 2885, 778, 6242, 4263, 938, 145, 1526, 367, 1155, 4269, null, 461, 7638],
  ["St.Louis", null, null, 505, 823, 373, 728, 1605, 3266, 684, null, 10350, 4222, 1439, 679, 3465, 1567, null, 4408, 1981, 2948, 621, 4828, 3061, 794, 227, 927, 363, 1577, 4201, null, 393, 6361],
  ["New York", null, null, 572, 984, 456, 910, 1364, 3404, 499, null, 18174, 4000, 1697, 661, 1582, 2291, null, 1777, 1378, 3167, 1586, 4681, 2672, 791, 105, 2733, 245, 999, 3329, null, 465, 7262],
  ["Philadelphia", null, null, 696, 997, 495, 1033, 1637, 3345, 492, null, 12413, 4380, 1584, 781, 1775, 2125, null, 3617, 1843, 3245, 801, 5540, 2821, 765, 157, 2702, 401, 1581, 1560, null, 482, 8171],
  ["Boston", null, null, 712, 1033, 519, 1080, 1764, 3156, 823, null, 18887, 4125, 2217, 629, 3157, 2134, null, 2961, 1746, 2678, 1077, 5261, 3844, 741, 96, 3101, 344, 1251, 2665, null, 332, 7982],
  ["Washington - D.C.", null, null, 556, 1042, 463, 941, 1701, 4485, 662, null, 19571, 4154, 2776, 750, 1851, 2668, null, 4069, 1894, 3149, 1636, 5594, 3778, 1018, 195, 2033, 192, 1558, 2426, null, 511, 10249],
  ["Baltimore", null, null, 551, 956, 428, 1008, 1499, 4521, 724, null, 14800, 4021, 1864, 654, 1908, 1914, null, 5491, 2117, 2590, 851, 4926, 3068, 861, 160, 1617, 270, 913, 1502, null, 472, 9439],
  ["Atlanta", null, null, 443, 890, 344, 672, 1351, 2984, 385, null, 12346, 4363, 1728, 624, 1904, 1874, null, 5287, 2494, 3307, 660, 4447, 3000, 670, 87, 1319, 222, 771, 1945, null, 327, 7808],
  ["Miami", null, null, 524, 1126, 378, 880, 1210, 2922, 487, null, 14759, 3845, 1746, 564, 1706, 2602, null, 2179, 2160, 2837, 786, 4405, 2245, 866, 56, 563, 166, 1263, 933, null, 272, 8467],
  ["Dallas - Fort Worth", null, null, 393, 846, 299, 665, 1230, 3139, 576, null, 13869, 4182, 1460, 736, 2103, 2353, null, 4482, 2117, 3336, 572, 4479, 3333, 778, 110, 1662, 230, 1150, 1517, null, 245, 7348],
  ["Houston", null, null, 568, 1087, 373, 905, 1558, 4662, 650, null, 12823, 4226, 1526, 808, 2436, 2606, null, 5469, 2241, 3732, 790, 4517, 3413, 844, 93, 1474, 260, 974, 2093, null, 252, 6926],
  ["Tampa", null, null, 462, 933, 388, 650, 1182, 2675, 417, null, 10220, 3365, 1773, 633, 1140, 1346, null, 3697, 1555, 2752, 304, 3782, 2100, 612, 0, 658, 268, 944, 996, null, 249, 5527],
  ["Los Angeles", null, null, 549, 1050, 423, 970, 1474, 4262, 620, null, 16454, 3757, 1583, 761, 1775, 2150, null, 3346, 2601, 2950, 845, 3956, 2764, 868, 110, 2024, 190, 1430, 1522, null, 307, 8231],
  ["San Francisco", null, null, 599, 1021, 449, 972, 1447, 4431, 875, null, 22885, 4258, 2580, 560, 2373, 1878, null, 1904, 1927, 2544, 1619, 5013, 3413, 949, 217, 3214, 0, 1335, 2412, null, 278, 10059],
  ["San Diego", null, null, 638, 1224, 520, 997, 1985, 4620, 1112, null, 18677, 3760, 2081, 876, 3200, 2563, null, 3188, 2432, 3781, 1191, 5272, 4513, 1086, 192, 2453, 189, 1322, 2038, null, 625, 9049],
  ["Seattle", null, null, 754, 1179, 605, 1362, 2078, 4980, 986, null, 17241, 3964, 2461, 775, 2524, 3884, null, 5363, 2032, 4037, 1378, 5546, 4295, 841, 200, 2036, 257, 1527, 3502, null, 376, 9608],
  ["Phoenix", null, null, 513, 825, 364, 676, 1559, 2918, 485, null, 10634, 4071, 1702, 822, 2262, 1635, null, 4430, 1914, 2895, 747, 5328, 3138, 795, 141, 1129, 402, 912, 1452, null, 266, 10057],
  ["Denver", null, null, 622, 1127, 502, 1047, 1758, 3798, 771, null, 15452, 4015, 1910, 962, 2720, 2387, null, 5261, 2028, 3218, 1334, 6046, 4340, 1215, 141, 1430, 310, 1178, 2397, null, 317, 7802],
  ["Honolulu", null, null, 511, 1349, 413, 1071, 1816, 4875, 658, null, 16502, 4203, 1441, 716, 1492, 1667, null, 1954, 1794, 2156, 1488, 3977, 3285, 705, 77, 1820, 101, 597, 3512, null, 251, 6668],
  ["Anchorage", null, null, 655, 1073, 502, 992, 2062, 3022, 788, null, 14231, 4590, 1407, 719, 2092, 1648, null, 5850, 2307, 2780, 1510, 4557, 4346, 778, 121, 1523, 482, 1526, 1867, null, 455, 9724],

];

export const sIncome2017 = [
73573,
35889,
81237,
91836,
105088,
89585,
31750,
69062,
86782,
100213,
85037,
49097,
22315,
34685,
44771,
59382,
83829,
120288,
170234,
306051
];


export const metroIncome2017 = [
76639,
80928,
91298,
76108,
88313,
88974,
95276,
113834,
91988,
90502,
86655,
78842,
80250,
60340,
76471,
124002,
99931,
117844,
73834,
105790,
93672,
96094,
];
