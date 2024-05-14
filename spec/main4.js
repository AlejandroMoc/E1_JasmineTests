describe('default values', () => {
		let model
		beforeEach(() => {
			model = new User()
		})

		it('first name defaults to empty', () => {
			expect(model.firstName).toBe('')
		})
		it('last name defaults to empty', () => {
			expect(model.lastName).toBe('')
		})
		it('middle name defaults to empty', () => {
			expect(model.middleName).toBe('')
		})
	})

	describe('full name', () => {
		let model
		beforeEach(() => {
			model = new User(firstName='César', lastName='Guerra')
		})

		it('with middle name is firstName + middleName[0]. + lastName', () => {
			model.middleName = 'Zaniru'
			const ans = model.fullName
			expect(ans).toBe(`${model.firstName} ${model.middleName[0]}. ${model.lastName}`)
		})
		it('without middle name is firstName + lastName', () => {
			model.middleName = ''
			const ans = model.fullName
			expect(ans).toBe(`${model.firstName} ${model.lastName}`)
		})
	})

	describe('say my name', () => {
		let model
		beforeEach(() => {
			model = new User()
		})
		
		it('alerts the full name of the user', () => {
			model.firstName = 'César'
			model.lastName = 'Guerra'
			spyOn(window, 'alert')
			model.sayMyName()
			expect(window.alert).toHaveBeenCalled()
			expect(window.alert).toHaveBeenCalledWith('César Guerra')
		})
	})