import { courseCreate } from './pages/coursePage.mjs'

describe('update course successfully', () => {
    it('updates course', () => {
        courseCreate.openApp()
        courseCreate.typeCorrectEmailAndPwd()
        courseCreate.clickLoginBtn()
        courseCreate.updateCourse()
  })

})