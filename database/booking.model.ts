import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
  {
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Event',
    },
    slug: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true }
);

// ✅ VALID middleware (no next, no arrow)
BookingSchema.pre('save', async function () {
  this.email = this.email.toLowerCase();
});

export default mongoose.models.Booking ||
  mongoose.model('Booking', BookingSchema);
