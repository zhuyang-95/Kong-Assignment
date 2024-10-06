import 'cypress-mochawesome-reporter/register'

/*
  Base Page for Kong project
*/

export class KongPage {

  constructor() {

    // https://github.com/cypress-io/cypress/issues/2554#issuecomment-442334752
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })

    Cypress.on('after:run', (test, runnable) => {
      const screenshot = `report/screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`
      addContext({ test }, screenshot)
      const video = `report/videos/${Cypress.spec.name}.mp4`
      addContext({ test }, video)
    })

  }

}
