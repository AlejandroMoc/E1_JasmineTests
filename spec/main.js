//Ejemplo 2
describe(`${User.name} Class`, () => {
	it('exists', () => {
		expect(User).toBeDefined()
	})

	let model
	beforeEach(() => {
		model = new User()
	})

	describe('additional matcher examples', () => {
		it('gets full name pieces', () => {
			const firstName = 'César'
			const middleName = 'Zaniru'
			const lastName = 'Guerra'
			model = new User({firstName, middleName, lastName})
			expect(model.fullNamePieces).toEqual([firstName, middleName, lastName])
		})
		it('checks if theres middle name', () => {
			const firstName = 'César'
			const middleName = 'Zaniru'
			const lastName = 'Guerra'
			model = new User({firstName, middleName, lastName})
			expect(model.fullNamePieces).toContain(middleName)
		})
	})
})