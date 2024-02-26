import { UInt64, Struct } from 'o1js';

class Complex extends Struct({
	one: UInt64,
	two: UInt64,
	three: UInt64
}) {
	toFields() {
		return [...this.one.toFields(), ...this.two.toFields(), ...this.three.toFields()];
	}
}

describe('Correctly Identifies Equal Fields', () => {
	const ex64 = UInt64.from(10_000);
	const exStruct = new Complex({
		one: UInt64.from(10),
		two: UInt64.from(20),
		three: UInt64.from(30)
	});

	it('UInt64 Case', () => {
		expect(ex64).toMatchFields(UInt64.from(10_000));
	});

	it('Struct Case', () => {
		expect(exStruct).toMatchFields(
			new Complex({
				one: UInt64.from(10),
				two: UInt64.from(20),
				three: UInt64.from(30)
			})
		);
	});
});
