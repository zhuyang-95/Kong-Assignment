import { KongPage } from "./kong"

export class RoutesPage extends KongPage {

  elements = {
    addNewRouteBtn : () => cy.get('[data-testid="new-route"]'),
    toolbarAddNewRouteBtn : () => cy.get('[data-testid="toolbar-add-route"'),
    filterBtn : () => cy.get('[data-testid="filter-button"]'),
    newRoutePageTitle : () => cy.get('.title'),
    nameInput : () => cy.get('[data-testid="route-form-name"]'),
    serviceSelection : () => cy.get('[data-testid="route-form-service-id"]'),
    serviceOption : () => cy.get('.route-form-service-dropdown-item'),
    noServiceOption : () => cy.get('[data-testid="no-search-results"]'),
    tagsInput : () => cy.get('[data-testid="route-form-tags"]'),
    routePathInput : () => cy.get('[data-testid="route-form-paths-input-1"]'),
    saveBtn : () => cy.get('[data-testid="route-form-submit"]'),
    saveSuccessMsg : () => cy.get('.toaster-message')
  }

  tapAddNewBtn() {
    this.elements.filterBtn().then(($el) => {
      Cypress.dom.isVisible($el) ? 
        this.elements.toolbarAddNewRouteBtn().click():
        this.elements.addNewRouteBtn().click()
    })
  }

  addNewRoute(name, tags, path) {
    this.elements.nameInput().type(name)
    this.elements.serviceSelection().click()
  
    // https://docs.cypress.io/guides/core-concepts/conditional-testing#Element-existence
    cy.get('.popover-container').then(($body) => {
      if ($body.find('[data-testid="no-search-results"]').length) {
        this.elements.serviceSelection().click()
      } else {
        this.elements.serviceOption().last().click()
      }
    })
    this.elements.tagsInput().type(tags)
    this.elements.routePathInput().type(path)
    this.elements.saveBtn().click()
  }

  
}