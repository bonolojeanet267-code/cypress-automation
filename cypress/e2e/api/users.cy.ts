describe('Users API Tests', () => {

  it('should get users successfully', () => {

    cy.request('GET', 'https://reqres.in/api/users?page=2')
      .then((response) => {

        expect(response.status).to.eq(200)

        expect(response.body).to.have.property('data')

        expect(response.body.data).to.be.an('array')

      })

  })

})