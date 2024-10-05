

const url = 'https://academy.quales.tech/login'
const correctEmailText = 'ay@mail.com'
const correctPwd = 'pass1234'
const incorrectEmail = 'you@gmail.com'
const incorrectPwd = 'tope'
const courseTitle = "Product design"
const courseDescription = 'Describes the course'
const imageUrl = "https://www.google.com/imgres?q=imageUrl&imgurl=https%3A%2F%2Fi.sstatic.net%2FGsDIl.jpg"
const address = "https://www.google.com/imgres?q=imageUrl&imgurl=https%3A%2F%2Fi.sstatic.net%2FGsDIl.jpg"

class loginPage {
  
    pageElements = {
        loadUrl: () => cy.visit(url),
        loginText: () => cy.get('.MuiTypography-root'),
        emailText: () => cy.get('#EmailAddress'),
        pwdText: ()=> cy.get('#Password'),
        emailInput: () => cy.get('[data-testid="EmailAddress"]'),
        pwdInput: () => cy.get('[data-testid="Password"]'),
        loginBtn: () => cy.get('.MuiButton-contained'),
        coursePageText: () => cy.contains('Ayobami'),
        createCourseBtn: () => cy.get('.MuiGrid-root > .MuiButtonBase-root'),
        courseTitleInput: () => cy.get('[data-testid="Title*"]'),
        courseDescriptionInput: () => cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root'),
        selectCategory: ()=> cy.get('#demo-simple-select'),
        categoryInput: () => cy.get('[data-value="1"]'),
        inputImageUrl: () => cy.get('[data-testid="ImageURL"]'),
        offlineRadioBtn: () => cy.get('[data-testid="offline"]'),
        addressInputField: () => cy.get('[data-testid="Address*"]'),
        secondAddCourseBtn: () => cy.get('.css-tzsjye > .MuiButton-root'),
        onscreenMessageForCourseCreation: () => cy.contains('Course created successfully'),
        selectCourse: () => cy.get('div:nth-of-type(2) > img'),
        editCourseBtn: () => cy.get('.css-klop1v'),
        updateCourseBtn: () => cy.get('.css-tzsjye > .MuiButton-root'),
        onscreenMessageForCourseUpdate: () => cy.contains('Course updated successfully'),
        deleteCourseBtn: () => cy.get('button.css-wvpqgg'),
        secondDeleteBtn: () => cy.get('div.MuiModal-root button.MuiButton-contained'),
        onscreenMessageForCourseDeletion: () => cy.contains('Course deleted successfully'),

    }

    // method to open login url
    openApp() {
        this.pageElements.loadUrl();
    }

    // confirm page visibility
    confirmPageInformationVisibilty() {
        this.pageElements.loginText().should('be.visible')
        this.pageElements.emailText().should('be.visible')
        this.pageElements.pwdText().should('be.visible')
        
    }

    // type correct email and incorrect password
    typeCorrectEmailAndIncorrectPwd() {
        this.pageElements.emailInput().type(correctEmailText)
        this.pageElements.pwdInput().type(incorrectPwd)
    }


    // type incorrect email and correct password
    typeIncorrectEmailAndCorrectPwd() {
        this.pageElements.emailInput().type(incorrectEmail)
        this.pageElements.pwdInput().type(correctPwd)
    }

    // type incorrect email and incorrect password
    typeIncorrectEmailAndIncorrectPwd() {
        this.pageElements.emailInput().type(incorrectEmail)
        this.pageElements.pwdInput().type(incorrectPwd)
    }

    // type correct email and password in input fields
    typeCorrectEmailAndPwd() {
        this.pageElements.emailInput().type(correctEmailText)
        this.pageElements.pwdInput().type(correctPwd)
    }


    // click login button
    clickLoginBtn() {
        this.pageElements.loginBtn().should('be.visible').click()
    }

    assertCoursePage() {
        this.pageElements.coursePageText()
    }
}




export const login = new loginPage()