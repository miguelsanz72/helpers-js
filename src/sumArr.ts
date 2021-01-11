import _ from "lodash";

const sumArrPipe = (value: any[], arg: string) => {
  if (value !== undefined && value !== null) {
    return _.sumBy(value, arg);
  }
  return value;
};

export default sumArrPipe;
