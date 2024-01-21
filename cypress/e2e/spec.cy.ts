describe("Login", () => {
  // it("home", () => {
  //   cy.visit("https://reg1.su.ac.th/registrar/home.asp");
  // });
  // it("home", () => {
  //   // cy.visit("./pages/queryTraversal.html");
  //   // cy.visit("./pages/query.html");
  //   cy.visit("https://docs.cypress.io/api/table-of-contents");
  // });

  // it('enter site passes', () => {
  //   cy.visit('https://en.wikipedia.org/w/index.php?search=&title=Special:Search')
    
  // })
  it('enter last exerc', () =>{
    // cy.visit('https://www.last.fm/music/The+Lumineers');
    cy.visit('https://www.last.fm');
  })
  // it('wait', () => {
  //   cy.contains('button', 'Last 7 days').click({ force: true });
  //   cy.intercept('GET', 'https://www.last.fm/music/The+Lumineers/+partial/tracks?top_tracks_date_preset*').as('datePreset');
  //   cy.contains('a', 'All time').click();
  //   cy.wait('@datePreset').then(() => {
  //     cy.get('tbody[data-playlisting-add-entries]').children().eq(0).children().contains('Ho Hey').click();
  //   });
    
  // })




  it('Type Search', () => {
    cy.get('.masthead-search-toggle').click();
    cy.wait(500);
    cy.contains('Search for music').click().type('Taylor');
  })
  // it('Type Search', () => {
  //   cy.get('#ooui-php-1').click().type('Hello World');
  //   cy.wait(500);
  //   cy.get('button').contains('Search').click();

  // })
  // it('Click link', () =>{
  //   cy.get('.mw-search-result-heading').eq(0).children().eq(0).click();
  // })
  // it("exercise",() =>{
    // cy.request({
    //   method: 'GET',
    //   url: 'http://universities.hipolabs.com/search?country=thailand&name=Silpakorn',
    // }).then((response) => {
    //   let body = response.body;
    //   cy.log(body);
    //   cy.log(body[0].name)
    // });
    // cy.request({
    //   method: 'POST',
    //   url: 'https://httpbin.org/post',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: exampleReq
    // }).then((response) => {
    //   let res = JSON.parse(response.body.data);
    //   cy.log(res.name);
    // });
    // cy.get('button').should('have.length', 6);
    // cy.contains('ome32').should('exist');
    // cy.get('textarea[placeholder="Comment 1"]').type('Hello');
    // cy.get('textarea[placeholder="Comment 1"]').should('have.value', 'Hello');
  //   cy.request({
  //     method: 'POST',
  //     url: 'https://httpbin.org/post',
  //     headers: {'Content-Type': 'application/json'},
  //     body: {name: "hahaha"}
  // }).then((response) => {
  //     let res = JSON.parse(response.body.data);
  //     expect(res.name).to.equal('hahaha')
  // });
  // it('enter site passes', () => {
  //   cy.visit('https://docs.cypress.io/')
  // })

  // it('Type Search', () => {
  //   cy.get('button[aria-label="Search"]').click()
  //   cy.get('input[placeholder="Search docs"]').type('click');
  //   cy.wait(500);
  //   cy.get('#docsearch-list').children().eq(1).click();
  // })

    // cy.get('li > a').contains('Commands');
  // });

  // it("login", () => {
    // cy.contains('เข้าสู่ระบบ');
    // cy.get('a');
    // cy.get('.container > #MenuBar1');
    // cy.get('textarea[placeholder="Comment 1"]');
    // cy.get('#header');
    // cy.get('#div1').contains('ome5');
    // cy.get('#div2 > .class2');
    // cy.contains("Company").parent();
    // cy.contains("Company").parents();
    // cy.get("#header-row").children();
    // cy.contains("Contact").siblings();
    // cy.get(".myClass");
    // cy.get("#div1").children().filter(".myClass");
    // cy.get('tr').eq(2);
  // });
});
