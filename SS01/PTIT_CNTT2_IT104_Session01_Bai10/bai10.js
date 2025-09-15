function groupStrings(arr) {
    const groups = {};

    arr.forEach(str => {
        const key = str.split('').sort().join('');
        if (!groups[key]) {
            groups[key] = [];
        }
        groups[key].push(str);
    });

    return Object.values(groups);
}

const arr = ["abc", "bca", "cab", "xyz", "zyx", "yxz", "foo", "oof"];
console.log(groupStrings(arr));