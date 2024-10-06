import { GatewayServicesPage } from "../pages/gateway-services-page"
import { RoutesPage } from "../pages/routes-page"

it('Add new service', () => {

  const gatewayService = new GatewayServicesPage()

  cy.visit('http://localhost:8002/default/services')
  cy.intercept('/default/services?sort_desc=1&size=30').as('getServices')
  cy.wait("@getServices")
  
  gatewayService.tapAddNewBtn()
  gatewayService.elements.newGatewayServicePageTitle().should('have.text', 'New Gateway Service')
  const newDate = new Date()
  gatewayService.addNewService(`Test_Service_${+ newDate}`, 'test_service_tag1, test_service_tag2', 'https://test.com')
  gatewayService.elements.saveSuccessMsg().should('have.text', `Gateway Service "Test_Service_${+ newDate}" successfully created!`)

})

it('Add new route', () => {

  const route = new RoutesPage()
  
  // considering a route can added without service, so we can split these two tests
  // added basic assertion like assert title, can add more based on requirement and test cases
  cy.visit('http://localhost:8002/default/routes')
  cy.intercept('/default/routes?sort_desc=1&size=30').as('getRoutes')
  cy.wait("@getRoutes")
  
  route.tapAddNewBtn()
  route.elements.newRoutePageTitle().should('have.text', 'Create Route')
  const newDate = new Date()
  route.addNewRoute(`Test_Route_${+ newDate}`, 'test_route_tag1, test_route_tag2', '/test')
  route.elements.saveSuccessMsg().should('have.text', `Route "Test_Route_${+ newDate}" successfully created!`)

})