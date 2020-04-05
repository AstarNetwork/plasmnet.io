import { addComma } from './../addComma';

it('should return true', () => {
    expect(addComma(1234, 0)).toStrictEqual('1,234');
    expect(addComma(84.5321, 2)).toStrictEqual('84.53');
});
