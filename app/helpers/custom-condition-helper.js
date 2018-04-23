import { helper } from '@ember/component/helper';

export function customConditionHelper(params/*, hash*/) {
  let value1 = params[0],
      value2 = params[1],
      value3 = params[2],
      value4 = params[3];

  if (value1 > value2) {
    return value3;
  } else {
    return value4;
  }
}

export default helper(customConditionHelper);
