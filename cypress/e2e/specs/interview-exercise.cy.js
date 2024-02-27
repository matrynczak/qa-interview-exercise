Cypress.on('uncaught:exception', () => {
  // returning false here prevents Cypress from failing the test
  return false
});

describe('Interview exercise for QA role at GP', () => {
  // no need of creating separated file for selectors - you can put selectors directly in the tests

  // sometimes may happen of need of adding one or all from the {scrollBehavior: false, force: true} to click() method -
  // if element is covered by another one

  beforeEach(() => {
    // please open the page https://sports.williamhill.es/betting/es-es
  });

  it('1 - open Futbol page', () => {
    // 1. please open Futbol page (from Popular section of left menu)
    // 2. assert you're in the Futbol page - what is your idea for this assertion?

  });

  it('2 - redirection of Footer icon', () => {
    // 1. please check if the url of redirection of the AppStore in the footer
    // is equal "https://apps.apple.com/es/app/william-hill-apuestas-online/id884742394"
  });

  it('3 - adding selection to betslip', () => {
    // 1. please add any of selection (button with odds) to the betslip
    // 2. assert selection added to betslip is from the same event as selected in the offer
  });

  it('4 - odds format switcher', () => {
    // 1. please open change odds format switcher - 'Formato de couta' in the top right corner
    // 2. assert there are 3 available formats uncluding their names
    // 3. change the format to 'Fracciones' and propose the way of asserting all of the odds have proper format -
    // - what would be your approach to that check?
  })
});
