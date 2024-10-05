import { courseCreate } from './pages/coursePage.mjs'

describe('deletes course successfully', () => {
    it('deletes course', () => {
         
        courseCreate.openApp()
        courseCreate.typeCorrectEmailAndPwd()
        courseCreate.clickLoginBtn()
        courseCreate.deleteCourse()
  })

})