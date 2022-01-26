
Cypress.on('uncaught:exception', () => {
  // returning false here prevents Cypress from failing the test
  return false
});

describe('Interview exercise for QA role at GP', () => {
  // no need of creating separated file for selectors - you can put selectors directly in the tests


  beforeEach(() => {
    // please open the page https://sports.williamhill.es/betting/es-es
      cy.visit('https://sports.williamhill.es/betting/es-es');
  });

  it('1 - open Futbol page', () => {
    // 1. please open Futbol page (from left menu)
    // 2. assert you're in the Futbol page - what is your idea for this assertion?
    cy.get('ul#desktop-sidebar-quick-links [data-id-en="nav-fútbol"]').eq(0).click({scrollBehavior: false});
    cy.url().should('contain', '/f%C3%BAtbol');


  });

  it('2 - redirection of Footer icon', () => {
    // 1. please check if the url of redirection of the AppStore in the footer
    // is equal "https://apps.apple.com/es/app/william-hill-apuestas-online/id884742394"

    cy.get('[data-test-id="@sitebase/apps-item_footer-app-App-Store"] a')
        .should('have.attr', 'href', 'https://apps.apple.com/es/app/william-hill-apuestas-online/id884742394');
  });

  it('3 - adding selection to betslip', () => {
    // 1. please add any of selection (button with odds) to the betslip
    // 2. assert selection added to betslip is from the save event as selected in the offer

    cy.get('section#match-highlights-OB_SP9 span.betbutton__odds').eq(0).click({scrollBehavior: false, force: true});
    cy.get('section#match-highlights-OB_SP9 div.btmarket__link-name--ellipsis').eq(0).invoke('text').then(name => {
      cy.get('p.bs-selection-description__market [data-test-id="event-name"]').should('contain.text', name.replace('v', '₋'))
    })
  });

  it('4 - odds format switcher', () => {
    // 1. please open change odds format switcher - 'Formato de couta' in the top right corner
    // 2. assert there are 3 available formats uncluding their names
    // 3. change the format to 'Fracciones' and propose the way of asserting all of the odds have proper format -
    // - what would be your approach to that check?

    cy.get('[data-test-id="@sportsbook/odds_odds-selector"]').click();
    cy.contains('Fracciones').click();
    // assertion with iteration over all of the odds on the page - using regexp
  })
});
