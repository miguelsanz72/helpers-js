import _ from "lodash";

const uniquePipe = (value: any[], arg: string) => {
  if (value !== undefined && value !== null) {
    return _.uniqBy(value, arg);
  }
  return value;
};

export default uniquePipe;
