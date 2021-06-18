import { EmptyVals } from "./models";

// Not working in strict mode
export function removeEmptyProperties<T>(obj: T): T {
  let result: T = {} as T;
  Object.keys(obj).forEach((prop) => {
    if (obj[prop] || obj[prop] === false || obj[prop] === 0) {
      result[prop] = obj[prop];
    }
  });

  return result;
}

const testObject: EmptyVals = {
  undefinedProp: undefined,
  nullProp: null,
  falseProp: false,
  zeroProp: 0,
  emptyString: "",
  filledString: "filledString",
  filledObject: {
    filledString: "filledString",
  },
  filledArray: [
    {
      filledString: "filledString",
    },
  ],
};

console.log("result", removeEmptyProperties<EmptyVals>(testObject));
