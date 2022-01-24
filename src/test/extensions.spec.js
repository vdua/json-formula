/*
Copyright 2021 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import { jsonFormula } from '../json-formula';
import stringToNumber from '../jmespath/stringToNumber';
import Form from '../Form';

test('if executes correct branch', () => {
  const expressionTrue = 'if(true(),true_fn(),false_fn())';
  const expressionFalse = 'if(false(),true_fn(),false_fn())';
  const customFunctions = {
    true_fn: {
      _func: () => true,
      _signature: [],
    },
    false_fn: {
      _func: () => false,
      _signature: [],
    },
  };
  const spyTrue = jest.spyOn(customFunctions.true_fn, '_func');
  const spyFalse = jest.spyOn(customFunctions.false_fn, '_func');

  const resultTrue = jsonFormula({}, {}, expressionTrue, customFunctions, stringToNumber);
  expect(resultTrue).toEqual(true);
  expect(spyTrue).toHaveBeenCalled();
  expect(spyFalse).not.toHaveBeenCalled();

  jest.clearAllMocks();
  const resultFalse = jsonFormula({}, {}, expressionFalse, customFunctions, stringToNumber);
  expect(spyTrue).not.toHaveBeenCalled();
  expect(spyFalse).toHaveBeenCalled();
  expect(resultFalse).toEqual(false);
});

test('can pass a class as a function argument', () => {
  // i.e. make sure it does not resolve to the scalar value of a field
  const TYPE_CLASS = 10;

  const getNameFunc = 'getName(address.street)';

  const customFunctions = {
    getName: {
      _func: ([fld]) => fld.$name,
      _signature: [{ types: [TYPE_CLASS] }],
    },
  };
  const fieldData = {};
  const root = new Form(fieldData, { data: { address: { street: 'Oak' } } });
  const result = jsonFormula(
    root.data,
    {},
    getNameFunc,
    customFunctions,
    stringToNumber,
  );
  expect(result).toEqual('street');
});

test('creating second form should not affect first form', () => {
  const fieldData = {};
  const data = { data: { address: { street: 'Oak' } } };

  const form1 = new Form(fieldData, data);
  const numFields1 = form1.$fields.length;
  const form2 = new Form(fieldData, data);
  const numFields2 = form2.$fields.length;

  expect(form1.$fields).toHaveLength(numFields1);
  expect(numFields1).toEqual(numFields2);
});

describe('current datetime tests', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern');
    // 2nd Jan 1970 12 PM
    const datetime = 1.296e8;
    jest.setSystemTime(datetime);
  });

  test('now returns the correct value', () => {
    const expression = 'now()';
    const result = jsonFormula({}, {}, expression, {}, stringToNumber);
    expect(result).toEqual(1.5);
  });

  test('today returns the correct value', () => {
    const expression = 'today()';
    const result = jsonFormula({}, {}, expression, {}, stringToNumber);
    expect(result).toEqual(1.0);
  });

  afterEach(() => {
    jest.useRealTimers();
  });
});

describe('expressions with globals', () => {
  const fieldData = {};
  const data = { data: { address: { street: 'Oak' } } };
  const form = new Form(fieldData, data);

  test('should extract value from global', () => {
    const expression = '$form.address.street';
    const globals = {
      $form: form.data,
    };
    const result = jsonFormula({}, globals, expression, {}, stringToNumber);
    expect(result.valueOf()).toEqual(globals.$form.address.street.valueOf());
  });

  test('should extract correct value for common name in global and data', () => {
    const expression = '$form.address.street';
    const globals = {
      $form: form.data,
    };
    const json = {
      $form: 'ignore',
    };
    const result = jsonFormula(json, globals, expression, {}, stringToNumber);
    expect(result.valueOf()).toEqual(globals.$form.address.street.valueOf());
  });

  test('should ignore globals not at top level', () => {
    const expression = 'address.$form';
    const globals = {
      $form: 'ignore',
    };
    const json = {
      address: {
        $form: 'value',
      },
    };
    const result = jsonFormula(json, globals, expression, {}, stringToNumber);
    expect(result.valueOf()).toEqual(json.address.$form);
  });

  test('should not extract invalid globals', () => {
    const globals = {
      '#form': 'ignore',
      form: 'ignore',
    };
    const json = {
      '#form': 'value',
    };
    const result1 = jsonFormula(json, globals, '"#form"', {}, stringToNumber);
    expect(result1).toEqual(json['#form']);
    const result2 = jsonFormula(json, globals, 'form', {}, stringToNumber);
    expect(result2).toEqual(null);
  });

  test('access globals in custom functions', () => {
    const globals = {
      element: 'value',
    };
    const customFunctions = {
      customFunc: {
        _func: (args, searchData, interpreter) => interpreter.globals.element,
        _signature: [],
      },
    };
    const expression = 'customFunc()';
    const result = jsonFormula({}, globals, expression, customFunctions, stringToNumber);
    expect(result).toEqual(globals.element);
  });
});
