const userList: number[] = [15, 12, 155, 22]; // number array;
const usernames: string[] = ["sashank", "joel"]; // string array

// Array type syntax
type listOfUsers = string[];
type listOfActiveUsers = Array<string>;

// Heterogenous Arrays, combination of 2 different types of values

type comments = (string | number)[];

function userInfo(admin: string, ...remaining: string[]) {
  console.log(admin);
  console.log(remaining);
}

userInfo("sashank", "joel", "henry");

const list = [];
list.push(10);
list.push("hello");

const copy = list;
copy.push(true);
