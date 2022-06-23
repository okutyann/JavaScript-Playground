let katayama = {
    age:24,
    name:"honoka",
    birthday:"19981029",
    like:"お金"
}
// console.log( katayama.age);

katayama.age = 26;
katayama.name = "tatufumi"
katayama.birthday = "19960310"

// console.log(katayama.name);

katayama.sex = "man";
// console.log(katayama);

const honoka = {
    age:24,
    birthday:"19981029",
    like:"お金"
}
const tatufumi = {
    age:26,
    birthday:"19960310",
    like:"ほのか"
}
const yusaku = {
    age:26,
    birthday:"19960310",
    like:"カメラ"
}
let newArray = [honoka,tatufumi];
// console.log(newArray);
// console.log(newArray[1].age);

newArray[2] = yusaku;
// console.log(newArray);

newArray.push(honoka);
// console.log(newArray);

const humans = newArray.forEach((human) => {
    // console.log(human)
} )


let family = [];
let familyObj = {
    name: "",
    age: 0,
    height: 0
}

const makeFamily = (name,age,height,num) => {
    familyObj.name = name;
    familyObj.age = age;
    familyObj.height =height
    family = [...family,familyObj]
}
makeFamily ("honoka",24,160,0)
console.log(family);
makeFamily ("minaru",22,163,1)
console.log(family);
makeFamily ("misaki",15,164,2)

console.log(familyObj);
console.log(family);