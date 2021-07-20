test('two plus tow is four', () => {
  expect(2 + 2).toBe(4);
});

test('mock function test', () => {
  //mock 함수 선언
  const mockFunction = jest.fn();

  //인자 넘겨주기
  mockFunction();
  expect(mockFunction).toBeCalledWith();
  mockFunction('hello', 'world');
  expect(mockFunction).toBeCalledWith('hello', 'world');

  //return 지정하기
  mockFunction.mockReturnValue('isReturnValue1');
  expect(mockFunction()).toBe('isReturnValue1');

  mockFunction('in1', 'in2');
  mockFunction.mockReturnValue('isReturnValue2');
  expect(mockFunction).toBeCalledWith('in1', 'in2');
  expect(mockFunction()).toBe('isReturnValue2');

  //mock 부른 횟수 확인
  const mockCallTime = jest.fn();
  mockCallTime();
  expect(mockCallTime).toBeCalledTimes(1);
  mockCallTime();
  mockCallTime();
  expect(mockCallTime).toBeCalledTimes(3);
});
