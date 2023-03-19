var unknownType;
var anyType;
var someName;
// These will work
unknownType = 'name';
unknownType = 4;
console.log(unknownType);
// Assignment of unknown to a known type can be done after type checking
// someName = unknownType => Wont work
if (typeof unknownType === 'string') {
    someName = unknownType;
}
// Object type
var obj = {
    name: 'Jane Doe',
    age: 20
};
// Array types
var games;
games = ['hockey'];
// Mixed data in array
var multiple;
// Tuples
var tuple;
tuple = [3, ''];
// enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["REGULAR"] = 2] = "REGULAR";
})(Role || (Role = {}));
console.log(Role.ADMIN);
