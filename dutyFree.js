function dutyFree(normPrice, discount, hol){
     let dis = normPrice * (discount / 100)
     return Math.floor(hol/dis)
}
