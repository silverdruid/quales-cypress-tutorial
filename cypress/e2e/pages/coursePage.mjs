
const url = 'https://academy.quales.tech/login'
const correctEmailText = 'ay@mail.com'
const correctPwd = 'pass1234'
const courseTitle = "Product design"
const courseDescription = 'Describes the course'
const imageUrl = "https://www.google.com/imgres?q=imageUrl&imgurl=https%3A%2F%2Fi.sstatic.net%2FGsDIl.jpg"
const address = "https://www.google.com/imgres?q=imageUrl&imgurl=https%3A%2F%2Fi.sstatic.net%2FGsDIl.jpg"

class coursePage {
  
    pageElements = {
        macbookviewPort: () => cy.viewport('macbook-16'),
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
        updateCourseBtn: () => cy.contains("Edit"),
        onscreenMessageForCourseUpdate: () => cy.contains('Course updated successfully'),
        deleteCourseBtn: () => cy.get('button.css-wvpqgg'),
        secondDeleteBtn: () => cy.get('div.MuiModal-root button.MuiButton-contained'),
        onscreenMessageForCourseDeletion: () => cy.contains('Course deleted successfully'),

    }

    // method to open page url
       // method to open login url
    openApp() {
        this.pageElements.loadUrl();
    }

    assertCoursePage() {
        this.pageElements.coursePageText()
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

    createCourse() {
        this.pageElements.macbookviewPort()
        this.pageElements.loadUrl();
        this.typeCorrectEmailAndPwd()
        this.clickLoginBtn()
        this.pageElements.createCourseBtn().should('be.visible').click()
        this.pageElements.courseTitleInput().type(courseTitle)
        this.pageElements.courseDescriptionInput().type(courseDescription)
        this.pageElements.selectCategory().click({ force: true })
        this.pageElements.categoryInput().click({ force: true })
        this.pageElements.inputImageUrl().type(imageUrl)
        this.pageElements.offlineRadioBtn().click({ force: true })
        this.pageElements.addressInputField().type(address)
        this.pageElements.secondAddCourseBtn().click({ force: true })
    }

    updateCourse() {
       
        this.pageElements.selectCourse().click()
        this.pageElements.updateCourseBtn().click({ force: true })
        this.pageElements.updateCourseBtn().click()
        // this.pageElements.onscreenMessageForCourseUpdate().should('be.visible')
    }

    deleteCourse() {this.pageElements.selectCourse().click()
        this.pageElements.deleteCourseBtn().click({ force: true })
        this.pageElements.secondDeleteBtn().click()
        this.pageElements.onscreenMessageForCourseDeletion().should('be.visible')
    }
}


export const courseCreate = new coursePage()