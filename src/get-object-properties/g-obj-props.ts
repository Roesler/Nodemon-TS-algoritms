//WIP
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

/* const recursiveSearch = (obj, searchKey, results = []) => {
    const r = results;
    Object.keys(obj).forEach(key => {
       const value = obj[key];
       if(key === searchKey && typeof value !== 'object'){
          r.push(value);
       }else if(typeof value === 'object'){
          recursiveSearch(value, searchKey, r);
       }
    });
    return r;
 };

let search = (needle, haystack, found = []) => {
  Object.keys(haystack).forEach((key) => {
    if(key === needle){
      found.push(haystack[key]);
      return found;
    }
    if(typeof haystack[key] === 'object'){
      search(needle, haystack[key], found);
    }
  });
  return found;
}; */

const people = {
  Ram: {
    fullName: "Ram Kumar",
    details: {
      age: 31,
      isEmployed: true,
    },
  },
  Sourav: {
    fullName: "Sourav Singh",
    details: {
      age: 22,
      isEmployed: false,
    },
  },
  Jay: {
    fullName: "Jay Grewal",
    details: {
      age: 26,
      isEmployed: true,
    },
  },
};

console.log("getProperty", getProperty(people, "Jay"));
