describe('task 2', () => {

    it('Navigate to webpage',()=>{
  
        cy.on('uncaught:exception', (err, runnable) => {
  
            return false
  
        })
  
        cy.visit('http://ui-grid.info/docs/#!/tutorial');
        cy.get('input[placeholder="search the docs"]').clear().type('Complex Grouping')
        cy.wait(2000)
        cy.get('ul[ng-show="pages.length"] li:nth-child(3) a').click({force: true})
        cy.wait(2000)
        cy.scrollTo("0",'1200px')
        // cy.get('div.left.ui-grid-render-container-left.ui-grid-render-container div.ng-isolate-scope div.ui-grid-canvas div:nth-child(3).ui-grid-row.ng-scope.ui-grid-tree-header-row div:nth-child(1).ng-isolate-scope div.ui-grid-cell.ng-scope.ui-grid-coluiGrid-0004.ui-grid-row-header-cell div.ui-grid-cell-contents.ng-scope div.ui-grid-tree-base-row-header-buttons.ng-scope.ui-grid-tree-base-header').click({force: true})
        cy.get('div.ui-grid-tree-base-row-header-buttons.ng-scope.ui-grid-tree-base-header').eq(2).click()
        // cy.xpath("/*//div[@class='ui-grid-cell-contents ng-binding ng-scope' and contains(., 'female ($15,153.00)')]").should('be.visible')
        cy.get('.ui-grid-cell-contents.ng-binding.ng-scope').eq(39).should('contain', 'female ($15,153.00)')
        cy.get('.ui-grid-cell-contents.ng-binding.ng-scope').eq(44).should('contain', '$2,525.50')
    })
  
  })