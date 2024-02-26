declare global {
	namespace jest {
		interface Matchers<R> {
			toMatchFields(expected: any): R;
		}
	}
}

export {};
