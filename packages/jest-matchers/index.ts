const toMatchFields = (received, expected) => {
	let receivedFields, expectedFields;
	try {
		receivedFields = received.toFields().map((x) => String(x.toBigInt()));
		expectedFields = expected.toFields().map((x) => String(x.toBigInt()));
	} catch {
		return {
			message: () =>
				`Expected values to respond to #toFields, but one or both of the values do not.`,
			pass: false
		};
	}
	let pass = false;
	if (receivedFields.length === expectedFields.length) {
		pass = true;
		for (let i = 0; i < receivedFields.length; i += 1) {
			pass = pass && receivedFields[i] === expectedFields[i];
		}
	}
	if (pass) {
		return {
			message: () => `Expected ${receivedFields} to match ${expectedFields}`,
			pass: pass
		};
	}
};

export { toMatchFields };
