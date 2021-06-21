// Question no 1

// var itemsArray = [
//     { name: "juice", price: "50", quantity: "3" },
//     { name: "cookie", price: "30", quantity: "9" },
//     { name: "shirt", price: "880", quantity: "1" },
//     { name: "pen", price: "100", quantity: "2" }
// ]

// var juice = itemsArray[0].price * itemsArray[0].quantity
// document.write("Juice ==>" + " " + juice + "<br>")

// var cookie = itemsArray[1].price * itemsArray[1].quantity
// document.write("Cookie ==>" + " " + cookie + "<br>")

// var shirt = itemsArray[2].price * itemsArray[2].quantity
// document.write("Shirt ==>" + " " + shirt + "<br>")

// var pen = itemsArray[3].price * itemsArray[3].quantity
// document.write("Pen ==>" + " " + pen + "<br>")

// var total = juice + cookie + shirt + pen;
// document.write("Total Price ==>" + " " + total + "<br>")


// Question no 2


// var obj = {
//     name : "M.Hamza",
//     email : "kbrother129@gmail.com",
//     age : "21",
//     password : "1292000",
//     gender : "Male",
//     city : "Karachi",
//     country : "Pakistan"
// }

// var age = obj.hasOwnProperty("age");
// document.write(age)

// var country = obj.hasOwnProperty("country");
// document.write(country)

// console.log("firstName" in obj);

// console.log("lastName" in obj);


// Question no 3

// function Practice(name,roll-no,depart){
//     this.name = name;
//     this.roll-no = roll-no;
//     this.depart = depart;
// }

// var record1 = new Practice("Hamza",20546,"Mathematics");
// console.log(record1)

// var record2 = new Practice("shayan",20544,"Software");
// console.log(record2)

// var record3 = new Practice("umar",2050,"Science");
// console.log(record3)

// Question no 4

// function Population(name, gender, address, education, profession) {
//     this.name = name;
//     this.gender = gender;
//     this.address = address;
//     this.education = education;
//     this.profession = profession
// }

// var house1 = new Population("Hamza", "male", "r-56", "Intermediate", "Designer");
// var house2 = new Population("Bilal", "male", " 5 c 1", "mass communication", "call operator");
// var house3 = new Population("shayan", "male", "l-490", "Soft.Eng", "Engineer");
// var house4 = new Population("umar", "male", "house 643", "Matric", "Teaching")

// var edu_save1 = localStorage.setItem("education", house1.education)
// console.log(localStorage.getItem("education"))

// var edu_save2 = localStorage.setItem("education2", house2.education)
// console.log(localStorage.getItem("education2"))

// var edu_save3 = localStorage.setItem("education3", house3.education)
// console.log(localStorage.getItem("education3"))

// var edu_save4 = localStorage.setItem("education4", house4.education)
// console.log(localStorage.getItem("education4"))

// var p1 = document.getElementById("p1");

// function details() {
//     var box = document.createElement("input");
//     box.setAttribute("type", "checkbox");
//     var text = document.createTextNode(localStorage.getItem("education"));
//     box.append(text);
//     para1.appendChild(box)
// }