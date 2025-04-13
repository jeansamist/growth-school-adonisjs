import type { HttpContext } from '@adonisjs/core/http'
import { cuid } from '@adonisjs/core/helpers'
import app from '@adonisjs/core/services/app'
import { normalize, sep } from 'node:path'

export default class FilesController {
  async upload({ request, response }: HttpContext) {
    const file = request.file('file', {
      size: '500mb',
    })
    if (!file) {
      return response.ok({
        statut: false,
        data: null,
      })
    }
    await file.move(app.makePath('storage/uploads'), {
      name: `${cuid()}.${file.extname}`,
    })
    return response.ok({
      statut: true,
      data: { path: 'upload/get/' + file.fileName },
    })
  }

  async get({ request, response }: HttpContext) {
    const PATH_TRAVERSAL_REGEX = /(?:^|[\\/])\.\.(?:[\\/]|$)/
    const filePath = request.param('*').join(sep)
    const normalizedPath = normalize(filePath)
    if (PATH_TRAVERSAL_REGEX.test(normalizedPath)) {
      return response.badRequest({
        statut: false,
        data: null,
      })
    }
    const absolutePath = app.makePath('storage/uploads', normalizedPath)
    console.log(absolutePath)
    return response.download(absolutePath)
  }
}
