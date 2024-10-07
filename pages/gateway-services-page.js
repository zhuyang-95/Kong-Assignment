import { KongPage } from "./kong"

export class GatewayServicesPage extends KongPage {
  
  elements = {
    addNewGatewayServiceBtn : () => cy.get('[data-testid="new-gateway-service"]'),
    toolbarAddNewGatewayServiceBtn : () => cy.get('[data-testid="toolbar-add-gateway-service"]'),
    filterBtn : () => cy.get('[data-testid="filter-button"]'),
    newGatewayServicePageTitle : () => cy.get('.title'),
    nameInput : () => cy.get('[data-testid="gateway-service-name-input"]'),
    tagsInput : () => cy.get('[data-testid="gateway-service-tags-input"]'),
    upstreamUrlInput : () => cy.get('[data-testid="gateway-service-url-input"]'),
    saveBtn : () => cy.get('[data-testid="service-form-submit"]'),
    saveSuccessMsg : () => cy.get('.toaster-message')
  }

  tapAddNewBtn() {
    this.elements.filterBtn().then(($el) => {
      Cypress.dom.isVisible($el) ? 
        this.elements.toolbarAddNewGatewayServiceBtn().click():
        this.elements.addNewGatewayServiceBtn().click()
    })
  }

  addNewService(name, tags, url) {
    this.elements.nameInput().type(name)
    this.elements.tagsInput().type(tags)
    this.elements.upstreamUrlInput().type(url)
    this.elements.saveBtn().click()
  }

}