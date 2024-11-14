"use server"

import { db } from "../_lib/prisma"

export const deleteBooking = async (bookingId: number) => {
  await db.booking.delete({
    where: {
      id: bookingId,
    },
  })
}
