export interface EmptyVals {
  undefinedProp: string;
  nullProp: null;
  falseProp: boolean;
  zeroProp: number;
  emptyString: string;
  filledString: string;
  filledObject: FilledStringObj;
  filledArray: FilledStringObj[];
}

export interface FilledStringObj {
  filledString: string;
}
