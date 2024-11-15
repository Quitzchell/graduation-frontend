import homepage from '../fixtures/homepage.json'

describe('Homepage tests', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.wait(2000)
        cy.visit('/home');
    });

    it('should render the page successfully', () => {
        cy.get('body')
            .should('exist')
            .and('be.visible');
    });

    it('should render the navigation correctly', () => {
        cy.get('[data-cypress="navigation"]')
            .should('exist')
            .and('be.visible');
    })

    it('should render the header with correct text', () => {
        cy.get('[data-cypress="header-title"]')
            .should('contain.text', "La gloire est éphémère, mais l'oubli est éternel.");
    });

    it('should render the header with correct image source', {retries: 2}, () => {
        cy.get('[data-cypress="header-image"]')
            .should('have.attr', 'src')
            .and('include', 'napoleon-on-horseback.jpg');
    });

    it('should render the paragraph block title correctly', {retries: 2}, () => {
        cy.get('[data-cypress="paragraph-title"]')
            .should('have.text', homepage.about.title);
    })

    it('should render the paragraph block texts correctly', { retries: 2 }, () => {
        cy.get('[data-cypress="paragraph-text"]').within(() => {
            cy.get('p').should('exist'); // Ensure that <p> tags are rendered
            cy.get('p').should('have.length', homepage.about.paragraphs.length);
            homepage.about.paragraphs.forEach((section, index) => {
                cy.get('p').eq(index)
                    .should('have.html', section.paragraph);
            });
        });
    });

    it('should render the Call To Action block with correct content', {retries: 2}, () => {
        cy.get('[data-cypress="call-to-action-block"]')
            .should('exist')
            .and('be.visible')
            .within(() => {
                cy.get('h3').should('contain.text', homepage.cta.header);
                cy.get('p').should('contain.text', homepage.cta.paragraph);
                cy.get('a').should('have.attr', 'href').and('include', homepage.cta.href);
                cy.get('a').should('contain.text', homepage.cta.button_text);
            })
    })

    it('should render Map block with correct content', {retries: 4}, () => {
        cy.get('[data-cypress="map-block"]')
            .should('exist')
            .and('be.visible')
            .within(() => {
                cy.get('h3').should('have.text', homepage.map.header);
                cy.get('p').should('have.text', homepage.map.paragraph);
                cy.get("[data-ntpc='GoogleMapsEmbed'] iframe")
                    .should('exist')
                    .and('have.attr', 'src')
                    .and('include', homepage.map.src)
                    .and('include', homepage.map.lat)
                    .and('include', homepage.map.lng);
            });
    });
});
