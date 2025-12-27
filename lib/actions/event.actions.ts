'use server';

import { IEvent } from '@/database/event.model';
import Event from '@/database/event.model';
import dbConnect from '../mongodb';

export const getSimilarEventsBySlug = async (
  slug: string
): Promise<IEvent[]> => {
  try {
    await dbConnect();

    const event = await Event.findOne({ slug }).lean<IEvent>();

    if (!event) return [];

    const similarEvents = await Event.find({
      _id: { $ne: event._id },
      tags: { $in: event.tags },
    }).lean<IEvent[]>();

    return similarEvents;
  } catch (error) {
    console.error('getSimilarEventsBySlug error:', error);
    return [];
  }
};
