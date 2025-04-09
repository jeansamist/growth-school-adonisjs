import type { HttpContext } from '@adonisjs/core/http'
export default class AppController {
  public async index({ inertia }: HttpContext) {
    return inertia.render('home', {
      title: 'Accueil',
      description: 'Accédez aux meilleures formations , Ebooks et Templates',
    })
  }
}
