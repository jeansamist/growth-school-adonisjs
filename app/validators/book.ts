import vine from '@vinejs/vine'

export const bookValidator = vine.compile(
  vine.object({
    cover: vine.file({ extnames: ['jpg', 'png', 'jpeg'] }),
    file: vine.file({ extnames: ['pdf'] }),
    description: vine.string(),
    discount_percentage: vine.number().optional(),
    title: vine.string(),
    price: vine.number(),
  })
)
