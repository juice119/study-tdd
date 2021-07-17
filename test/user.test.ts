import { User } from '../service/user';

test('user.isTodayCreated() 검사', () => {
  const user = new User(1);
  expect(user.isTodayCreated()).toBeTruthy();
  user.createdAt = new Date('1990-01-01');
  expect(user.isTodayCreated()).toBeFalsy();
});
