import { courseCreate } from './pages/coursePage.mjs'

describe('creates course successfully', () => {
    it('creates course', () => {
         
        courseCreate.openApp()
        courseCreate.typeCorrectEmailAndPwd()
        courseCreate.clickLoginBtn()
        courseCreate.createCourse()
  })

})