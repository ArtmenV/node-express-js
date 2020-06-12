const { Router } = require('express')
const Course = require('../models/course')
const router = Router()

router.get('/', async (req, res) => {
  const courses = await Course.getAll()
  res.render('courses', {
    title: 'Добавить курс',
    isCourses: true,
    courses
  })
})

router.get('/:id', async (req, res) => {
  const course = await Course
  res.render('course')
})

module.exports = router






