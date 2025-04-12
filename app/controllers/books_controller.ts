import type { HttpContext } from '@adonisjs/core/http'
import { bookValidator } from '../validators/book.js'

export default class BooksController {
  public async create({ inertia }: HttpContext) {
    return inertia.render('admin/book/add-book', {
      title: 'Add Book',
      description: 'Create a new book',
    })
  }

  public async store({ inertia, request, response }: HttpContext) {
    const data = await request.validateUsing(bookValidator)
    if (!data) {
      return inertia.render('admin/book/add-book', {
        title: 'Add Book',
        description: 'Create a new book',
        errors: ['Invalid data'],
      })
    }
    return response.redirect().toRoute('admin.books.create')
  }
}
