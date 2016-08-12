/**
 * Created by katherine_celeste on 8/11/16.
 */

//Given an array of integers, return true if 6 appears as either the first or
//last element in the array. The array will be length 1 or more.
firstLast6 = function (a) {
    if (((a[0]) == 6) || (6 == a[a.length - 1])) {
        return true
    }

    else {
        return false
    }
}

//Given an array of integers, return true if the array is length 1 or more, and
// the first element and the last element are equal.
sameFirstLast = function (a) {
    if ((a.length > 0) && (a[0] == a[a.length - 1])) {
        return true
    }
    else {
        return false
    }
}

//Given an array of integers length 3, return an array with the elements
//"rotated left" so [1, 2, 3] yields [2, 3, 1].
rotateLeft3 = function (a) {
    a.push(a.shift());
    return a;

}

//Given an array of Integers length 3, return a new array with the elements
//in reverse order, so [1, 2, 3] becomes [3, 2, 1].
reverse3 = function (a) {
    var temp = []
    for (var i = a.length - 1; i < a.length && i >= 0; i--) {
        temp.push(a[i])
    }
    return temp
}

//Given an array of integers of at least length 2, return the sum of the first
//elements in the array and the second from last element. If the array length is
//less than 2, just sum up the elements that exist, returning 0 if the array is length 0.
sumFirstPenultimate = function (a) {
    if (a.length >= 2) {
        return (a[0] + a[a.length - 2])
    }
    else if (a.length == 1) {
        return a[0];
    }
    else {
        return 0;
    }
}


//Modify and return the given object as follows: if the key "a" has a value, set the key
//"b" to have that value, and set the key "a" to have the value "". Basically "b" is a bully,
//taking the value of "a".
mapBully = function (a) {
    if (a.a != null) {
        a.b = a.a
        a.a = "";
    }
    return a
}

//Modify and return the given object as follows: if the key "a" has a value, set the key "b"
//to have that same value. In all cases remove the key "c", leaving the rest of the object unchanged.
mapShare = function (a) {
    if (a.a != null) {
        a.b = a.a
    }
    delete a.c

    return a
}

//Modify and return the given object as follows: for this problem the object may or may not contain the
//"a" and "b" keys. If both keys are present, append their 2 string values together and store the result under the key "ab".
mapAB = function (a) {
    if (a.hasOwnProperty("a") && (a.hasOwnProperty("b"))) {
        var temp = a.a + a.b
        a.ab = temp;
    }
    return a;
}

//Given an array of strings, return a object containing a key for every different string in the array,
//and the value is that string's length.
wordLen = function (a) {
    var aMap = {}

    a.forEach(function (currentValue, index, array) {
        aMap[array[index]] = array[index].length
    })

    return aMap;

}

//Given an array of words, return a object containing a key for every word's first letter.
// The value for the key will be an array of all words in the list that start with that letter.
// An empty string has no first letter so don't add a key for it.
indexWords = function (a) {
    var aMap = {}

    if ((a.length > 0) && a[0] != "") {
        for (var i = 0; i < a.length; i++) {
            var tempList = [];

            var theKey = a[i].charAt(0); // retrieves first letter of word in array

            a.forEach(function (currentValue, index, array) {

                if (currentValue.length <= 0) {
                    //do nothing
                } else if (currentValue.charAt(0) == theKey) {
                    tempList.push(currentValue);
                }

            })

            aMap[theKey] = tempList; // add ArrayList as value of map
        }
    }

    return aMap;
}

// 1. call firstLast6
var list1 = [1, 2, 6];
var result = firstLast6(list1);
console.log("firstLast6(%s) -> %s", list1, result);

var list2 = [6, 1, 2, 3]
var result2 = firstLast6(list2);
console.log("firstLast6(%s) -> %s", list2, result2);

var list3 = [13, 6, 1, 2, 3]
var result3 = firstLast6(list3);
console.log("firstLast6(%s) -> %s", list3, result3 + "\n");


// *****************************************************************************
// 2. call sameFirstLast
var list4 = [1, 2, 3]
var result4 = sameFirstLast(list4);
console.log("sameFirstLast(%s) -> %s", list4, result4);

var list5 = [1, 2, 3, 1]
var result5 = sameFirstLast(list5);
console.log("sameFirstLast(%s) -> %s", list5, result5);

var list6 = [1, 2, 1]
var result6 = sameFirstLast(list6);
console.log("sameFirstLast(%s) -> %s", list6, result6 + "\n");

// *****************************************************************************
// 3. call rotateLeft3
var list7 = [1, 2, 3]
var result7 = rotateLeft3(list7)
console.log("rotateLeft3([1,2,3]) -> %s", result7)

var list8 = [5, 11, 9]
var result8 = rotateLeft3(list8)
console.log("rotateLeft3([5,11,9]) ->%s ", result8)

var list9 = [7, 0, 0]
var result9 = rotateLeft3(list9);
console.log("rotateLeft3([7,0,0]) -> %s", result9 + "\n");

// *****************************************************************************
// 4. call reverse3
var list10 = [1, 2, 3]
var result10 = reverse3(list10);
console.log("reverse3(%s) -> %s", list10, result10);

var list11 = [5, 11, 9]
var result11 = reverse3(list11);
console.log("reverse3(%s) -> %s", list11, result11);

var list12 = [7, 0, 0]
var result12 = reverse3(list12);
console.log("reverse3(%s) -> %s", list12, result12 + "\n");

// *****************************************************************************
// 5. call sumFirstPenultimate
var list13 = [1, 2, 3]
var result13 = sumFirstPenultimate(list13);
console.log("sumFirstPenultimate(%s) -> %s", list13, result13);

var list14 = [1, 1]
var result14 = sumFirstPenultimate(list14);
console.log("sumFirstPenultimate(%s) -> %s", list14, result14);

var list15 = [1, 1, 1, 1]
var result15 = sumFirstPenultimate(list15);
console.log("sumFirstPenultimate(%s) -> %s", list15, result15);

var list16 = [1, 2, 3, 4]
var result16 = sumFirstPenultimate(list16);
console.log("sumFirstPenultimate(%s) -> %s", list16, result16 + "\n");

// each key in a map is a property

// *****************************************************************************
// 6. call mapBully
//NOTE: the util.inspect() method returns a string representation of object that is primarily useful for debugging.
var map1 = {
    "b": "dirt",
    "a": "candy"
}

util = require("util");
map_to_String = util.inspect(map1);

var result17 = mapBully(map1);
map_to_newString = util.inspect(result17);

//var aString = map1.b.toString();
console.log("mapBully(%s) -> %s", map_to_String, map_to_newString);

var map2 = {
    "a": "candy"
}
map_to_String = util.inspect(map2);
var result18 = mapBully(map2);
map_to_newString = util.inspect(result18);
console.log("mapBully(%s) -> %s", map_to_String, map_to_newString);


var map3 = {
    "b": "carrot",
    "c": "meh",
    "a": "candy"
}
map_to_String = util.inspect(map3);
var result19 = mapBully(map3);
map_to_newString = util.inspect(result19);
console.log("mapBully(%s) -> %s", map_to_String, map_to_newString + "\n");

// *****************************************************************************
// 7. call mapShare
var map4 =
{
    "b": "bbb",
    "c": "ccc",
    "a": "aaa"
}
map_to_String = util.inspect(map4);
var result20 = mapShare(map4);
map_to_newString = util.inspect(result20);
console.log("mapShare(%s) -> %s", map_to_String, map_to_newString);

var map5 = {
    "b": "xyz",
    "c": "ccc"
}
map_to_String = util.inspect(map5);
var result21 = mapShare(map5);
map_to_newString = util.inspect(result21);
console.log("mapShare(%s) -> %s", map_to_String, map_to_newString);

var map6 = {
    "d": "hi",
    "c": "meh",
    "a": "aaa"
}
map_to_String = util.inspect(map6)
var result22 = mapShare(map6)
map_to_newString = util.inspect(result22)
console.log("mapShare(%s) -> %s", map_to_String, map_to_newString + "\n")

// *****************************************************************************
// 8. call mapAB
var map7 = {
    "b": "There",
    "a": "Hi"
}
map_to_String = util.inspect(map7)
var result23 = mapAB(map7)
map_to_newString = util.inspect(result23)
console.log("mapAB(%s) -> %s", map_to_String, map_to_newString)

var map8 = {
    "a": "Hi"
}
map_to_String = util.inspect(map8)
var result24 = mapAB(map8);
map_to_newString = util.inspect(result24)
console.log("mapAB(%s) -> %s", map_to_String, map_to_newString);

var map9 = {
    "b": "There"
}
map_to_String = util.inspect(map9)
var result25 = mapAB(map9);
map_to_newString = util.inspect(result25)
console.log("mapAB(%s) -> %s", map_to_String, map_to_newString + "\n");

// ***************************************************************************** 
// 9. call wordLen 
var aList17 = ["a", "bb", "a", "bb"]
var result26 = wordLen(aList17);
map_to_newString = util.inspect(result26)
console.log("wordLen(%s) -> %s", aList17, map_to_newString);

var aList18 = ["this", "and", "that", "and"]
var result27 = wordLen(aList18);
map_to_newString = util.inspect(result27)
console.log("wordLen(%s) -> %s", aList18, map_to_newString);

var aList19 = ["code", "code", "code", "bug"]
var result28 = wordLen(aList19);
map_to_newString = util.inspect(result28)
console.log("wordLen(%s) -> %s", aList19, map_to_newString + "\n");

// ***************************************************************************** 
// 10. call indexWords  var
aList20 = ["aardvark", "apple", "zamboni", "phone"]
var result29 = indexWords(aList20)
map_to_newString = util.inspect(result29)
console.log("indexWords(%s) -> %s", aList20, map_to_newString);

var alist21 = ["elephant"]
var result30 = indexWords(alist21);
map_to_newString = util.inspect(result30)
console.log("indexWords(%s) -> %s", alist21, map_to_newString);

var alist22 = []
var result31 = indexWords(alist22);
map_to_newString = util.inspect(result31)
console.log("indexWords(%s) -> %s", alist22, map_to_newString);

var alist23 = [""]
var result32 = indexWords(alist23);
map_to_newString = util.inspect(result32)
console.log("indexWords(%s) -> %s", alist23, map_to_newString);