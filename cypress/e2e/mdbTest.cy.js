describe('MongoDB Test', () => { 
    it('DB Connection', () => {
        const query = {username: 'cterreros@lean-tech.io'}

        cy.task('queryDatabase', query).then((result) => {
            expect(result).to.have.length.above(0);
        })

    });
})