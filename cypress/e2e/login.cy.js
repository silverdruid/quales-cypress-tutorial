import  {login}  from './pages/loginPage.mjs'


describe('login, create and delete course', () => {
  
  it('loads url successfully and confirms page information visibility', () => {
    login.openApp()
    login.confirmPageInformationVisibilty()
    
  })
   
  it('types corrrect email and Incorrect password', () => {
     login.openApp()
     login.confirmPageInformationVisibilty()
     login.typeCorrectEmailAndIncorrectPwd()
     login.clickLoginBtn()
   })
  
  it('types Incorrrect email and correct password', () => {
     login.openApp()
     login.confirmPageInformationVisibilty()
     login.typeIncorrectEmailAndCorrectPwd()
     login.clickLoginBtn()
  })
  
  it('types Incorrrect email and Incorrect password', () => {
     login.openApp()
     login.confirmPageInformationVisibilty()
     login.typeIncorrectEmailAndIncorrectPwd()
     login.clickLoginBtn()
  })
  

    it('types correct email and correct password', () => {
    login.openApp()
    login.confirmPageInformationVisibilty()
    login.typeCorrectEmailAndPwd()
    login.clickLoginBtn()
  })
  
  it('confirms course page visibilty', () => {
    login.openApp()
    login.confirmPageInformationVisibilty()
    login.typeCorrectEmailAndPwd()
    login.clickLoginBtn()
    login.assertCoursePage()
  })


})