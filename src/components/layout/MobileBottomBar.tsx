import { Phone, MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";

const MobileBottomBar = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-foreground/95 backdrop-blur-md border-t border-foreground/20">
        <div className="grid grid-cols-3 h-16">
          <a
            href="https://wa.me/60000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 text-primary-foreground"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-[10px] font-body font-medium tracking-wide">WhatsApp</span>
          </a>
          <button
            onClick={() => setBookingOpen(true)}
            className="flex flex-col items-center justify-center gap-1 bg-accent text-accent-foreground"
          >
            <Calendar className="w-5 h-5" />
            <span className="text-[10px] font-body font-bold tracking-wide">Book</span>
          </button>
          <a
            href="tel:+60000000000"
            className="flex flex-col items-center justify-center gap-1 text-primary-foreground"
          >
            <Phone className="w-5 h-5" />
            <span className="text-[10px] font-body font-medium tracking-wide">Call</span>
          </a>
        </div>
      </div>
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
};

export default MobileBottomBar;
