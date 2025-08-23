// export const sortArrayByPlatform = (platform: string) => {
//   if (platform === "All") return;
//   if (platform === "Device Type") {
//     return filteredDataArr.sort((a, b) => {
//       //@ts-ignore
//       if (a.os === deviceType) return -1;
//       //@ts-ignore
//       if (b.os === deviceType) return 1;
//       return 0;
//     });
//   }
//   return filteredDataArr.sort((a, b) => {
//     //@ts-ignore
//     if (a.os === OS[platform]) return -1;
//     //@ts-ignore
//     if (b.os === OS[platform]) return 1;
//     return 0;
//   });
// };
// export const sortArray = (sortType: string) => {
//   if (sortType === "Highest Paying") {
//     if (selectedPlatform.name !== "All") {
//       return filteredDataArr.sort((a, b) => {
//         return a.reward - b.reward;
//       });
//     } else {
//       return filteredDataArr.sort((a, b) => {
//         return b.reward - a.reward;
//       });
//     }
//   } else if (sortType === "Lowest Paying") {
//     if (selectedPlatform.name !== "All") {
//       return filteredDataArr.sort((a, b) => {
//         return b.reward - a.reward;
//       });
//     } else {
//       return filteredDataArr.sort((a, b) => {
//         return a.reward - b.reward;
//       });
//     }
//   }
// };
