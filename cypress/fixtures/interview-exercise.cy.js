Cypress.on('uncaught:exception', () => {
  // returning false here prevents Cypress from failing the test
  return false
});

describe('Interview exercise for QA role at GP', () => {
  // no need of creating separated file for selectors - you can put selectors directly in the tests

  // sometimes may happen of need of adding one or all from the {scrollBehavior: false, force: true} to click() method -
  // if element is covered by another one

  beforeEach(() => {
    // please open the page https://www.bbc.com/
  });

  it('1 - navigate to Sport category', () => {
    // 1. please open Sport page 
    // 2. assert you're in the Sport page
  });

  it('2 - footer regulatory note', () => {
    // 1. please check that Footer contains the text "© 2024 BBC. The BBC is not responsible for the content of external sites."
    // 2. please check that text "Read about our approach to external linking." has correct url "https://www.bbc.co.uk/editorialguidelines/guidance/feeds-and-links"
  });

  it('3 - navigate to second article in the list', () => {
    // 1. please navigate to 2nd article in the list
    // 2. assert the opened article is the same as chosen from the list
  });

  it('4 - collect search results', () => {
    // 1. go to search page - click on search icon to do that 
    // 2. search for phrase "Queen"
    // 3. collect titles of all of the results
    // 4. assert the last one in the collected list is the same as the one on the page
  })
});
