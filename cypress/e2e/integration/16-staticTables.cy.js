
import TablesPage from "../../pages/TablesPage"
const tablesPage = new TablesPage()

describe('Tables', () => {
    beforeEach(() => {
        cy.fixture('example').then(function(data) {
           this.headers = data.headers
        })
    })

  
    it('Verify the headers of table',  {tags: ['@smoke', '@regression']}, function(){
        cy.visit("https://techglobal-training.com/frontend");
        cy.clickCard('Tables')
        tablesPage.getCompanyTablesHeaders().find('th').each(($txt, index)=>{
            cy.wrap($txt).should('have.text', this.headers[index])
        })
     
    })

})