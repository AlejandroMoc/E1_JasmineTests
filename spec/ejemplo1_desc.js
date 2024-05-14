	let model
	let mockUserService
	
	beforeEach(() => {
		mockUserService = {
			lastId: null,
			user: {},
			getUserById(id) {
				this.lastId = id
				return this.user
			}
		}
		const data = {firstName: 'César', middleName: 'Zaniru', lastName: 'Guerra', id: 1}
		model = new User(data, mockUserService)
	})

	describe('getMyFullUserData', () => {

		it('gets user data by id', async () => {
			mockUserService.lastId = null
			mockUserService.user = new User(
				{firstName: 'Odin', middleName: 'Odilón', lastName: 'Guerra', id: 2}
			)
			const ans = await model.getMyFullUserData()
			console.log(ans)
			console.log(mockUserService.lastId)
			expect(mockUserService.lastId).toBe(1)
		})
	
		it('passes id to get user', async () => {
			mockUserService.lastId = null
			await model.getMyFullUserData()
			expect(mockUserService.lastId).toBe(1)
		})

		it('gets full user data', async () => { //IDK ??
			mockUserService.user = new User({
				firstName: 'Juan',
				middleName: 'Programa',
				lastName: 'Bien :)',
				id: 2
			})
			const ans = await model.getMyFullUserData()
			console.log(ans)
			expect(mockUserService.user).toEqual(new User({firstName: 'Juan', middleName: 'Programa', lastName: 'Bien :)', id: 2, useService: undefined}))
		})
	})